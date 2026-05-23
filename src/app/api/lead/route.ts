import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — bots fill this hidden field
  if (body._hp) {
    return NextResponse.json({ ok: true });
  }

  const { name, phone, serviceNeeded, address, note, _source } = body as {
    name?: string;
    phone?: string;
    serviceNeeded?: string;
    address?: string;
    note?: string;
    _source?: string;
  };

  if (!name || !phone || String(phone).replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      { error: "Name and a valid phone number are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  const now = new Date();
  const timeStr = now.toLocaleString("en-US", {
    timeZone: "America/New_York",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Plain-text WhatsApp block — easy to copy from email and paste into WhatsApp
  const whatsappText = [
    `🔐 *ליד חדש — Tristar Locksmith*`,
    ``,
    `👤 *שם:* ${name}`,
    `📞 *טלפון:* ${phone}`,
    `🔧 *שירות:* ${serviceNeeded || "לא צוין"}`,
    `📍 *כתובת:* ${address || "לא צוין"}`,
    `📝 *הערה:* ${note || "—"}`,
    ``,
    `🕐 ${timeStr}`,
    `🌐 מקור: ${_source ?? "site"}`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from:
      process.env.LEAD_FROM_EMAIL ??
      "Tristar Locksmith Leads <onboarding@resend.dev>",
    to: [process.env.LEAD_TO_EMAIL ?? "tristarlocksmith@gmail.com"],
    subject: `🔐 ליד חדש: ${name} — ${serviceNeeded ?? "General"}`,
    text: whatsappText,
    html: `
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;direction:rtl;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 16px;">
<tr><td>
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">

  <!-- Header -->
  <tr>
    <td style="background:#0a1628;border-radius:12px 12px 0 0;padding:24px 28px;">
      <p style="margin:0;color:#c9a84c;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:bold;">Tristar Locksmith</p>
      <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:bold;">🔐 ליד חדש</h1>
      <p style="margin:4px 0 0;color:#ffffff99;font-size:13px;">${timeStr}</p>
    </td>
  </tr>

  <!-- WhatsApp copy box -->
  <tr>
    <td style="background:#f0fdf4;border:1.5px solid #22c55e;border-radius:0;padding:18px 28px;">
      <p style="margin:0 0 8px;font-size:11px;font-weight:bold;color:#16a34a;text-transform:uppercase;letter-spacing:0.5px;">📋 העתק לווטסאפ</p>
      <pre style="margin:0;font-family:monospace;font-size:13.5px;line-height:1.7;color:#1a1a1a;white-space:pre-wrap;word-break:break-word;">${escapeHtml(whatsappText)}</pre>
    </td>
  </tr>

  <!-- Details card -->
  <tr>
    <td style="background:#ffffff;border-radius:0 0 12px 12px;padding:24px 28px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
            <span style="color:#888;font-size:12px;display:block;margin-bottom:2px;">שם</span>
            <span style="color:#0a1628;font-size:16px;font-weight:bold;">${escapeHtml(name)}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
            <span style="color:#888;font-size:12px;display:block;margin-bottom:2px;">טלפון</span>
            <a href="tel:${escapeHtml(String(phone).replace(/\D/g, ""))}" style="color:#c9a84c;font-size:18px;font-weight:bold;text-decoration:none;">${escapeHtml(String(phone))}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
            <span style="color:#888;font-size:12px;display:block;margin-bottom:2px;">שירות</span>
            <span style="color:#0a1628;font-size:15px;">${escapeHtml(serviceNeeded ?? "לא צוין")}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
            <span style="color:#888;font-size:12px;display:block;margin-bottom:2px;">כתובת / אזור</span>
            <span style="color:#0a1628;font-size:15px;">${escapeHtml(address ?? "לא צוין")}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;">
            <span style="color:#888;font-size:12px;display:block;margin-bottom:2px;">הערה</span>
            <span style="color:#0a1628;font-size:15px;">${escapeHtml(note || "—")}</span>
          </td>
        </tr>
      </table>

      <!-- Call CTA -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
        <tr>
          <td style="background:#c9a84c;border-radius:8px;text-align:center;padding:14px;">
            <a href="tel:${escapeHtml(String(phone).replace(/\D/g, ""))}" style="color:#0a1628;font-size:16px;font-weight:bold;text-decoration:none;">📞 התקשר עכשיו — ${escapeHtml(String(phone))}</a>
          </td>
        </tr>
      </table>

      <p style="margin:20px 0 0;color:#aaa;font-size:11px;text-align:center;">מקור: ${escapeHtml(_source ?? "site")} &middot; tristarlocksmith.com</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send — please call us directly." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
