import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin, type LeadInput } from "@/lib/supabase";
import { sendOwnerNotification, sendCustomerConfirmation } from "@/lib/email";
import { SERVICE_TITLES } from "@/lib/services";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const business_type = String(body.business_type ?? "").trim();
  const project_details = String(body.project_details ?? "").trim();
  const services = Array.isArray(body.services)
    ? (body.services as unknown[]).map(String).filter((s) => s in SERVICE_TITLES)
    : [];

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide your name and a valid email address." },
      { status: 400 }
    );
  }

  const lead: LeadInput = { name, email, phone, business_type, services, project_details };

  // 1) Save the lead — this is the part that must not fail silently.
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("[leads] Supabase not configured");
    return NextResponse.json(
      { error: "The form is not connected yet. Please call or email us directly." },
      { status: 500 }
    );
  }
  const { data, error } = await supabase
    .from("leads")
    .insert({
      name,
      email,
      phone: phone || null,
      business_type: business_type || null,
      services,
      project_details: project_details || null,
      status: "new",
    })
    .select("id")
    .single();

  if (error || !data) {
    console.error("[leads] Supabase insert failed:", error);
    return NextResponse.json(
      { error: "Something went wrong saving your request. Please try again or email us directly." },
      { status: 500 }
    );
  }

  // 2) + 3) Emails — failures must NOT block the saved lead.
  // Each send is caught inside its helper and returns a boolean flag.
  const [ownerEmailed, confirmationEmailed] = await Promise.all([
    sendOwnerNotification(lead),
    sendCustomerConfirmation(lead),
  ]);
  if (!ownerEmailed) console.error("[leads] owner notification failed for lead", data.id);
  if (!confirmationEmailed) console.error("[leads] confirmation failed for lead", data.id);

  return NextResponse.json({
    ok: true,
    id: data.id,
    ownerEmailed,
    confirmationEmailed,
  });
}
