"use client";

import { useRef, useState } from "react";

// 6 blank portfolio slots — deliberately empty. Real projects are added here later.
const SLOTS = [1, 2, 3, 4, 5, 6];

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  // While a dot/arrow jump is animating, ignore scroll events: the track can
  // only scroll as far as its max, so for the last cards the nearest-to-center
  // card is not the selected one — without this the counter snaps back to 3/6
  // on far jumps (e.g. dot 6 from 1/6).
  const animatingRef = useRef(false);
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function goTo(i: number) {
    const next = (i + SLOTS.length) % SLOTS.length;
    setIndex(next);
    const track = trackRef.current;
    const slot = track?.querySelectorAll<HTMLElement>("[data-slot]")[next];
    if (!track || !slot) return;
    // Scroll the track directly to center the target card. (Previously this
    // used scrollIntoView, which fights the mandatory scroll-snap and snaps
    // back to the current card, so the arrows looked stuck.)
    const target = Math.max(
      0,
      Math.min(
        slot.offsetLeft - (track.clientWidth - slot.clientWidth) / 2,
        track.scrollWidth - track.clientWidth
      )
    );
    animatingRef.current = true;
    if (animTimerRef.current) clearTimeout(animTimerRef.current);
    animTimerRef.current = setTimeout(() => {
      animatingRef.current = false;
    }, 700);
    track.scrollTo({ left: target, behavior: "smooth" });
  }

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    if (animatingRef.current) return;
    const el = e.currentTarget;
    const center = el.scrollLeft + el.clientWidth / 2;
    const slots = el.querySelectorAll<HTMLElement>("[data-slot]");
    let best = 0;
    let bestDist = Infinity;
    slots.forEach((slot, i) => {
      const dist = Math.abs(slot.offsetLeft + slot.clientWidth / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    if (best !== index) setIndex(best);
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-proximity gap-5 overflow-x-auto pb-2"
        onScroll={handleScroll}
      >
        {SLOTS.map((n) => (
          <article
            key={n}
            data-slot
            className="relative w-[240px] shrink-0 snap-center overflow-hidden rounded-[28px] border border-slate-700 bg-gradient-to-b from-navy-800 to-navy-950 shadow-xl shadow-black/40 sm:w-[270px]"
            style={{ aspectRatio: "9 / 16" }}
          >
            {/* phone notch + home bar */}
            <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />
            <div className="absolute bottom-2 left-1/2 z-10 h-1.5 w-24 -translate-x-1/2 rounded-full bg-slate-600/80" />
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <span className="text-4xl opacity-40">🖼️</span>
              <p className="mt-4 text-sm font-semibold text-slate-400">Project {n}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Coming soon — a real client website will go here.
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous project"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 text-lg hover:border-brand-teal hover:text-white"
        >
          ←
        </button>
        <div className="flex gap-2">
          {SLOTS.map((n, i) => (
            <button
              key={n}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${n}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-gradient-to-r from-brand-blue to-brand-green" : "w-2.5 bg-slate-600"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next project"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 text-lg hover:border-brand-teal hover:text-white"
        >
          →
        </button>
        <span className="ml-2 text-sm text-slate-400">
          {index + 1} / {SLOTS.length}
        </span>
      </div>
    </div>
  );
}
