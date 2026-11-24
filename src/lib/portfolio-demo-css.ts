// Scoped styles for the six display-only demo sites in the Portfolio section.
// Every rule is prefixed with `.demo-slot` so none of it leaks into the rest
// of the site. Copied verbatim from the Web Automate Demo Portfolio artifact
// (updated full-site look, 540x960 design canvas).
export const DEMO_CSS = `
.demo-slot img{display:block;max-width:100%}
.demo-slot .display-only{pointer-events:none;user-select:none;-webkit-user-select:none}
.demo-slot .mini{position:relative;color:#0f172a;overflow:hidden;aspect-ratio:9/16;width:100%;display:flex;flex-direction:column;flex:none;background:#fff}
.demo-slot .m-plumb{background:#fff}
.demo-slot .p-util{background:#082f49;color:#bae6fd;font-size:9px;font-weight:700;letter-spacing:.04em;display:flex;justify-content:space-between;padding:6px 12px;flex:none}
.demo-slot .p-util b{color:#fff}
.demo-slot .p-nav{background:#fff;display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:1px solid #e0f2fe;flex:none}
.demo-slot .p-logo{display:flex;align-items:center;gap:7px}
.demo-slot .p-logo-mark{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#0ea5e9,#0369a1);display:grid;place-items:center;color:#fff;font-size:15px}
.demo-slot .p-logo b{font-family:Sora,sans-serif;font-size:13px;line-height:.95;color:#082f49;display:block}
.demo-slot .p-logo span{font-size:8px;letter-spacing:.16em;font-weight:800;color:#0284c7}
.demo-slot .p-links{font-size:9.5px;font-weight:700;color:#475569;display:flex;gap:9px}
.demo-slot .p-links b{color:#0369a1}
.demo-slot .p-call{background:#facc15;color:#422006;font-size:10.5px;font-weight:900;padding:7px 9px;border-radius:999px;box-shadow:0 3px 0 #a16207;white-space:nowrap}
.demo-slot .p-hero{position:relative;flex:0 0 44%;min-height:0;overflow:hidden}
.demo-slot .p-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.demo-slot .p-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,47,73,.92) 0%,rgba(3,105,161,.82) 52%,rgba(3,105,161,.15) 100%)}
.demo-slot .p-hero-in{position:absolute;inset:0;z-index:2;padding:16px 14px;color:#fff;display:flex;flex-direction:column;justify-content:center}
.demo-slot .p-badge{align-self:flex-start;background:#facc15;color:#422006;font-size:8.5px;font-weight:900;letter-spacing:.12em;padding:5px 7px;border-radius:999px}
.demo-slot .p-hero-in h3{font-family:Sora,sans-serif;font-size:29px;line-height:.95;letter-spacing:-.03em;margin:9px 0 7px;max-width:230px}
.demo-slot .p-hero-in h3 span{color:#fde047}
.demo-slot .p-hero-in p{font-size:12px;line-height:1.5;color:#e0f2fe;margin:0 0 11px;max-width:235px}
.demo-slot .p-ctas{display:flex;gap:7px}
.demo-slot .p-ctas span{padding:9px 11px;border-radius:8px;font-size:12px;font-weight:800}
.demo-slot .p-ctas .y{background:#facc15;color:#111827}
.demo-slot .p-ctas .o{border:1.5px solid rgba(255,255,255,.9);color:#fff}
.demo-slot .p-trust{margin-top:11px;display:flex;align-items:center;gap:7px;font-size:10.5px;font-weight:700}
.demo-slot .p-trust .g{background:#fff;color:#0369a1;border-radius:999px;padding:4px 7px;font-size:10px}
.demo-slot .p-trust i{color:#fde047;font-style:normal;letter-spacing:1px}
.demo-slot .p-seal{position:absolute;right:11px;bottom:11px;z-index:3;width:56px;height:56px;border-radius:50%;background:#fff;border:2px dashed #0284c7;color:#0369a1;display:grid;place-items:center;text-align:center;font-size:7px;font-weight:900;letter-spacing:.06em;line-height:1.3;transform:rotate(-8deg);box-shadow:0 10px 20px rgba(0,0,0,.3);padding:5px}
.demo-slot .p-strip{background:#f0f9ff;border-bottom:1px solid #e0f2fe;display:flex;justify-content:space-between;padding:8px 12px;font-size:9.5px;font-weight:800;color:#0369a1;letter-spacing:.02em;flex:none}
.demo-slot .p-sec{padding:11px 12px 0;flex:none}
.demo-slot .p-sec-head{display:flex;justify-content:space-between;align-items:baseline}
.demo-slot .p-sec-head b{font-family:Sora,sans-serif;font-size:13.5px;color:#082f49}
.demo-slot .p-sec-head span{font-size:10.5px;font-weight:800;color:#0284c7}
.demo-slot .p-services{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:8px}
.demo-slot .p-services div{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:9px 10px;box-shadow:0 4px 12px rgba(2,44,74,.06)}
.demo-slot .p-services i{font-style:normal;width:26px;height:26px;border-radius:8px;background:#e0f2fe;color:#0369a1;display:grid;place-items:center;font-size:13px;margin-bottom:5px}
.demo-slot .p-services b{font-size:12px;color:#0f172a;display:block}
.demo-slot .p-services span{font-size:10.5px;color:#64748b;line-height:1.35;display:block;margin-top:1px}
.demo-slot .p-review{margin:10px 12px 0;background:linear-gradient(135deg,#0369a1,#082f49);border-radius:14px;padding:11px 12px;color:#fff;display:flex;gap:10px;flex:none}
.demo-slot .p-review .av{width:34px;height:34px;border-radius:50%;background:#facc15;color:#422006;display:grid;place-items:center;font-weight:900;font-size:13px;flex:none}
.demo-slot .p-review p{margin:0;font-size:11.5px;line-height:1.45}
.demo-slot .p-review span{color:#fde047;font-size:11px;letter-spacing:1px}
.demo-slot .p-review small{color:#bae6fd;font-weight:700}
.demo-slot .p-book{margin:10px 12px 0;background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center;flex:none}
.demo-slot .p-book b{font-size:12.5px;color:#422006;display:block}
.demo-slot .p-book span{font-size:11px;color:#92400e;font-weight:600}
.demo-slot .p-book em{font-style:normal;background:#082f49;color:#fff;font-size:11.5px;font-weight:800;padding:8px 10px;border-radius:999px;white-space:nowrap}
.demo-slot .p-foot{margin-top:auto;background:#082f49;color:#7dd3fc;text-align:center;padding:9px 10px;font-size:8.5px;font-weight:700;letter-spacing:.06em;line-height:1.5;flex:none}
.demo-slot .p-foot b{color:#fff}
.demo-slot .m-hvac{background:#fff7ed}
.demo-slot .h-util{background:#431407;color:#fed7aa;font-size:9px;font-weight:700;display:flex;justify-content:space-between;padding:6px 12px;flex:none}
.demo-slot .h-util b{color:#fff}
.demo-slot .h-nav{background:#fff;display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:1px solid #ffedd5;flex:none}
.demo-slot .h-logo{display:flex;gap:7px;align-items:center}
.demo-slot .h-logo-mark{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#f97316,#dc2626);color:#fff;display:grid;place-items:center;font-size:14px}
.demo-slot .h-logo b{font-family:Sora,sans-serif;font-size:13px;color:#431407;line-height:.95;display:block}
.demo-slot .h-logo span{font-size:8px;letter-spacing:.14em;font-weight:800;color:#ea580c}
.demo-slot .h-links{font-size:9.5px;font-weight:700;color:#78716c;display:flex;gap:9px}
.demo-slot .h-links b{color:#c2410c}
.demo-slot .h-quote{background:#ea580c;color:#fff;font-size:10.5px;font-weight:800;padding:7px 9px;border-radius:999px;white-space:nowrap}
.demo-slot .h-hero{position:relative;flex:0 0 40%;overflow:hidden}
.demo-slot .h-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.demo-slot .h-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(67,20,7,.88) 0%,rgba(67,20,7,.25) 55%,transparent)}
.demo-slot .h-hero-in{position:absolute;left:13px;right:13px;bottom:12px;z-index:2;color:#fff}
.demo-slot .h-hero-in .tag{display:inline-block;background:rgba(255,255,255,.95);color:#9a3412;font-size:8.5px;font-weight:900;letter-spacing:.11em;padding:5px 7px;border-radius:999px}
.demo-slot .h-hero-in h3{font-family:Sora,sans-serif;font-size:26px;line-height:.98;letter-spacing:-.02em;margin:7px 0 5px;text-shadow:0 2px 12px rgba(0,0,0,.3)}
.demo-slot .h-hero-in p{margin:0;font-size:11.5px;color:#ffedd5;line-height:1.45;max-width:250px}
.demo-slot .h-dial{position:absolute;right:12px;top:12px;z-index:3;width:60px;height:60px;border-radius:50%;background:#fff;border:4px solid #ffedd5;box-shadow:0 10px 22px rgba(0,0,0,.3);display:grid;place-items:center;text-align:center;color:#9a3412}
.demo-slot .h-dial b{font-family:Sora,sans-serif;font-size:16px;line-height:1;display:block}
.demo-slot .h-dial span{font-size:6.5px;font-weight:900;letter-spacing:.1em;color:#ea580c}
.demo-slot .h-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding:10px 12px 0;flex:none}
.demo-slot .h-stats div{background:#fff;border:1px solid #fed7aa;border-radius:12px;padding:8px 4px;text-align:center;box-shadow:0 4px 10px rgba(154,52,18,.06)}
.demo-slot .h-stats b{font-family:Sora,sans-serif;font-size:15px;color:#9a3412;display:block}
.demo-slot .h-stats span{font-size:9.5px;font-weight:700;color:#78716c;line-height:1.3;display:block}
.demo-slot .h-sec{padding:10px 12px 0;flex:none}
.demo-slot .h-sec b{font-family:Sora,sans-serif;font-size:13.5px;color:#431407}
.demo-slot .h-services{margin-top:7px;display:grid;gap:6px}
.demo-slot .h-services div{background:#fff;border:1px solid #ffedd5;border-radius:11px;padding:9px 11px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 3px 8px rgba(0,0,0,.04)}
.demo-slot .h-services b{font-size:12.5px;color:#431407;display:block}
.demo-slot .h-services small{font-size:10.5px;color:#a8a29e;font-weight:600}
.demo-slot .h-services span{font-size:11px;font-weight:800;color:#ea580c;white-space:nowrap}
.demo-slot .h-plan{margin:10px 12px 0;background:linear-gradient(90deg,#f59e0b,#dc2626);color:#fff;border-radius:14px;padding:11px 12px;display:flex;justify-content:space-between;align-items:center;gap:9px;flex:none;box-shadow:0 10px 20px rgba(220,38,38,.25)}
.demo-slot .h-plan b{font-size:13px;display:block}
.demo-slot .h-plan span{font-size:11px;color:#fff7ed}
.demo-slot .h-plan em{font-style:normal;background:#431407;color:#fde68a;font-weight:800;font-size:11px;padding:8px 9px;border-radius:999px;white-space:nowrap}
.demo-slot .h-review{margin:10px 12px 0;background:#fff;border:1px solid #fed7aa;border-radius:12px;padding:9px 11px;font-size:11.5px;line-height:1.5;color:#57534e;flex:none}
.demo-slot .h-review span{color:#f59e0b;letter-spacing:1px}
.demo-slot .h-review b{color:#431407}
.demo-slot .h-foot{margin-top:auto;background:#431407;color:#fed7aa;text-align:center;padding:9px;font-size:8.5px;font-weight:700;letter-spacing:.05em;line-height:1.5;flex:none}
.demo-slot .h-foot b{color:#fff}
.demo-slot .m-roof{background:#f9fafb}
.demo-slot .r-util{background:#dc2626;color:#fff;font-size:9px;font-weight:800;letter-spacing:.06em;text-align:center;padding:6px 10px;flex:none}
.demo-slot .r-nav{background:#111827;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:10px 12px;flex:none}
.demo-slot .r-logo b{font-family:"Bebas Neue",sans-serif;font-size:20px;letter-spacing:.07em;font-weight:400;line-height:1;display:block}
.demo-slot .r-logo b i{font-style:normal;color:#f87171}
.demo-slot .r-logo span{font-size:7.5px;letter-spacing:.18em;font-weight:800;color:#9ca3af}
.demo-slot .r-links{font-size:9.5px;font-weight:700;color:#d1d5db;display:flex;gap:9px}
.demo-slot .r-links b{color:#fff}
.demo-slot .r-phone{background:#dc2626;color:#fff;font-size:10.5px;font-weight:800;padding:7px 9px;border-radius:6px;white-space:nowrap}
.demo-slot .r-hazard{height:7px;background:repeating-linear-gradient(45deg,#dc2626 0 10px,#111827 10px 20px);flex:none}
.demo-slot .r-hero{position:relative;flex:0 0 42%;overflow:hidden}
.demo-slot .r-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.demo-slot .r-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(3,7,18,.92),rgba(3,7,18,.25) 60%,transparent)}
.demo-slot .r-hero-in{position:absolute;left:13px;right:13px;bottom:12px;z-index:2;color:#fff}
.demo-slot .r-hero-in .loc{color:#fca5a5;font-size:9px;font-weight:900;letter-spacing:.14em}
.demo-slot .r-hero-in h3{font-family:"Bebas Neue",sans-serif;font-weight:400;font-size:34px;line-height:.92;letter-spacing:.02em;margin:5px 0 6px;text-shadow:0 3px 0 rgba(220,38,38,.4)}
.demo-slot .r-hero-in p{margin:0;font-size:11.5px;line-height:1.45;color:#e5e7eb;max-width:255px}
.demo-slot .r-form{margin:-2px 12px 0;position:relative;z-index:3;background:#fff;border-radius:14px;box-shadow:0 14px 28px rgba(0,0,0,.16);border:1px solid #e5e7eb;padding:11px 12px;flex:none}
.demo-slot .r-form b{font-family:Sora,sans-serif;font-size:13px;color:#111827;display:block}
.demo-slot .r-form span{font-size:11px;color:#6b7280}
.demo-slot .r-fields{display:flex;gap:6px;margin-top:8px}
.demo-slot .r-fields i{font-style:normal;flex:1;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:8px 9px;font-size:11px;color:#9ca3af;font-weight:600}
.demo-slot .r-fields em{font-style:normal;background:#dc2626;color:#fff;font-weight:800;font-size:11.5px;padding:8px 10px;border-radius:8px;white-space:nowrap}
.demo-slot .r-checks{padding:10px 14px 0;display:grid;gap:5px;flex:none}
.demo-slot .r-checks div{font-size:12px;font-weight:700;color:#374151;display:flex;gap:8px;align-items:center}
.demo-slot .r-checks div:before{content:"✓";width:19px;height:19px;border-radius:50%;background:#fee2e2;color:#b91c1c;display:grid;place-items:center;font-size:11px;flex:none;font-weight:900}
.demo-slot .r-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin:10px 12px 0;flex:none}
.demo-slot .r-stats div{background:#111827;border-radius:11px;padding:9px 6px;text-align:center;color:#fff}
.demo-slot .r-stats b{font-family:"Bebas Neue",sans-serif;font-size:17px;color:#f87171;display:block;letter-spacing:.04em;line-height:1}
.demo-slot .r-stats span{font-size:9px;font-weight:700;color:#d1d5db;line-height:1.3;display:block;margin-top:2px}
.demo-slot .r-strip{margin:10px 12px 0;background:#fff;border:1px solid #e5e7eb;border-radius:11px;padding:9px 11px;font-size:11.5px;line-height:1.5;color:#4b5563;flex:none}
.demo-slot .r-strip span{color:#f59e0b;letter-spacing:1px}
.demo-slot .r-strip b{color:#111827}
.demo-slot .r-foot{margin-top:auto;background:#030712;color:#9ca3af;text-align:center;padding:9px;font-size:8.5px;font-weight:700;letter-spacing:.05em;line-height:1.5;flex:none}
.demo-slot .r-foot b{color:#fff}
.demo-slot .m-lawn{background:#fefce8}
.demo-slot .l-util{background:#14532d;color:#bbf7d0;font-size:9px;font-weight:700;text-align:center;padding:6px 10px;letter-spacing:.03em;flex:none}
.demo-slot .l-util b{color:#fef08a}
.demo-slot .l-nav{background:#fefce8;display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:1px solid #dcfce7;flex:none}
.demo-slot .l-logo{display:flex;align-items:center;gap:7px}
.demo-slot .l-logo-mark{width:28px;height:28px;border-radius:50%;background:#16a34a;color:#fff;display:grid;place-items:center;font-size:14px}
.demo-slot .l-logo b{font-family:"Fraunces",serif;font-size:14px;color:#14532d;line-height:.95;display:block}
.demo-slot .l-logo span{font-size:7.5px;letter-spacing:.15em;font-weight:800;color:#65a30d}
.demo-slot .l-links{font-size:9.5px;font-weight:700;color:#57534e;display:flex;gap:9px}
.demo-slot .l-links b{color:#166534}
.demo-slot .l-quote-btn{background:#14532d;color:#fff;font-size:10.5px;font-weight:800;padding:7px 9px;border-radius:999px;white-space:nowrap}
.demo-slot .l-hero{padding:13px 16px 0;text-align:center;flex:none}
.demo-slot .l-eyebrow{color:#65a30d;font-size:9px;font-weight:900;letter-spacing:.16em}
.demo-slot .m-lawn h3{font-family:"Fraunces",serif;font-size:28px;line-height:1.02;color:#14532d;margin:6px auto 5px;max-width:290px}
.demo-slot .m-lawn h3 em{font-style:italic;color:#16a34a;text-decoration:underline;text-decoration-color:#facc15;text-decoration-thickness:3px;text-underline-offset:4px}
.demo-slot .l-sub{color:#57534e;font-size:12px;line-height:1.5;margin:0 auto;max-width:275px}
.demo-slot .l-photo{position:relative;margin:12px 14px 0;flex:0 0 34%;min-height:0}
.demo-slot .l-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:120px 120px 16px 16px;border:4px solid #fff;box-shadow:0 14px 28px rgba(20,83,45,.2)}
.demo-slot .l-badge{position:absolute;left:10px;bottom:10px;z-index:2;background:rgba(255,255,255,.96);border-radius:999px;padding:6px 9px;font-size:9.5px;font-weight:800;color:#14532d;box-shadow:0 8px 16px rgba(0,0,0,.15)}
.demo-slot .l-badge span{color:#eab308}
.demo-slot .l-services{display:grid;grid-template-columns:1fr 1fr;gap:7px;padding:12px 12px 0;flex:none}
.demo-slot .l-services div{background:#fff;border:1px solid #dcfce7;border-radius:12px;padding:9px 10px;box-shadow:0 4px 10px rgba(20,83,45,.06)}
.demo-slot .l-services b{font-size:12px;color:#14532d;display:block}
.demo-slot .l-services span{font-size:10.5px;color:#78716c;line-height:1.35;display:block;margin-top:1px}
.demo-slot .l-services i{font-style:normal;font-size:14px;display:block;margin-bottom:4px}
.demo-slot .l-review{margin:10px 12px 0;background:#14532d;border-radius:14px;padding:10px 12px;color:#dcfce7;font-size:11.5px;line-height:1.5;flex:none}
.demo-slot .l-review span{color:#fde047;letter-spacing:1px}
.demo-slot .l-review b{color:#fff}
.demo-slot .l-cta{margin:10px 12px 0;background:linear-gradient(90deg,#84cc16,#16a34a);color:#fff;padding:11px;border-radius:999px;font-weight:800;font-size:13px;text-align:center;box-shadow:0 10px 20px rgba(22,163,74,.28);flex:none}
.demo-slot .l-foot{margin-top:auto;background:#052e16;color:#86efac;text-align:center;padding:9px;font-size:8.5px;font-weight:700;letter-spacing:.05em;line-height:1.5;flex:none}
.demo-slot .l-foot b{color:#fff}
.demo-slot .m-dental{background:#f5f3ff;padding:0}
.demo-slot .d-util{background:#4c1d95;color:#ddd6fe;font-size:9px;font-weight:700;text-align:center;padding:6px 10px;flex:none}
.demo-slot .d-util b{color:#fff}
.demo-slot .d-nav{background:#fff;display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:1px solid #ede9fe;flex:none}
.demo-slot .d-logo{display:flex;gap:7px;align-items:center}
.demo-slot .d-logo-mark{width:28px;height:28px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#0d9488);color:#fff;display:grid;place-items:center;font-size:14px}
.demo-slot .d-logo b{font-family:Sora,sans-serif;font-size:13px;color:#1e1b4b;line-height:.95;display:block}
.demo-slot .d-logo span{font-size:7.5px;letter-spacing:.14em;font-weight:800;color:#0d9488}
.demo-slot .d-links{font-size:9.5px;font-weight:700;color:#64748b;display:flex;gap:9px}
.demo-slot .d-links b{color:#6d28d9}
.demo-slot .d-book-btn{background:#7c3aed;color:#fff;font-size:10.5px;font-weight:800;padding:7px 9px;border-radius:999px;white-space:nowrap}
.demo-slot .d-hero{margin:11px 12px 0;background:#fff;border-radius:20px;padding:13px;box-shadow:0 12px 26px rgba(76,29,149,.10);border:1px solid #ede9fe;flex:none}
.demo-slot .d-pill{display:inline-block;background:#ccfbf1;color:#115e59;font-size:8.5px;font-weight:900;letter-spacing:.09em;padding:5px 7px;border-radius:999px}
.demo-slot .d-hero h3{font-family:Sora,sans-serif;font-size:23px;line-height:1.02;letter-spacing:-.03em;color:#1e1b4b;margin:8px 0 6px}
.demo-slot .d-hero h3 span{color:#0d9488}
.demo-slot .d-hero p{font-size:11.5px;line-height:1.5;color:#64748b;margin:0}
.demo-slot .d-hero-img{position:relative;margin-top:11px}
.demo-slot .d-hero-img img{width:100%;height:118px;object-fit:cover;border-radius:14px}
.demo-slot .d-hero-img span{position:absolute;left:9px;bottom:9px;background:rgba(255,255,255,.96);border-radius:999px;padding:5px 8px;font-size:9.5px;font-weight:800;color:#312e81}
.demo-slot .d-hero-img span i{color:#f59e0b;font-style:normal}
.demo-slot .d-feats{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding:10px 12px 0;text-align:center;flex:none}
.demo-slot .d-feats div{background:#fff;border:1px solid #ede9fe;border-radius:14px;padding:9px 5px;box-shadow:0 4px 10px rgba(0,0,0,.04)}
.demo-slot .d-feats i{font-style:normal;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;margin:0 auto 5px;font-size:13px;color:#fff}
.demo-slot .d-feats b{font-size:10.5px;display:block;color:#312e81;line-height:1.25}
.demo-slot .d-feats span{font-size:9.5px;color:#94a3b8;font-weight:600}
.demo-slot .d-list{padding:10px 12px 0;display:grid;gap:6px;flex:none}
.demo-slot .d-list div{background:#fff;border:1px solid #e0e7ff;border-radius:11px;padding:8px 11px;display:flex;justify-content:space-between;align-items:center}
.demo-slot .d-list b{font-size:12px;color:#312e81;display:block}
.demo-slot .d-list small{font-size:10px;color:#94a3b8;font-weight:600}
.demo-slot .d-list span{font-size:11px;font-weight:800;color:#0d9488;white-space:nowrap}
.demo-slot .d-insure{margin:10px 12px 0;background:linear-gradient(90deg,#7c3aed,#0d9488);color:#fff;border-radius:12px;padding:9px 11px;font-size:10.5px;font-weight:700;text-align:center;line-height:1.5;flex:none}
.demo-slot .d-insure b{font-size:11.5px}
.demo-slot .d-foot{margin-top:auto;background:#1e1b4b;color:#c4b5fd;text-align:center;padding:9px;font-size:8.5px;font-weight:700;letter-spacing:.05em;line-height:1.5;flex:none}
.demo-slot .d-foot b{color:#fff}
.demo-slot .m-steak{background:#0c0a09;color:#e7e5e4}
.demo-slot .s-util{background:#000;color:#a8a29e;font-size:8.5px;font-weight:700;letter-spacing:.12em;text-align:center;padding:6px 10px;border-bottom:1px solid rgba(212,175,55,.25);flex:none}
.demo-slot .s-util b{color:#facc15}
.demo-slot .s-nav{padding:11px 14px 9px;text-align:center;border-bottom:1px solid rgba(212,175,55,.18);flex:none}
.demo-slot .s-nav .name{font-family:"Playfair Display",serif;font-size:19px;letter-spacing:.06em;color:#fff}
.demo-slot .s-nav .name em{color:#facc15;font-style:normal}
.demo-slot .s-nav-links{margin-top:6px;font-size:9px;font-weight:800;letter-spacing:.14em;color:#a8a29e;display:flex;justify-content:center;gap:13px}
.demo-slot .s-nav-links b{color:#facc15}
.demo-slot .s-hero{position:relative;flex:0 0 38%;overflow:hidden;margin:12px 14px 0;border:1px solid rgba(212,175,55,.6);padding:5px;background:#1c1917}
.demo-slot .s-hero img{position:absolute;inset:5px;width:calc(100% - 10px);height:calc(100% - 10px);object-fit:cover}
.demo-slot .s-hero:after{content:"";position:absolute;inset:5px;background:linear-gradient(to top,rgba(0,0,0,.82),transparent 55%)}
.demo-slot .s-hero-in{position:absolute;left:14px;right:14px;bottom:12px;z-index:2;text-align:center;color:#fff}
.demo-slot .s-hero-in span{font-size:8.5px;font-weight:800;letter-spacing:.2em;color:#facc15}
.demo-slot .s-hero-in h3{font-family:"Playfair Display",serif;font-size:26px;line-height:1.02;margin:5px 0 0}
.demo-slot .s-hero-in h3 em{background:linear-gradient(100deg,#fde68a,#d97706);-webkit-background-clip:text;background-clip:text;color:transparent}
.demo-slot .s-seal{position:absolute;top:10px;right:10px;z-index:3;width:52px;height:52px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#d97706,#92400e 72%);border:2px dashed rgba(255,235,190,.8);color:#fef3c7;display:grid;place-items:center;text-align:center;font-size:7px;font-weight:800;letter-spacing:.08em;line-height:1.4;transform:rotate(9deg);box-shadow:0 10px 20px rgba(0,0,0,.5);padding:5px}
.demo-slot .s-intro{text-align:center;padding:11px 20px 0;font-size:11.5px;line-height:1.55;color:#d6d3d1;flex:none}
.demo-slot .s-intro b{color:#fff}
.demo-slot .s-menu{margin:11px 16px 0;font-family:"Playfair Display",serif;font-size:13px;flex:none}
.demo-slot .s-menu span{display:flex;justify-content:space-between;gap:10px;border-bottom:1px dotted #57534e;padding:7px 0;color:#e7e5e4}
.demo-slot .s-menu span small{font-family:Manrope,sans-serif;font-size:10px;color:#a8a29e;font-weight:600;display:block;margin-top:1px}
.demo-slot .s-menu b{color:#facc15;white-space:nowrap}
.demo-slot .s-events{margin:11px 14px 0;border:1px solid rgba(212,175,55,.45);background:linear-gradient(135deg,rgba(217,119,6,.18),rgba(0,0,0,.2));border-radius:10px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center;gap:9px;flex:none}
.demo-slot .s-events b{font-family:"Playfair Display",serif;font-size:13px;color:#fff;display:block}
.demo-slot .s-events span{font-size:10.5px;color:#d6d3d1}
.demo-slot .s-events em{font-style:normal;border:1px solid #d4af37;color:#facc15;font-size:10.5px;font-weight:800;letter-spacing:.06em;padding:7px 8px;white-space:nowrap}
.demo-slot .s-btns{display:flex;gap:8px;margin:11px 14px 0;flex:none}
.demo-slot .s-btns span{flex:1;text-align:center;padding:10px;border-radius:2px;font-size:11.5px;font-weight:800;letter-spacing:.07em}
.demo-slot .s-btns .gold{background:linear-gradient(120deg,#f59e0b,#b45309);color:#fff}
.demo-slot .s-btns .line{border:1px solid #d4af37;color:#facc15}
.demo-slot .s-foot{margin-top:auto;background:#000;border-top:1px solid rgba(212,175,55,.3);color:#a8a29e;text-align:center;padding:9px;font-size:8.5px;font-weight:700;letter-spacing:.06em;line-height:1.5;flex:none}
.demo-slot .s-foot b{color:#facc15}
`;
