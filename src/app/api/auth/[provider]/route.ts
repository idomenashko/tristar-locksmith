import { type NextRequest } from 'next/server';

/**
 * GitHub OAuth callback for Decap CMS.
 * Exchanges the auth code for an access token and returns an HTML page
 * that posts the token back to the Decap CMS parent window.
 *
 * Required Vercel env vars:
 *   GITHUB_CLIENT_ID     — GitHub OAuth App client ID
 *   GITHUB_CLIENT_SECRET — GitHub OAuth App client secret
 */
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  if (!code) {
    return new Response('Missing authorization code', { status: 400 });
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
