import type { ServiceId } from "@/lib/services";

/**
 * Mock illustration panels reproduced from the Web Automate demo artifact
 * (slug `web-automate`). One panel sits at the top of each service card.
 * Panel contents are reproduced as described in the demo — do not alter.
 */

const VOICE_BAR_HEIGHTS = [
  14, 24, 36, 26, 44, 30, 52, 38, 22, 46, 28, 40, 18, 34, 48, 24, 36, 16,
];

function WebsiteMock() {
  return (
    <div className="w-full max-w-[240px]">
      <div className="overflow-hidden rounded-lg border border-white/15 bg-navy-900 shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-800 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="ml-2 flex-1 rounded bg-white/10 px-2 py-0.5 text-[10px] text-slate-400">
            yourbusiness.com
          </span>
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2 w-3/4 rounded bg-white/20" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="mt-1 h-6 w-20 rounded-full bg-brand-blue" />
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] font-semibold text-slate-400">
        Fast · Mobile-first · Built to convert
      </p>
    </div>
  );
}

function SchedulingMock() {
  return (
    <div className="w-full max-w-[240px]">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className={
              i === 9
                ? "flex h-8 items-center justify-center rounded-md bg-brand-blue text-xs font-bold text-white shadow-lg shadow-brand-blue/40"
                : "flex h-8 items-center justify-center rounded-md bg-white/5 text-xs text-slate-400"
            }
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatbotMock() {
  return (
    <div className="w-full max-w-[240px] space-y-2">
      <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-xs leading-relaxed text-slate-200">
        Hi! Do you handle emergency calls?
      </div>
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-brand-blue px-3 py-2 text-xs leading-relaxed text-white">
        Yes — I can book you in for today. What time works?
      </div>
    </div>
  );
}

function VoiceMock() {
  return (
    <div className="w-full max-w-[260px]">
      <div className="flex h-16 items-center justify-center gap-[3px]">
        {VOICE_BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="wave-bar w-[5px] rounded-full bg-brand-blue"
            style={{ height: h, animationDelay: `${i * 0.09}s` }}
          />
        ))}
      </div>
      <p className="mt-2 text-center text-[11px] font-semibold text-slate-400">
        Incoming call · 8:42 PM · Answered by AI receptionist
      </p>
    </div>
  );
}

function SeoMock() {
  return (
    <div className="relative w-full max-w-[240px]">
      <svg viewBox="0 0 220 90" className="h-[90px] w-full" aria-hidden="true">
        <line x1="0" y1="22" x2="220" y2="22" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <line x1="0" y1="45" x2="220" y2="45" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <line x1="0" y1="68" x2="220" y2="68" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <polyline
          points="10,75 50,60 90,65 130,40 170,30 210,10"
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="210" cy="10" r="4" fill="#22c55e" />
      </svg>
      <span className="absolute -top-1 right-1 rounded-full bg-brand-green px-2 py-0.5 text-xs font-extrabold text-navy-900">
        #1
      </span>
    </div>
  );
}

function GbpMock() {
  return (
    <div className="w-full max-w-[240px] rounded-xl border border-white/15 bg-navy-900 p-3 shadow-lg">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-bold text-white">Your Business</span>
        <span className="text-sm tracking-tight text-amber-400">★★★★★</span>
      </div>
      <p className="mt-0.5 text-[11px] text-slate-400">5.0 · Local service business</p>
      <div className="mt-2.5 flex gap-1.5">
        <span className="flex-1 rounded-md bg-brand-blue px-2 py-1 text-center text-[11px] font-bold text-white">
          Call
        </span>
        <span className="flex-1 rounded-md bg-white/10 px-2 py-1 text-center text-[11px] font-bold text-slate-200">
          Directions
        </span>
        <span className="flex-1 rounded-md bg-white/10 px-2 py-1 text-center text-[11px] font-bold text-slate-200">
          Website
        </span>
      </div>
    </div>
  );
}

export default function ServiceMock({ kind }: { kind: ServiceId }) {
  return (
    <div className="flex h-40 flex-col items-center justify-center overflow-hidden rounded-t-2xl border-b border-white/10 bg-gradient-to-br from-navy-700 via-navy-850 to-navy-900 px-4">
      {kind === "website" && <WebsiteMock />}
      {kind === "scheduling" && <SchedulingMock />}
      {kind === "chatbot" && <ChatbotMock />}
      {kind === "voice" && <VoiceMock />}
      {kind === "seo" && <SeoMock />}
      {kind === "gbp" && <GbpMock />}
    </div>
  );
}
