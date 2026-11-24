"use client";

import { useEffect, useRef, useState } from "react";
import { DEMO_IMAGES } from "@/lib/portfolio-images";
import { DEMO_CSS } from "@/lib/portfolio-demo-css";

// Six display-only demo sites, copied verbatim from the Web Automate Demo
// Portfolio preview. They are view-only: pointer-events none, no forms,
// no chat, no interaction inside them. Each slot keeps the existing 9:16
// iPhone-frame format, sizing, and swipe/arrows/dots behavior.
const DESIGN_WIDTH = 540;

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
      <div aria-hidden="true" className="mini m-plumb display-only">
      <div className="p-util"><span>📍 Frankfort, IL  •  <b>Open 24 Hours</b></span><span>Lic. #055-042 • Insured</span></div>
      <div className="p-nav"><div className="p-logo"><div className="p-logo-mark">💧</div><div><b>SUMMIT FLOW</b><span>PLUMBING CO.</span></div></div><div className="p-links"><b>Home</b><span>Services</span><span>Reviews</span><span>About</span></div><div className="p-call">☎ Call Now</div></div>
      <div className="p-hero"><img alt="Plumber fixing pipes under a kitchen sink" src={DEMO_IMAGES[0]}/><div className="p-hero-in"><span className="p-badge">★ FRANKFORT’S SAME-DAY PLUMBERS</span><h3>Leak? Burst pipe? <span>Fixed today.</span></h3><p>Upfront pricing, licensed techs, and booking that takes under a minute.</p><div className="p-ctas"><span className="y">📞 Call Now</span><span className="o">Book Online →</span></div><div className="p-trust"><span className="g">G ★ 4.9</span><i>★★★★★</i><span>480+ local reviews</span></div></div><div className="p-seal">★<br/>LICENSED<br/>&amp; INSURED<br/>EST. DEMO</div></div>
      <div className="p-strip"><span>✓ Same-Day Service</span><span>✓ Upfront Pricing</span><span>✓ No Overtime Fees</span></div>
      <div className="p-sec"><div className="p-sec-head"><b>Our Services</b><span>View all →</span></div><div className="p-services"><div><i>🚨</i><b>Emergency Repair</b><span>Burst pipes &amp; leaks — fast</span></div><div><i>🌀</i><b>Drain Cleaning</b><span>Clogs cleared same day</span></div><div><i>🔥</i><b>Water Heaters</b><span>Repair &amp; install</span></div><div><i>🛁</i><b>Remodels</b><span>Bath &amp; kitchen rough-in</span></div></div></div>
      <div className="p-review"><div className="av">M</div><div><span>★★★★★</span><p>“Called at 7am, tech was here by 9. Fixed, clean, fair price.”</p><small>— Mike R., Frankfort • Google Review</small></div></div>
      <div className="p-book"><div><b>Book in under a minute</b><span>Pick a time — we text you back fast</span></div><em>See Times →</em></div>
      <div className="p-foot"><b>SUMMIT FLOW PLUMBING</b> • FRANKFORT, IL • (779) 555-0142<br/>© 2026 Summit Flow Plumbing Co. • Privacy • Terms</div>
      </div>
  );
}

function DemoHvac() {
  return (
      <div aria-hidden="true" className="mini m-hvac display-only">
      <div className="h-util"><span>📍 Tinley Park, IL</span><span><b>24/7 Emergency</b> • (708) 555-0198</span></div>
      <div className="h-nav"><div className="h-logo"><div className="h-logo-mark">★</div><div><b>NorthStar</b><span>HEATING &amp; AIR</span></div></div><div className="h-links"><b>Home</b><span>Services</span><span>Plans</span><span>Reviews</span></div><div className="h-quote">Get a Quote</div></div>
      <div className="h-hero"><img alt="HVAC technician servicing a wall-mounted air conditioner" src={DEMO_IMAGES[1]}/><div className="h-dial"><div><b>72°</b><span>COMFORT SET</span></div></div><div className="h-hero-in"><span className="tag">HEATING • COOLING • SAME-DAY REPAIRS</span><h3>No heat? No AC?<br/>We’re on our way.</h3><p>Repairs, installs &amp; tune-ups — with after-hours coverage built in.</p></div></div>
      <div className="h-stats"><div><b>24/7</b><span>Emergency service</span></div><div><b>Same-Day</b><span>Most repairs</span></div><div><b>4.9 ★</b><span>Demo reviews</span></div></div>
      <div className="h-sec"><b>Services &amp; Repairs</b><div className="h-services"><div><div><b>Furnace Repair</b><small>Diagnostics today</small></div><span>Book →</span></div><div><div><b>AC Install &amp; Replace</b><small>Free in-home quote</small></div><span>Quote →</span></div><div><div><b>Seasonal Tune-Ups</b><small>Heating + cooling</small></div><span>Book →</span></div></div></div>
      <div className="h-plan"><div><b>Comfort Plan — $19/mo</b><span>2 tune-ups a year + priority booking</span></div><em>Join the Plan</em></div>
      <div className="h-review"><span>★★★★★</span>  <b>“House is warm again.”</b><br/>“Tech was here the same afternoon. Honest, fast, no upsell.” — Demo review, Tinley Park</div>
      <div className="h-foot"><b>NORTHSTAR HEATING &amp; AIR</b> • TINLEY PARK, IL • LICENSED &amp; INSURED<br/>© 2026 NorthStar Heating &amp; Air • Open 24 Hours</div>
      </div>
  );
}

function DemoRoof() {
  return (
      <div aria-hidden="true" className="mini m-roof display-only">
      <div className="r-util">⚠ STORM DAMAGE? FREE INSPECTION + PHOTO REPORT — THIS WEEK</div>
      <div className="r-nav"><div className="r-logo"><b>APEX <i>ROOF</i> CO.</b><span>ORLAND PARK • EST. DEMO</span></div><div className="r-links"><b>Home</b><span>Roofing</span><span>Gallery</span></div><div className="r-phone">☎ Call</div></div>
      <div className="r-hazard"></div>
      <div className="r-hero"><img alt="Roofers installing new shingles on a large house" src={DEMO_IMAGES[2]}/><div className="r-hero-in"><div className="loc">ORLAND PARK, IL — ROOFING &amp; EXTERIORS</div><h3>A ROOF YOU NEVER HAVE TO WORRY ABOUT.</h3><p>Replacement, storm repair &amp; gutters — with proof photos on every job.</p></div></div>
      <div className="r-form"><b>Get My Free Inspection</b><span>No pressure. Photo report within 24 hours.</span><div className="r-fields"><i>Your name</i><i>Phone number</i><em>Book →</em></div></div>
      <div className="r-checks"><div>Free inspection &amp; photo report</div><div>Storm-damage help, start to finish</div><div>Licensed, insured &amp; locally owned</div></div>
      <div className="r-stats"><div><b>250+</b><span>Roofs replaced*</span></div><div><b>25-YR</b><span>Workmanship warranty*</span></div><div><b>4.9 ★</b><span>Homeowner reviews*</span></div></div>
      <div className="r-strip"><span>★★★★★</span> <b>“Crew finished in one day.”</b> “Photos before, during, and after. Yard was spotless.” — Demo review</div>
      <div className="r-foot"><b>APEX ROOF CO.</b> • ORLAND PARK, IL • (708) 555-0117<br/>© 2026 Apex Roof Co. • *Demo figures for display</div>
      </div>
  );
}

function DemoLawn() {
  return (
      <div aria-hidden="true" className="mini m-lawn display-only">
      <div className="l-util">🌿 Now booking <b>Spring Cleanups</b> in Mokena &amp; nearby — spots fill fast</div>
      <div className="l-nav"><div className="l-logo"><div className="l-logo-mark">🌿</div><div><b>Everline</b><span>LAWN &amp; LANDSCAPE</span></div></div><div className="l-links"><b>Home</b><span>Services</span><span>Work</span><span>About</span></div><div className="l-quote-btn">Free Quote</div></div>
      <div className="l-hero"><div className="l-eyebrow">MOKENA, IL • LAWN CARE &amp; LANDSCAPING</div><h3>The <em>best-looking</em> yard on the block.</h3><p className="l-sub">Weekly mowing, cleanups, and patios — let the photos do the selling.</p></div>
      <div className="l-photo"><img alt="Beautifully landscaped front yard with a manicured lawn and flower beds" src={DEMO_IMAGES[3]}/><div className="l-badge"><span>★★★★★</span> 4.9 • Demo reviews</div></div>
      <div className="l-services"><div><i>🌱</i><b>Weekly Mowing</b><span>Striped, edged, blown clean</span></div><div><i>🍂</i><b>Cleanups</b><span>Spring &amp; fall, beds included</span></div><div><i>🌸</i><b>Mulch &amp; Beds</b><span>Fresh color, crisp edges</span></div><div><i>🧱</i><b>Patios &amp; Stone</b><span>Design + build projects</span></div></div>
      <div className="l-review"><span>★★★★★</span> <b>“Our yard has never looked this good.”</b><br/>“On time every week. The patio turned out better than the sketch.” — Demo review, Mokena</div>
      <div className="l-cta">Get My Free Quote →</div>
      <div className="l-foot"><b>EVERLINE LAWN &amp; LANDSCAPE</b> • MOKENA, IL • (815) 555-0164<br/>© 2026 Everline Lawn &amp; Landscape • Mon–Sat 7am–6pm</div>
      </div>
  );
}

function DemoDental() {
  return (
      <div aria-hidden="true" className="mini m-dental display-only">
      <div className="d-util">✦ New patients welcome — <b>same-week appointments</b> in New Lenox</div>
      <div className="d-nav"><div className="d-logo"><div className="d-logo-mark">✦</div><div><b>BrightPath</b><span>DENTAL • NEW LENOX</span></div></div><div className="d-links"><b>Home</b><span>Services</span><span>Patients</span></div><div className="d-book-btn">Book a Visit</div></div>
      <div className="d-hero"><span className="d-pill">NEW LENOX • FAMILY &amp; COSMETIC DENTISTRY</span><h3>A smile you’ll <span>actually show off.</span></h3><p>Calm, modern dentistry with pricing up front and booking in under a minute.</p><div className="d-hero-img"><img alt="Dentist showing a tablet to a smiling patient in a modern dental office" src={DEMO_IMAGES[4]}/><span><i>★★★★★</i> 4.9 • Demo patient reviews</span></div></div>
      <div className="d-feats"><div><i style={{background: "#0d9488"}}>✦</i><b>Cleanings</b><span>Family care</span></div><div><i style={{background: "#7c3aed"}}>◐</i><b>Aligners</b><span>Clear &amp; discreet</span></div><div><i style={{background: "#db2777"}}>♥</i><b>Gentle Care</b><span>No judgment</span></div></div>
      <div className="d-list"><div><div><b>New Patient Exam &amp; Cleaning</b><small>X-rays included</small></div><span>Book →</span></div><div><div><b>Clear Aligners Consult</b><small>See your future smile</small></div><span>Free →</span></div><div><div><b>Teeth Whitening</b><small>One-visit results</small></div><span>Book →</span></div></div>
      <div className="d-insure"><b>Most insurance accepted</b><br/>Delta • Cigna • Aetna • CareCredit  •  Next opening: This week →</div>
      <div className="d-foot"><b>BRIGHTPATH DENTAL</b> • NEW LENOX, IL • (815) 555-0129 • MON–SAT<br/>© 2026 BrightPath Dental • Privacy • Accessibility</div>
      </div>
  );
}

function DemoSteak() {
  return (
      <div aria-hidden="true" className="mini m-steak display-only">
      <div className="s-util">FRANKFORT, ILLINOIS  •  <b>NOW BOOKING PRIVATE EVENTS</b>  •  GIFT CARDS AVAILABLE</div>
      <div className="s-nav"><div className="name">THE IRON <em>&amp;</em> OAK</div><div className="s-nav-links"><b>HOME</b><span>MENU</span><span>RESERVATIONS</span><span>PRIVATE EVENTS</span><span>CONTACT</span></div></div>
      <div className="s-hero"><img alt="Plated filet steak with mashed potatoes and greens at a fine dining restaurant" src={DEMO_IMAGES[5]}/><div className="s-seal">EST.<br/>FRANKFORT<br/>· IL ·</div><div className="s-hero-in"><span>WOOD-FIRED • HAND-CUT • NIGHTLY</span><h3>Steak, done right.<br/><em>Every night.</em></h3></div></div>
      <p className="s-intro">An <b>upscale steakhouse with a casual soul</b> — reservations, private events, and gift cards, elegant on every screen.</p>
      <div className="s-menu"><span><span>Filet Mignon<small>Center-cut, wood-fired</small></span><b>Market</b></span><span><span>Ribeye<small>Dry-aged, house butter</small></span><b>Market</b></span><span><span>Wood-Fired Salmon<small>Seasonal preparation</small></span><b>Market</b></span></div>
      <div className="s-events"><div><b>Private Events</b><span>Buyouts &amp; celebrations, handled end to end</span></div><em>PLAN YOURS →</em></div>
      <div className="s-btns"><span className="gold">RESERVE NOW</span><span className="line">VIEW FULL MENU</span></div>
      <div className="s-foot"><b>THE IRON &amp; OAK</b> • FRANKFORT, IL • KITCHEN MON–THU 4–10 • FRI–SAT 4–10 • SUN 1–8<br/>© 2026 The Iron &amp; Oak • Demo concept</div>
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

  // The demo sites are designed at 540px wide (960px tall, exact 9:16); scale them to the slot width.
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
