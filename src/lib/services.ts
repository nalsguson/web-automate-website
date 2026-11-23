export const SERVICES = [
  {
    id: "website",
    title: "Full Website Design & Development",
    short: "Full Website",
    icon: "🌐",
    tagline: "A website built to rank and built to convert.",
    body: "A complete, custom website for your business — designed around your services, your town, and the searches your customers actually type. Fast, mobile-first, and built with on-page SEO from the first line of code, not bolted on after.",
    bullets: [
      "Custom design, no cookie-cutter template",
      "Mobile-first and fast-loading",
      "On-page SEO built in from day one",
      "Service pages for every service you offer",
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling & Booking System",
    short: "Scheduling System",
    icon: "📅",
    tagline: "Customers book themselves. You just show up.",
    body: "A built-in booking system on your website, so customers can schedule a service any time — even at midnight. Every booking notifies the business owner by email and phone, so nothing slips through.",
    bullets: [
      "Book online, any time of day",
      "Owner notified by email and phone on every booking",
      "Fewer missed calls, fewer lost jobs",
      "Your hours, your services, your rules",
    ],
  },
  {
    id: "chatbot",
    title: "On-Site AI Chatbot",
    short: "AI Chatbot",
    icon: "💬",
    tagline: "Answers questions and books jobs while you work.",
    body: "An AI chatbot on your website that answers visitor questions, guides them to the right service, and books them straight into your scheduling system — with the owner notified by email and phone.",
    bullets: [
      "Answers questions instantly, 24/7",
      "Guides visitors to the right service",
      "Books directly into your scheduling system",
      "Owner notified on every booking",
    ],
  },
  {
    id: "voice",
    title: "AI Voice Receptionist",
    short: "AI Voice Receptionist",
    icon: "📞",
    tagline: "Every call answered, even when you can't pick up.",
    body: "A limited AI voice receptionist that answers the phone during closed hours and whenever the business owner can't get to it — so a missed call stops being a lost customer.",
    bullets: [
      "Answers during closed hours",
      "Covers calls when you're on a job",
      "Takes the caller's details and reason for calling",
      "You get the message — no more missed leads",
    ],
  },
  {
    id: "seo",
    title: "SEO & Google Ranking",
    short: "SEO & Google Ranking",
    icon: "📈",
    tagline: "On-page SEO, maximized — not just SEO-friendly.",
    body: "Search optimization built to give your business the best possible shot at ranking at the top of Google for the services and towns you serve — keyword-mapped pages, local signals, and technical SEO done properly.",
    bullets: [
      "One dedicated page per service",
      "Service + city keyword targeting",
      "Technical SEO: speed, mobile, structure",
      "Local signals that help you show up nearby",
    ],
  },
  {
    id: "gbp",
    title: "Google Business Profile Creation",
    short: "Google Business Profile",
    icon: "📍",
    tagline: "Show up on Google Maps when locals search.",
    body: "A complete Google Business Profile, set up field by field — the right categories, services, hours, photos, and service area — so your business shows up in the map results when nearby customers search.",
    bullets: [
      "Profile created and verified",
      "Correct categories and services listed",
      "Hours, photos, and service area filled in",
      "Built to support your local ranking",
    ],
  },
] as const;

export type ServiceId = (typeof SERVICES)[number]["id"];

export const SERVICE_TITLES: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.id, s.title])
);

export const CONTACT = {
  phoneDisplay: "815-412-4915",
  phoneHref: "tel:+18154124915",
  email: "infowebautomate@gmail.com",
  website: "webautomate.net",
  websiteUrl: "https://webautomate.net",
  location: "Frankfort, IL",
};

export const CHAT_SYSTEM_PROMPT = `You are the AI assistant on the Web Automate website (webautomate.net), a business in Frankfort, IL that builds websites and ranking systems for local service-based businesses.

You may ONLY answer about: the six Web Automate services, how the free demo works, and how to contact Web Automate.

The six services are:
1. Full Website Design & Development — custom, mobile-first, SEO-built-in websites.
2. Scheduling & Booking System — customers book online any time; the owner is notified by email and phone on every booking.
3. On-Site AI Chatbot — answers visitor questions, guides them, and books into the scheduling system.
4. AI Voice Receptionist — answers calls during closed hours and when the owner can't answer.
5. SEO & Google Ranking — on-page SEO maximized, keyword-mapped service pages, local ranking.
6. Google Business Profile Creation — a complete Google Business Profile set up field by field.

Free demo: a visitor fills out the demo request form on this site. Web Automate will reach out within 24 hours to discuss their project. There is no cost to request a demo.
Contact: phone 815-412-4915, email infowebautomate@gmail.com, website webautomate.net.

Rules:
- Do NOT invent prices, packages, discounts, client results, statistics, testimonials, or guarantees. If asked about pricing, say pricing depends on the project and the free demo call is where it's discussed.
- Do NOT claim any client results or say Web Automate has ranked any specific business.
- Do NOT guarantee a #1 Google ranking. Say the work is built to give the best possible shot at ranking.
- Keep answers short, plain, and helpful. If asked about anything unrelated to Web Automate, politely steer back to the services or the demo form.`;
