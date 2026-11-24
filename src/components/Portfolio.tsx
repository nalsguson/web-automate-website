"use client";

import { useEffect, useRef, useState } from "react";
import { DEMO_IMAGES } from "@/lib/portfolio-images";
import { DEMO_CSS } from "@/lib/portfolio-demo-css";

// Six display-only demo sites, copied verbatim from the Web Automate Demo
// Portfolio preview. They are view-only: pointer-events none, no forms,
// no chat, no interaction inside them. Each slot keeps the existing 9:16
// iPhone-frame format, sizing, and swipe/arrows/dots behavior.
const DESIGN_WIDTH = 560;

const SLOT_BACKGROUNDS = [
  "#ffffff",
  "#fff7ed",
  "#f8fafc",
  "#fefce8",
  "linear-gradient(180deg,#f5f3ff 0%,#ecfdf5 100%)",
  "#0c0a09",
];

const SLOT_NAMES = [
  "Summit Flow Plumbing",
  "NorthStar Heating & Air",
  "Apex Roof Co.",
  "Everline Lawn & Landscape",
  "BrightPath Dental",
  "The Iron & Oak Steakhouse",
];

function DemoPlumbing() {
  return (
      <div className="mini m-plumb display-only" aria-hidden="true">
              <div className="p-top"><span>◆ SUMMIT FLOW PLUMBING</span><span className="phone">☎ 24/7 — CALL NOW</span></div>
              <div className="p-hero">
                <div className="p-copy"><span className="p-badge">FRANKFORT, IL • SAME DAY</span><h3>Leak? Burst pipe?<br /><span>Fixed today.</span></h3><p>Upfront pricing, licensed techs, and booking that takes under a minute.</p><div className="p-ctas"><span className="y">Call Now</span><span className="o">Book Online →</span></div><div className="p-stars">★★★★★ <b>Demo reviews</b></div></div>
                <div className="p-photo"><img src={DEMO_IMAGES[0]} alt="Plumber fixing pipes under a kitchen sink" /><div className="p-seal">★<br />LICENSED<br />&amp; INSURED</div></div>
              </div>
              <svg className="p-wave" width="100%" height="16" viewBox="0 0 600 16" preserveAspectRatio="none" aria-hidden="true"><path d="M0 8 Q37.5 0 75 8 T150 8 T225 8 T300 8 T375 8 T450 8 T525 8 T600 8 V16 H0 Z" fill="#0284c7" opacity=".28"/><path d="M0 10 Q37.5 3 75 10 T150 10 T225 10 T300 10 T375 10 T450 10 T525 10 T600 10 V16 H0 Z" fill="#0284c7" opacity=".5"/></svg>
              <div className="p-services"><div><i>01</i> Emergency Repair</div><div><i>02</i> Drain Cleaning</div><div><i>03</i> Water Heaters</div><div><i>04</i> Remodels</div></div>
            </div>
  );
}

function DemoHvac() {
  return (
      <div className="mini m-hvac display-only" aria-hidden="true">
              <div className="h-photo"><img src={DEMO_IMAGES[1]} alt="HVAC technician servicing a wall-mounted air conditioner" /><div className="h-nav"><b>NorthStar ★</b><span>Services</span><span>Plans</span><em>Get a Quote</em></div><div className="h-season">TINLEY PARK, IL — HEATING &amp; COOLING</div><div className="h-dial"><div><b>72°</b><span>COMFORT SET</span></div></div></div>
              <div className="h-head"><h3>No heat? No AC?<br />We’re on our way.</h3><p>Repairs, installs &amp; tune-ups — with after-hours coverage built in.</p></div>
              <div className="h-stats"><div><b>24/7</b><span>Emergency<br />service</span></div><div><b>Same-Day</b><span>Most<br />repairs</span></div><div><b>★★★★★</b><span>Demo<br />reviews</span></div></div>
              <div className="h-plan"><div><b>Comfort Plan — $19/mo</b><span>2 tune-ups a year + priority booking</span></div><em>Join the Plan</em></div>
            </div>
  );
}

function DemoRoof() {
  return (
      <div className="mini m-roof display-only" aria-hidden="true">
              <div className="r-head"><b>APEX <i>ROOF</i> CO.</b><span>ROOFING &nbsp;·&nbsp; GALLERY &nbsp;·&nbsp; INSPECTION</span></div>
              <div className="r-hazard"></div>
              <svg width="100%" height="20" viewBox="0 0 600 20" preserveAspectRatio="none" aria-hidden="true" style={{ display: "block", background: "#f8fafc" }}><path d="M0 20 L110 4 L230 16 L340 2 L460 15 L600 5 L600 0 L0 0 Z" fill="#111827"/></svg>
              <div className="r-split">
                <div className="r-photo"><img src={DEMO_IMAGES[2]} alt="Roofers installing new shingles on a large house" /><span>FREE INSPECTION</span></div>
                <div className="r-copy"><div className="loc">ORLAND PARK, IL</div><h3>A ROOF YOU NEVER HAVE TO WORRY ABOUT.</h3><ul className="r-list"><li>Free inspection &amp; photo report</li><li>Storm-damage help, start to finish</li><li>Proof photos on every job</li></ul><div className="r-btn">Book My <b>Free Inspection →</b></div></div>
              </div>
              <div className="r-strip"><span>Replacement</span><span>Storm Repair</span><span>Gutters</span><span>★★★★★ Demo</span></div>
            </div>
  );
}

function DemoLawn() {
  return (
      <div className="mini m-lawn display-only" aria-hidden="true">
              <svg className="l-leaf l-leaf-a" width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" fill="#22c55e"/><path d="M4 20C7 14 12 9 18 6" stroke="#14532d" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
              <svg className="l-leaf l-leaf-b" width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" fill="#84cc16"/><path d="M4 20C7 14 12 9 18 6" stroke="#365314" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
              <div className="l-eyebrow">🌿 EVERLINE LAWN &amp; LANDSCAPE — MOKENA</div>
              <h3>The <em>best-looking</em> yard on the block.</h3>
              <p className="sub">Weekly mowing, cleanups, and patios — let the photos do the selling.</p>
              <div className="l-photo"><img src={DEMO_IMAGES[3]} alt="Beautifully landscaped front yard with a manicured lawn and flower beds" /><div className="l-quote"><span>★★★★★</span> “Our yard has never looked this good.” — Demo review</div></div>
              <div className="l-services"><span>Weekly Mowing</span><span>Cleanups</span><span>Mulch &amp; Beds</span><span>Patios</span></div>
              <div className="l-cta">Get My Free Quote →</div>
            </div>
  );
}

function DemoDental() {
  return (
      <div className="mini m-dental display-only" aria-hidden="true">
              <div className="d-top"><b>✦ BrightPath Dental</b><span>Book a Visit</span></div>
              <div className="d-card">
                <div><span className="pill">NEW LENOX • NEW PATIENTS WELCOME</span><h3>A smile you’ll <span>actually show off.</span></h3><svg className="d-smile" width="86" height="16" viewBox="0 0 86 16" aria-hidden="true"><path d="M4 3 Q43 22 82 3" fill="none" stroke="#0d9488" strokeWidth="3" strokeLinecap="round"/><path d="M76 1 l7 1 -3 6" fill="none" stroke="#7c3aed" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg><p>Calm, modern dentistry with pricing up front and booking in under a minute.</p></div>
                <div className="d-img"><img src={DEMO_IMAGES[4]} alt="Dentist showing a tablet to a smiling patient in a modern dental office" /></div>
              </div>
              <div className="d-feats"><div><i style={{ background: "#0d9488" }}>✦</i><b>Cleanings &amp; Family Care</b></div><div><i style={{ background: "#7c3aed" }}>✦</i><b>Implants &amp; Aligners</b></div><div><i style={{ background: "#db2777" }}>♥</i><b>Gentle, No-Judgment</b></div></div>
              <div className="d-bar"><span>★★★★★ Demo reviews</span><span>Next opening: This week →</span></div>
            </div>
  );
}

function DemoSteak() {
  return (
      <div className="mini m-steak display-only" aria-hidden="true">
              <div className="s-fan"><svg width="92" height="30" viewBox="0 0 92 30" aria-hidden="true"><g fill="none" stroke="#d4af37" strokeWidth="1.4"><path d="M10 28 A36 36 0 0 1 82 28"/><path d="M22 28 A24 24 0 0 1 70 28"/><path d="M34 28 A12 12 0 0 1 58 28"/><path d="M46 28 L46 4"/><path d="M46 28 L20 10"/><path d="M46 28 L72 10"/></g><circle cx="46" cy="28" r="2.4" fill="#d4af37"/></svg></div>
              <div className="s-loc">THE IRON &amp; OAK — FRANKFORT, IL</div>
              <h3>Steak, done right.<br /><em>Every night.</em></h3><div className="s-rule"><i></i>◆<i></i></div>
              <p className="intro">Reservations, private events, and gift cards — elegant on desktop, perfect on a phone.</p>
              <div className="s-photo"><img src={DEMO_IMAGES[5]} alt="Plated filet steak with mashed potatoes and greens at a fine dining restaurant" /><div className="s-seal">EST.<br />FRANKFORT<br />· IL ·</div></div>
              <div className="s-menu"><span>Filet Mignon <b>Market</b></span><span>Ribeye <b>Market</b></span><span>Private Events <b>Book</b></span><span>Gift Cards <b>Shop</b></span></div>
              <div className="s-btns"><span className="gold">RESERVE NOW</span><span className="line">VIEW MENU</span></div>
            </div>
  );
}

const DEMOS = [DemoPlumbing, DemoHvac, DemoRoof, DemoLawn, DemoDental, DemoSteak];

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  // While a dot/arrow jump is animating, ignore scroll events: the track can
  // only scroll as far as its max, so for the last cards the nearest-to-center
  // card is not the selected one — without this the counter snaps back to 3/6
  // on far jumps (e.g. dot 6 from 1/6).
  const animatingRef = useRef(false);
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The demo sites are designed at 560px wide; scale them to the slot width.
  const [slotWidth, setSlotWidth] = useState(240);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    function measure() {
      const w = slotRefs.current[0]?.clientWidth;
      if (w) setSlotWidth(w);
    }
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready?.then(measure);
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);
  const scale = slotWidth / DESIGN_WIDTH;

  function goTo(i: number) {
    const next = (i + DEMOS.length) % DEMOS.length;
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
      <style>{DEMO_CSS}</style>
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-proximity gap-5 overflow-x-auto pb-2"
        onScroll={handleScroll}
      >
        {DEMOS.map((Demo, i) => (
          <div
            key={SLOT_NAMES[i]}
            data-slot
            ref={(el) => {
              slotRefs.current[i] = el;
            }}
            className="w-[240px] shrink-0 snap-center sm:w-[270px]"
          >
            <article
              className="relative w-full overflow-hidden rounded-[28px] border border-slate-700 shadow-xl shadow-black/40"
              style={{ aspectRatio: "9 / 16", background: SLOT_BACKGROUNDS[i] }}
            >
              {/* phone notch + home bar */}
              <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />
              <div className="absolute bottom-2 left-1/2 z-10 h-1.5 w-24 -translate-x-1/2 rounded-full bg-slate-600/80" />
              {/* display-only demo site, scaled to the slot width */}
              <div
                className="demo-slot absolute inset-0 overflow-hidden"
                style={{ pointerEvents: "none" }}
                aria-hidden="true"
              >
                <div
                  style={{
                    width: DESIGN_WIDTH,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                  }}
                >
                  <Demo />
                </div>
              </div>
            </article>
            <p className="mt-2.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Demo only
            </p>
          </div>
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
          {DEMOS.map((_, i) => (
            <button
              key={SLOT_NAMES[i]}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
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
          {index + 1} / {DEMOS.length}
        </span>
      </div>
    </div>
  );
}
