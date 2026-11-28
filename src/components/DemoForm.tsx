"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/services";

export default function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business_type: "",
    services: [] as string[],
    project_details: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  function toggleService(id: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(id)
        ? f.services.filter((s) => s !== id)
        : [...f.services, id],
    }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-brand-green/40 bg-brand-green/10 p-8 text-center animate-fade-up">
        <p className="text-4xl">✅</p>
        <h3 className="mt-3 text-2xl font-bold">You&apos;re in, {form.name.split(" ")[0] || "friend"}! 🎉</h3>
        <p className="mt-2 text-slate-300">
          Thanks for requesting a free demo. We&apos;ve received your request and we&apos;ll reach
          out within 24 hours to discuss your project. A confirmation email is on its way to{" "}
          <span className="text-white font-semibold">{form.email}</span>.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-slate-600 bg-navy-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-teal focus:outline-none";

  return (
    <form onSubmit={submit} className="space-y-5 rounded-2xl border border-slate-700 bg-navy-850 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold" htmlFor="demo-name">Your name *</label>
          <input id="demo-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold" htmlFor="demo-email">Email *</label>
          <input id="demo-email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@yourbusiness.com" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold" htmlFor="demo-phone">Phone</label>
          <input id="demo-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(815) 555-0123" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold" htmlFor="demo-business">Business type</label>
          <input id="demo-business" value={form.business_type} onChange={(e) => setForm({ ...form, business_type: e.target.value })} placeholder="e.g. Plumbing, HVAC, Roofing…" className={inputCls} />
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">What are you interested in? (pick any)</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <label
              key={s.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-2.5 text-sm transition ${
                form.services.includes(s.id)
                  ? "border-brand-teal bg-brand-teal/10 text-white"
                  : "border-slate-700 bg-navy-900 text-slate-300 hover:border-slate-500"
              }`}
            >
              <input
                type="checkbox"
                checked={form.services.includes(s.id)}
                onChange={() => toggleService(s.id)}
                className="mt-0.5 h-4 w-4 accent-teal-500"
              />
              <span>
                <span className="mr-1">{s.icon}</span>
                {s.id === "seo" ? "SEO" : s.title}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="mb-1.5 block text-sm font-semibold" htmlFor="demo-details">Tell us about your project</label>
        <textarea
          id="demo-details"
          rows={4}
          value={form.project_details}
          onChange={(e) => setForm({ ...form, project_details: e.target.value })}
          placeholder="What does your business do? What do you want your website to do for you?"
          className={inputCls}
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green px-6 py-3.5 text-base font-bold text-white transition hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Request My Free Demo →"}
      </button>
      <p className="text-center text-xs text-slate-400">
        No spam, no obligation. We&apos;ll reach out within 24 hours.
      </p>
    </form>
  );
}
