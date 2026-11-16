import { NextResponse } from "next/server";
const RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  const { email } = await req.json().catch(() => ({}));
  if (!email || !RE.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  // TODO: persist the subscriber (Mailchimp / Resend Audiences / your DB).
  console.log("[notify] new subscriber:", email);
  return NextResponse.json({ ok: true });
}
