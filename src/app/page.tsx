import Image from "next/image";
import { LOGO_DATA_URI } from "@/lib/logo";
import { SERVICES, CONTACT } from "@/lib/services";
import DemoForm from "@/components/DemoForm";
import Portfolio from "@/components/Portfolio";
import ServiceMock from "@/components/ServiceMock";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#dashboard", label: "Sample Dashboard" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#results", label: "Results" },
  { href: "#how", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-slate-300">{sub}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* ---------- Sticky header ---------- */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-navy-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <Image src={LOGO_DATA_URI} alt="Web Automate" width={190} height={20} priority unoptimized className="h-7 w-auto" />
          </a>
          <nav className="order-3 flex w-full flex-wrap gap-x-5 gap-y-1 text-sm text-slate-300 lg:order-2 lg:w-auto">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
            ))}
          </nav>
          <a
            href="#contact"
            className="order-2 rounded-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green px-4 py-2 text-sm font-bold text-white lg:order-3"
          >
            Free Demo
          </a>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,107,255,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.18),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-block rounded-full border border-brand-teal/40 bg-brand-teal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-teal">
              For local service businesses
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green bg-clip-text text-transparent">
                Websites That Rank.
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green bg-clip-text text-transparent">
                Systems That Run Themselves.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              We build websites for local service businesses — with online scheduling, an AI
              chatbot, an AI voice receptionist, and SEO built in — so you get found on Google
              and never miss a customer again.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#services" className="rounded-full border border-slate-500 px-7 py-3.5 font-bold hover:border-white">
                See Our Services
              </a>
              <a href="#contact" className="rounded-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-blue/30">
                Request a Free Demo →
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-400">
              📞 <a href={CONTACT.phoneHref} className="text-white hover:underline">{CONTACT.phoneDisplay}</a>
              {"  ·  ✉️ "}
              <a href={`mailto:${CONTACT.email}`} className="text-white hover:underline">{CONTACT.email}</a>
            </p>
          </div>

          {/* Hero mini sample dashboard preview */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-slate-700 bg-navy-850/90 p-5 shadow-2xl shadow-black/50 animate-floaty">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-bold">Sample Dashboard — Preview</p>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300">SAMPLE DATA — PREVIEW</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Website visits", "1,284"],
                ["New leads", "37"],
                ["Calls answered", "52"],
                ["Bookings", "21"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-navy-900 p-3 text-center">
                  <p className="text-2xl font-extrabold text-white">{value}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">
              Example only — this is what your monthly report could look like. Not real client results.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow="What we do"
          title="Six services. One system that works for you."
          sub="Everything a local service business needs to get found, get calls, and get booked — built to work together."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.id} className="card-glow flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1526] transition">
              <ServiceMock kind={s.id} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug"><span className="mr-2">{s.icon}</span>{s.title}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-teal">{s.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{s.body}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="text-emerald-400">✓</span>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Portfolio ---------- */}
      <section id="portfolio" className="scroll-mt-24 border-y border-slate-800 bg-navy-850/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Portfolio"
            title="Building Websites That Drive Results"
            sub="Real client websites will appear here as they're built. Swipe through — these slots are waiting for real work, not placeholders pretending to be clients."
          />
          <Portfolio />
        </div>
      </section>

      {/* ---------- Sample Dashboard ---------- */}
      <section id="dashboard" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow="Monthly report — example"
          title="Sample Dashboard"
          sub="This is an example of the monthly report a client would receive. Every number below is sample data, shown so you can see what the reporting looks like."
        />
        <div className="rounded-2xl border border-slate-700 bg-navy-850 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold">Monthly Report — Example Business</h3>
              <p className="mt-1 text-slate-400">Period: Oct 24 – Nov 22, 2026 · compared with the prior period</p>
            </div>
            <span className="rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-bold text-amber-300">SAMPLE DATA — PREVIEW</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              ["Website visits", "1,284", "+18% vs prior"],
              ["New leads", "37", "+12% vs prior"],
              ["Phone calls", "52", "+9% vs prior"],
              ["Online bookings", "21", "+16% vs prior"],
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-xl border border-slate-700 bg-navy-900 p-4">
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-1 text-3xl font-extrabold">{value}</p>
                <p className="mt-1 text-xs font-semibold text-brand-green">{delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-navy-900 p-5">
              <h4 className="font-bold">Traffic &amp; leads — sample</h4>
              <p className="mt-1 text-xs text-slate-500">Weekly visits vs. leads, Oct 24 – Nov 22, 2026 (sample)</p>
              <div className="mt-5 space-y-3">
                {[
                  ["Week 1", 62, "9 leads"],
                  ["Week 2", 74, "8 leads"],
                  ["Week 3", 85, "11 leads"],
                  ["Week 4", 100, "9 leads"],
                ].map(([week, pct, leads]) => (
                  <div key={week as string} className="flex items-center gap-3 text-sm">
                    <span className="w-14 text-slate-400">{week}</span>
                    <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-16 text-right text-slate-300">{leads}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-navy-900 p-5">
              <h4 className="font-bold">Where leads came from — sample</h4>
              <div className="mt-5 space-y-3">
                {[
                  ["Google Search", 46],
                  ["Google Maps / Business Profile", 27],
                  ["Website chatbot", 16],
                  ["Direct / referral", 11],
                ].map(([src, pct]) => (
                  <div key={src as string} className="flex items-center gap-3 text-sm">
                    <span className="w-52 text-slate-300">{src}</span>
                    <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-blue" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-10 text-right font-bold">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-navy-900 p-5">
              <h4 className="font-bold">Top Google keywords — sample</h4>
              <table className="mt-4 w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-400">
                    <th className="pb-2 font-semibold">Keyword</th>
                    <th className="pb-2 font-semibold">Position</th>
                    <th className="pb-2 text-right font-semibold">Clicks</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  {[
                    ["plumber frankfort il", "3", "41"],
                    ["emergency plumber near me", "5", "28"],
                    ["water heater repair frankfort", "4", "19"],
                    ["drain cleaning frankfort il", "7", "12"],
                  ].map(([kw, pos, clicks]) => (
                    <tr key={kw} className="border-t border-slate-800">
                      <td className="py-2.5 pr-2">{kw}</td>
                      <td className="py-2.5">#{pos}</td>
                      <td className="py-2.5 text-right">{clicks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-xs text-slate-500">Sample keywords for illustration only — not a real client&apos;s rankings.</p>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-700 bg-navy-900 p-5">
                <h4 className="font-bold">AI automation — sample</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>💬 Chatbot conversations: <strong className="text-white">64</strong> · bookings from chat: <strong className="text-white">9</strong></li>
                  <li>📞 Calls answered by voice receptionist: <strong className="text-white">18</strong> (after hours)</li>
                  <li>📅 Bookings taken while the business was closed: <strong className="text-white">7</strong></li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-700 bg-navy-900 p-5">
                <h4 className="font-bold">Recent activity — sample</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>• Nov 22 — New demo request from website form</li>
                  <li>• Nov 21 — Chatbot booked a water-heater repair</li>
                  <li>• Nov 20 — Voice receptionist took an after-hours call</li>
                  <li>• Nov 19 — New Google review received (5 stars)</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            All figures on this page are sample data for illustration. They are not real client results.
          </p>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="border-y border-slate-800 bg-navy-850/50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionHead
            eyebrow="About"
            title="Built for the businesses Google forgets."
            sub="Most local service businesses are great at their trade and invisible online. No website, or a thin one nobody finds. No online booking. Missed calls after hours. Web Automate exists to fix that — a website that ranks, and systems that answer, book, and follow up even when you're on a job."
          />
          <p className="text-slate-300 leading-relaxed">
            We&apos;re based in Frankfort, IL, and we build for service businesses like plumbers,
            electricians, HVAC, painters, cleaners, and contractors — the businesses that keep a
            town running. One system: a website, scheduling, an AI chatbot, an AI voice
            receptionist, SEO, and a Google Business Profile, working together.
          </p>
        </div>
      </section>

      {/* ---------- Why ---------- */}
      <section id="why" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
        <SectionHead eyebrow="Why Web Automate" title="Why it works" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["🔍", "Built to be found", "Keyword-mapped service pages and local SEO, so customers searching for your service in your town can actually find you."],
            ["📅", "Built to book", "Scheduling on your site means a visitor can become a booking in minutes — any time of day, not just during office hours."],
            ["🤖", "Built to answer", "The chatbot and voice receptionist answer when you can't, so a missed call stops being a lost job."],
            ["📊", "Built to be measured", "A monthly report shows visits, leads, calls, and bookings — so you can see what's happening, not guess."],
          ].map(([icon, title, body]) => (
            <article key={title} className="rounded-2xl border border-slate-700 bg-navy-850 p-6">
              <span className="text-3xl">{icon}</span>
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Results ---------- */}
      <section id="results" className="border-y border-slate-800 bg-navy-850/50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionHead
            eyebrow="Results"
            title="What the system is built to do"
            sub="No inflated promises. Here's what a finished Web Automate system is designed to deliver for a local service business."
          />
          <div className="grid gap-4 text-left sm:grid-cols-3">
            {[
              ["More visibility", "Show up in Google Search and Maps for the services and towns you serve."],
              ["More bookings", "Visitors can book online, chat, or call — and get an answer either way."],
              ["Less missed business", "After-hours calls and chats are answered and captured instead of lost."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-navy-900 p-5">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-400">
            We don&apos;t guarantee a #1 ranking — nobody honest can. The system is built to give
            your business the best possible shot at ranking, and to turn the traffic you do get
            into real bookings.
          </p>
        </div>
      </section>

      {/* ---------- How It Works ---------- */}
      <section id="how" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
        <SectionHead eyebrow="How it works" title="From first call to live website" />
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["1", "Request a free demo", "Fill out the form below. Tell us about your business and what you need."],
            ["2", "We reach out within 24 hours", "We talk through your project, your services, and your town."],
            ["3", "We build your system", "Website, scheduling, chatbot, voice receptionist, SEO, and Google Business Profile."],
            ["4", "You go live and get booked", "Your site goes live, customers find you, and bookings start coming in."],
          ].map(([n, title, body]) => (
            <article key={n} className="rounded-2xl border border-slate-700 bg-navy-850 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green text-lg font-extrabold text-white">{n}</span>
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Contact / Demo form ---------- */}
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6">
        <SectionHead
          eyebrow="Free demo"
          title="Request your free demo"
          sub="Tell us about your business. We'll reach out within 24 hours to discuss your project — no spam, no obligation."
        />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-5 rounded-2xl border border-slate-700 bg-navy-850 p-6">
              <div>
                <p className="text-sm font-semibold text-slate-400">Call or Text us <span className="ml-1 rounded-full bg-brand-teal/15 px-2 py-0.5 text-xs font-semibold text-brand-teal">Text preferred</span></p>
                <a href={CONTACT.phoneHref} className="text-xl font-bold hover:underline">{CONTACT.phoneDisplay}</a>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400">Email us</p>
                <a href={`mailto:${CONTACT.email}`} className="text-xl font-bold hover:underline">{CONTACT.email}</a>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400">Website</p>
                <a href={CONTACT.websiteUrl} className="text-xl font-bold hover:underline">{CONTACT.website}</a>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400">Based in</p>
                <p className="text-xl font-bold">{CONTACT.location}</p>
              </div>
              <p className="border-t border-slate-700 pt-4 text-sm leading-relaxed text-slate-300">
                Prefer to talk first? Call or email — or ask the chatbot in the bottom-right corner
                about any of our six services.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <DemoForm />
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-slate-800 bg-navy-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <Image src={LOGO_DATA_URI} alt="Web Automate" width={190} height={20} unoptimized className="h-7 w-auto" />
          <p className="text-sm text-slate-400">Websites That Rank. Systems That Run Themselves.</p>
          <p className="text-sm text-slate-400">
            <a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phoneDisplay}</a>
            {"  ·  "}
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            {"  ·  "}
            <a href={CONTACT.websiteUrl} className="hover:text-white">{CONTACT.website}</a>
            {"  ·  Frankfort, IL"}
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-slate-400">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
            ))}
          </nav>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Web Automate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
