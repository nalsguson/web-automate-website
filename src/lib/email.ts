import { Resend } from "resend";
import type { LeadInput } from "./supabase";
import { SERVICE_TITLES } from "./services";

const FROM = "infowebautomate@gmail.com";
const OWNER_EMAILS = (process.env.OWNER_EMAILS ||
  "nalsguson@gmail.com,infowebautomate@gmail.com")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function serviceLines(services: string[]): string {
  if (!services.length) return "(No specific services selected)";
  return services
    .map((s) => SERVICE_TITLES[s] ?? s)
    .map((t) => `• ${t}`)
    .join("\n");
}

/** Owner notification — structured, plain text. Returns true if sent. */
export async function sendOwnerNotification(lead: LeadInput): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[email] RESEND_API_KEY not set — owner notification skipped");
    return false;
  }
  const resend = new Resend(key);
  const count = lead.services.length;
  const text = [
    "NEW DEMO REQUEST — Web Automate website",
    "",
    "CONTACT",
    `Name: ${lead.name || "(not provided)"}`,
    `Email: ${lead.email || "(not provided)"}`,
    `Phone: ${lead.phone || "(not provided)"}`,
    "",
    "BUSINESS",
    `Business type: ${lead.business_type || "(not provided)"}`,
    "",
    "WORK NEEDED",
    count > 0
      ? `${count} service${count === 1 ? "" : "s"} requested:`
      : "No specific services selected.",
    serviceLines(lead.services),
    "",
    "PROJECT DETAILS",
    lead.project_details || "(none provided)",
    "",
    "—",
    "This lead is also saved on your Leads page (/leads).",
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: OWNER_EMAILS,
      subject: `New demo request — ${lead.name || "Web Automate"} (${lead.business_type || "no business type"})`,
      text,
    });
    if (error) {
      console.error("[email] owner notification failed:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[email] owner notification failed:", err);
    return false;
  }
}

/** Customer confirmation — branded HTML, WA logo embedded inline, plus plain-text fallback. */
export async function sendCustomerConfirmation(lead: LeadInput): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[email] RESEND_API_KEY not set — confirmation skipped");
    return false;
  }
  if (!lead.email) return false;
  const resend = new Resend(key);
  const firstName = (lead.name || "there").trim().split(/\s+/)[0] || "there";

  const text = [
    `Hi ${firstName},`,
    "",
    "Thanks for requesting a free demo from Web Automate. We received your request, and we'll reach out within 24 hours to discuss your project.",
    "",
    "Here's what happens next:",
    "1. We review your request and look at your business.",
    "2. We reach out within 24 hours to talk through your project.",
    "3. We show you what your new website and systems could look like.",
    "",
    "Visit us any time: https://webautomate.net",
    "",
    "— Web Automate",
    "webautomate.net",
  ].join("\n");

  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#f1f5f9;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 16px;"><tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background:#0a1128;border:1px solid #1e293b;border-radius:16px;overflow:hidden;">
<tr><td align="center" style="padding:32px 24px 8px;">
<img src="cid:wa-logo" alt="Web Automate" width="220" style="display:block;" />
<p style="margin:16px 0 0;font-size:12px;letter-spacing:3px;color:#94a3b8;">WEBSITES THAT RANK. SYSTEMS THAT RUN THEMSELVES.</p>
</td></tr>
<tr><td style="padding:16px 32px 8px;">
<h1 style="margin:0;font-size:28px;line-height:1.25;">You're in, ${esc(firstName)}! 🎉</h1>
<p style="font-size:16px;line-height:1.6;color:#cbd5e1;">Thanks for requesting a free demo from Web Automate. We received your request, and <strong style="color:#fff;">we'll reach out within 24 hours</strong> to discuss your project.</p>
</td></tr>
<tr><td style="padding:8px 32px;">
<p style="font-size:15px;font-weight:bold;margin:0 0 12px;">Here's what happens next</p>
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:8px 0;border-top:1px solid #1e293b;"><span style="display:inline-block;width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;background:linear-gradient(135deg,#2e6bff,#14b8a6,#22c55e);color:#fff;font-weight:bold;">1</span>&nbsp; We review your request and look at your business.</td></tr>
<tr><td style="padding:8px 0;border-top:1px solid #1e293b;"><span style="display:inline-block;width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;background:linear-gradient(135deg,#2e6bff,#14b8a6,#22c55e);color:#fff;font-weight:bold;">2</span>&nbsp; We reach out within 24 hours to talk through your project.</td></tr>
<tr><td style="padding:8px 0;border-top:1px solid #1e293b;border-bottom:1px solid #1e293b;"><span style="display:inline-block;width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;background:linear-gradient(135deg,#2e6bff,#14b8a6,#22c55e);color:#fff;font-weight:bold;">3</span>&nbsp; We show you what your new website and systems could look like.</td></tr>
</table>
</td></tr>
<tr><td align="center" style="padding:24px 32px 32px;">
<a href="https://webautomate.net" style="display:inline-block;padding:14px 32px;border-radius:999px;background:linear-gradient(135deg,#2e6bff,#14b8a6,#22c55e);color:#fff;text-decoration:none;font-weight:bold;font-size:16px;">Visit webautomate.net</a>
<p style="margin:24px 0 0;font-size:14px;color:#94a3b8;">— Web Automate<br/>webautomate.net</p>
</td></tr>
</table>
</td></tr></table>
</body></html>`;

  // WA logo: read the cropped transparent logo from /public and attach inline.
  // On Vercel this resolves from the project root at runtime.
  let attachments: { filename: string; content: Buffer; contentId: string }[] = [];
  try {
    const fs = await import("fs/promises");
    const path = await import("path");
    const buf = await fs.readFile(
      path.join(process.cwd(), "public", "webautomate-logo.png")
    );
    attachments = [{ filename: "webautomate-logo.png", content: buf, contentId: "wa-logo" }];
  } catch {
    console.warn("[email] logo file not found for confirmation email — sending without inline logo");
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [lead.email],
      subject: `You're in, ${firstName}! Your Web Automate demo request is confirmed`,
      text,
      html,
      attachments: attachments.length ? attachments : undefined,
    });
    if (error) {
      console.error("[email] confirmation failed:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[email] confirmation failed:", err);
    return false;
  }
}
