import type { ServiceId } from "@/lib/services";

/**
 * Mock illustration panels reproduced from the Web Automate demo artifact
 * (slug `web-automate`). Colors and copy match the demo exactly:
 * shared panel gradient #0a1122 → #0d1a33 → #071410, brand gradient
 * #2e6bff → #14b8a6 → #22c55e. Do not alter panel contents.
 */

const VOICE_BAR_FACTORS = [
  0.5, 0.9, 0.4, 1, 0.6, 0.85, 0.35, 0.95, 0.55, 0.75, 0.45, 1, 0.6, 0.8, 0.4,
  0.9, 0.5, 0.7,
];

function WebsiteMock() {
  return (
    <div className="w-full max-w-[240px]">
      <div className="flex items-end gap-2">
        <div className="flex-1 overflow-hidden rounded-lg border border-white/10 bg-black/40 p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>
          <div className="mt-2.5 space-y-2">
            <div className="h-2 w-3/4 rounded bg-white/25" />
            <div className="h-2 w-1/2 rounded bg-white/15" />
            <div className="grad-bg mt-3 h-5 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-14 w-9 shrink-0 rounded-md border border-white/15 bg-black/40 p-1">
          <div className="space-y-1">
            <div className="h-1.5 rounded bg-white/25" />
            <div className="h-1.5 w-2/3 rounded bg-white/15" />
            <div className="grad-bg h-3 rounded-sm" />
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] font-medium text-emerald-300">
        Fast · Mobile-first · Built to convert
      </p>
    </div>
  );
}

function SchedulingMock() {
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="w-full max-w-[240px]">
      <div className="grid grid-cols-7 gap-1.5">
        {weekdays.map((d, i) => (
          <div
            key={i}
            className="text-center text-[10px] font-semibold text-slate-400"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1.5">
        {Array.from({ length: 21 }).map((_, i) => {
          const cls =
            i === 10
              ? "grad-bg font-bold text-white"
              : i === 4 || i === 16
                ? "bg-blue-500/25 text-blue-200"
                : "bg-white/5 text-slate-400";
          return (
            <div
              key={i}
              className={`flex h-5 items-center justify-center rounded-md text-[10px] ${cls}`}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <p className="mt-2 flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-300">
        <span className="text-[14px] leading-none">✓</span>
        Booked — owner notified by email + text
      </p>
    </div>
  );
}

function ChatbotMock() {
  return (
    <div className="w-full max-w-[240px] space-y-2">
      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-[11px] text-slate-200">
        Do you offer free estimates?
      </div>
      <div className="grad-bg ml-auto max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 text-[11px] text-white">
        Yes! I can book one for you right now — what day works best?
      </div>
      <p className="pt-1 text-center text-[11px] font-medium text-emerald-300">
        Answers + books appointments, 24/7
      </p>
    </div>
  );
}

function VoiceMock() {
  return (
    <div className="w-full max-w-[260px]">
      <div className="flex h-16 items-center justify-center gap-[3px]">
        {VOICE_BAR_FACTORS.map((f, i) => (
          <span
            key={i}
            className="wave-bar w-1.5 rounded-full bg-gradient-to-t from-blue-500 to-emerald-400"
            style={{ height: f * 52, animationDelay: `${i * 0.09}s` }}
          />
        ))}
      </div>
      <div className="mt-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[11px] text-slate-200">
        Incoming call · 8:42 PM ·{" "}
        <span className="font-medium text-emerald-300">
          Answered by AI receptionist
        </span>
      </div>
    </div>
  );
}

function SeoMock() {
  return (
    <div className="relative w-full max-w-[240px]">
      <svg viewBox="0 0 220 90" className="h-[90px] w-full" aria-hidden="true">
        <defs>
          <linearGradient id="seoFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M10,75 L50,60 L90,65 L130,40 L170,30 L210,10 L210,90 L10,90 Z"
          fill="url(#seoFill)"
        />
        <polyline
          points="10,75 50,60 90,65 130,40 170,30 210,10"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="grad-text absolute -top-1 right-1 text-3xl font-extrabold">
        #1
      </span>
      <div className="mt-2 space-y-1.5">
        <div className="h-2 w-28 rounded bg-white/20" />
        <div className="h-2 w-20 rounded bg-white/10" />
      </div>
    </div>
  );
}

function GbpMock() {
  return (
    <div className="w-full max-w-[240px] rounded-lg border border-white/10 bg-black/40 p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="h-2.5 w-32 rounded bg-white/30" />
        <span className="text-xs text-amber-400">★★★★★</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-[11px] text-emerald-300">Open · On Google Maps</p>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-red-400"
          aria-hidden="true"
        >
          <path d="M12 2C8.13 2 5 5.13 5 8.5c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>
      </div>
      <div className="mt-2.5 flex gap-1.5">
        <span className="rounded-md bg-blue-500/25 px-2 py-1 text-[10px] font-medium text-blue-100">
          Call
        </span>
        <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium text-slate-200">
          Directions
        </span>
        <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium text-slate-200">
          Website
        </span>
      </div>
      <p className="mt-2 text-[11px] font-medium text-emerald-300">
        Found first in local search
      </p>
    </div>
  );
}

export default function ServiceMock({ kind }: { kind: ServiceId }) {
  return (
    <div className="flex h-40 flex-col items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#0a1122] via-[#0d1a33] to-[#071410] p-4">
      {kind === "website" && <WebsiteMock />}
      {kind === "scheduling" && <SchedulingMock />}
      {kind === "chatbot" && <ChatbotMock />}
      {kind === "voice" && <VoiceMock />}
      {kind === "seo" && <SeoMock />}
      {kind === "gbp" && <GbpMock />}
    </div>
  );
}
