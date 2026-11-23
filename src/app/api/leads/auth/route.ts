import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const COOKIE = "wa-leads-auth";

// POST /api/leads/auth { password } — sets an httpOnly session cookie if correct.
export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({}));
  const expected = process.env.LEADS_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: "Leads password is not set on the server yet." },
      { status: 500 }
    );
  }
  if (typeof password !== "string" || password !== expected) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  cookies().set(COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return NextResponse.json({ ok: true });
}

// DELETE /api/leads/auth — log out
export async function DELETE() {
  cookies().delete(COOKIE);
  return NextResponse.json({ ok: true });
}
