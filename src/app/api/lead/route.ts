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

  const { error } = await resend.emails.send({
    from:
      process.env.LEAD_FROM_EMAIL ??
      "Tristar Locksmith Leads <onboarding@resend.dev>",
    to: [process.env.LEAD_TO_EMAIL ?? "tristarlocksmith@gmail.com"],
    subject: `New Lead: ${escapeHtml(name)} — ${escapeHtml(serviceNeeded ?? "General")}`,
    html: `
      <h2 style="color:#0a1628;">New Tristar Locksmith Lead</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
        <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#555;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#555;">Phone</td><td><a href="tel:${escapeHtml(String(phone).replace(/\s/g, ""))}">${escapeHtml(String(phone))}</a></td></tr>
        <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#555;">Service</td><td>${escapeHtml(serviceNeeded ?? "—")}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#555;">Address / Area</td><td>${escapeHtml(address ?? "—")}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#555;">Note</td><td>${escapeHtml(note ?? "—")}</td></tr>
      </table>
      <hr style="margin:20px 0;border:none;border-top:1px solid #e5e7eb;" />
      <p style="color:#888;font-size:12px;">Source: ${escapeHtml(_source ?? "unknown")} &middot; ${new Date().toISOString()}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send — please call us directly." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
