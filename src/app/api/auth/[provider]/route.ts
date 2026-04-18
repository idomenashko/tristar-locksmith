import { type NextRequest } from 'next/server';

/**
 * GitHub OAuth handler for Decap CMS. Two steps:
 *   Step 1 — no `code`: redirect to GitHub OAuth authorize URL
 *   Step 2 — has `code`: exchange for token, return HTML to parent window
 *
 * Required Vercel env vars:
 *   GITHUB_CLIENT_ID     — GitHub OAuth App client ID
 *   GITHUB_CLIENT_SECRET — GitHub OAuth App client secret
 *
 * GitHub OAuth App callback URL must be:
 *   https://tristar-locksmith.vercel.app/api/auth/callback
 */
export async function GET(request: NextRequest) {
  const { searchParams, protocol, host } = request.nextUrl;
  const code = searchParams.get('code');

  // Step 1: No code — redirect to GitHub OAuth authorization page
  if (!code) {
    const clientId = process.env.GITHUB_CLIENT_ID;
    if (!clientId) {
      return new Response(
        'GITHUB_CLIENT_ID is not set. Add it in Vercel → Settings → Environment Variables.',
        { status: 500 },
      );
    }
    const callbackUrl = `${protocol}//${host}/api/auth/callback`;
    const githubUrl = new URL('https://github.com/login/oauth/authorize');
    githubUrl.searchParams.set('client_id', clientId);
    githubUrl.searchParams.set('scope', 'repo,user');
    githubUrl.searchParams.set('redirect_uri', callbackUrl);
    return Response.redirect(githubUrl.toString());
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = (await tokenRes.json()) as {
    access_token?: string;
    error?: string;
  };

  if (tokenData.error || !tokenData.access_token) {
    const errMsg = JSON.stringify({ error: tokenData.error ?? 'No access token returned' });
    const jsMsg = JSON.stringify(`authorization:github:error:${errMsg}`);
    return new Response(
      `<!doctype html><html><body><script>
(function(){
  function receiveMessage(e){
    window.opener.postMessage(${jsMsg},e.origin);
    window.removeEventListener('message',receiveMessage,false);
  }
  window.addEventListener('message',receiveMessage,false);
  window.opener.postMessage('authorizing:github','*');
})();
<\/script></body></html>`,
      { headers: { 'Content-Type': 'text/html' } },
    );
  }

  const successPayload = JSON.stringify({
    token: tokenData.access_token,
    provider: 'github',
  });
  const jsMsg = JSON.stringify(`authorization:github:success:${successPayload}`);

  const html = `<!doctype html>
<html>
<head><title>Authorizing…</title></head>
<body>
<script>
(function(){
  var message=${jsMsg};
  function receiveMessage(e){
    window.opener.postMessage(message,e.origin);
    window.removeEventListener('message',receiveMessage,false);
  }
  window.addEventListener('message',receiveMessage,false);
  window.opener.postMessage('authorizing:github','*');
})();
<\/script>
</body>
</html>`;

  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
