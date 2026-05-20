import { NextRequest, NextResponse } from "next/server";

const FB_API = "https://graph.facebook.com/v25.0/me/messages";


export async function POST(req: NextRequest) {
  const { name, email, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const text = [
    `Hi, Dielle! New inquiry from your portfolio! 🌷`,
    ``,
    `👤 Name: ${name}`,
    `📧 Email: ${email}`,
    `🛠️ Service: ${service || "Not specified"}`,
    ``,
    `💬 Message:`,
    message,
  ].join("\n");

  const res = await fetch(
    `${FB_API}?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        recipient: { id: process.env.FB_RECIPIENT_PSID_1 },
        message: { text },
        messaging_type: "MESSAGE_TAG",
        tag: "ACCOUNT_UPDATE",
      }),
    }
  );

const res1 = await fetch(
    `${FB_API}?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        recipient: { id: process.env.FB_RECIPIENT_PSID_2 },
        message: { text },
        messaging_type: "MESSAGE_TAG",
        tag: "ACCOUNT_UPDATE",
      }),
    }
  );

  if (!res.ok || !res1.ok) {
    const err = await res.json();
    console.error("Facebook API error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}