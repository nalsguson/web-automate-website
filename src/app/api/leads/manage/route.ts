import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseAdmin } from "@/lib/supabase";

const COOKIE = "wa-leads-auth";

function authed() {
  return cookies().get(COOKIE)?.value === "1";
}

// GET /api/leads — owner only (cookie set by /api/leads/auth)
export async function GET() {
  if (!authed()) return NextResponse.json({ error: "Owner only." }, { status: 401 });
  const supabase = getSupabaseAdmin();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured." }, { status: 500 });
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ leads: data ?? [] });
}

// PATCH /api/leads?id=... { status: "contacted" | "closed" }
export async function PATCH(req: NextRequest) {
  if (!authed()) return NextResponse.json({ error: "Owner only." }, { status: 401 });
  const id = req.nextUrl.searchParams.get("id");
  const { status } = await req.json().catch(() => ({}));
  if (!id || !["new", "contacted", "closed"].includes(status)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured." }, { status: 500 });
  const { error } = await supabase.from("leads").update({ status }).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

// DELETE /api/leads?id=...
export async function DELETE(req: NextRequest) {
  if (!authed()) return NextResponse.json({ error: "Owner only." }, { status: 401 });
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const supabase = getSupabaseAdmin();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured." }, { status: 500 });
  const { error } = await supabase.from("leads").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
