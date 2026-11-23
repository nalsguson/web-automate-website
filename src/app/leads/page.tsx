"use client";

import { useState, useEffect, useCallback } from "react";
import { SERVICE_TITLES } from "@/lib/services";

type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  business_type: string | null;
  services: string[];
  project_details: string | null;
  status: "new" | "contacted" | "closed";
};

export default function LeadsPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "closed">("all");

  const load = useCallback(async () => {
    const res = await fetch("/api/leads/manage");
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Could not load leads.");
      return;
    }
    setAuthed(true);
    setLeads(data.leads ?? []);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/leads/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setLoginError(data.error || "Wrong password.");
      return;
    }
    setPassword("");
    load();
  }

  async function setStatus(id: string, status: Lead["status"]) {
    await fetch(`/api/leads/manage?id=${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function remove(id: string, name: string) {
    if (!confirm(`Delete the lead from ${name}? This can't be undone.`)) return;
    await fetch(`/api/leads/manage?id=${id}`, { method: "DELETE" });
    load();
  }

  async function logout() {
    await fetch("/api/leads/auth", { method: "DELETE" });
    setAuthed(false);
    setLeads([]);
  }

  if (authed === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-navy-900 px-4">
        <p className="text-slate-400">Loading…</p>
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-navy-900 px-4">
        <form onSubmit={login} className="w-full max-w-sm rounded-2xl border border-slate-700 bg-navy-850 p-8">
          <h1 className="text-2xl font-bold">Owner only</h1>
          <p className="mt-2 text-sm text-slate-400">
            The Leads page is private to the site owner. Enter your leads password to continue.
          </p>
          <label className="mt-6 block text-sm font-semibold" htmlFor="leads-password">Password</label>
          <input
            id="leads-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-slate-600 bg-navy-900 px-4 py-3 text-white focus:border-brand-teal focus:outline-none"
            autoFocus
          />
          {loginError && <p className="mt-3 text-sm text-red-300">{loginError}</p>}
          <button type="submit" className="mt-5 w-full rounded-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green px-6 py-3 font-bold text-white">
            View Leads
          </button>
          <a href="/" className="mt-4 block text-center text-sm text-slate-400 hover:text-white">← Back to website</a>
        </form>
      </main>
    );
  }

  const shown = filter === "all" ? leads : leads.filter((l) => l.status === filter);
  const counts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    closed: leads.filter((l) => l.status === "closed").length,
  };

  return (
    <main className="min-h-screen bg-navy-900 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold">Leads</h1>
            <p className="mt-1 text-slate-400">Demo requests from webautomate.net — owner only.</p>
          </div>
          <div className="flex gap-3">
            <a href="/" className="rounded-full border border-slate-600 px-4 py-2 text-sm hover:border-white">← Website</a>
            <button onClick={logout} className="rounded-full border border-slate-600 px-4 py-2 text-sm hover:border-white">Log out</button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {(["all", "new", "contacted", "closed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${
                filter === f ? "bg-gradient-to-r from-brand-blue to-brand-green text-white" : "border border-slate-600 text-slate-300"
              }`}
            >
              {f} ({counts[f]})
            </button>
          ))}
          <button onClick={load} className="ml-auto rounded-full border border-slate-600 px-4 py-2 text-sm">Refresh</button>
        </div>

        {error && <p className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}
        {shown.length === 0 && !error && (
          <p className="mt-8 rounded-2xl border border-slate-700 bg-navy-850 p-8 text-center text-slate-400">
            No leads {filter === "all" ? "yet" : `with status “${filter}”`}. New demo requests will appear here.
          </p>
        )}

        <div className="mt-6 space-y-4">
          {shown.map((l) => (
            <article key={l.id} className="rounded-2xl border border-slate-700 bg-navy-850 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold">{l.name}</h2>
                  <p className="text-sm text-slate-400">
                    {new Date(l.created_at).toLocaleString()} · {l.business_type || "No business type"}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${
                  l.status === "new" ? "bg-brand-blue/20 text-blue-300" :
                  l.status === "contacted" ? "bg-amber-500/15 text-amber-300" :
                  "bg-brand-green/15 text-green-300"
                }`}>{l.status}</span>
              </div>
              <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                <p>✉️ <a href={`mailto:${l.email}`} className="text-white hover:underline">{l.email}</a></p>
                <p>📞 {l.phone ? <a href={`tel:${l.phone}`} className="text-white hover:underline">{l.phone}</a> : "(not provided)"}</p>
              </div>
              <p className="mt-3 text-sm">
                <strong>Services ({l.services.length}):</strong>{" "}
                {l.services.length
                  ? l.services.map((s) => SERVICE_TITLES[s] ?? s).join(", ")
                  : "None selected"}
              </p>
              {l.project_details && (
                <p className="mt-2 rounded-xl bg-navy-900 p-3 text-sm leading-relaxed text-slate-300">{l.project_details}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={() => setStatus(l.id, "contacted")} className="rounded-full border border-slate-600 px-3 py-1.5 text-xs font-semibold hover:border-amber-400">Mark contacted</button>
                <button onClick={() => setStatus(l.id, "closed")} className="rounded-full border border-slate-600 px-3 py-1.5 text-xs font-semibold hover:border-brand-green">Mark closed</button>
                <button onClick={() => setStatus(l.id, "new")} className="rounded-full border border-slate-600 px-3 py-1.5 text-xs font-semibold hover:border-brand-blue">Mark new</button>
                <button onClick={() => remove(l.id, l.name)} className="ml-auto rounded-full border border-red-500/50 px-3 py-1.5 text-xs font-semibold text-red-300 hover:bg-red-500/10">Delete</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
