// Scoped styles for the six display-only demo sites in the Portfolio section.
// Every rule is prefixed with `.demo-slot` so none of it leaks into the rest
// of the site. Copied verbatim from the Web Automate Demo Portfolio artifact.
export const DEMO_CSS = `
.demo-slot img{display:block;max-width:100%}
.demo-slot .display-only {pointer-events:none;user-select:none;-webkit-user-select:none}
.demo-slot .mini {position:relative;color:#0f172a;overflow:hidden}
.demo-slot .m-plumb {background:#fff}
.demo-slot .p-top {background:#082f49;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:10px 16px;font-size:11px;font-weight:800;letter-spacing:.08em}
.demo-slot .p-top .phone {background:#facc15;color:#422006;padding:6px 9px;border-radius:999px;letter-spacing:0;font-size:11px}
.demo-slot .p-hero {display:grid;grid-template-columns:1.08fr .92fr;min-height:252px}
.demo-slot .p-copy {background:linear-gradient(160deg,#0284c7,#0369a1 55%,#0c4a6e);color:#fff;padding:20px 18px 18px}
.demo-slot .p-badge {display:inline-block;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.35);padding:5px 8px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:.12em}
.demo-slot .p-copy h3 {font-family:Sora,sans-serif;font-size:29px;line-height:.95;letter-spacing:-.03em;margin:12px 0 10px}
.demo-slot .p-copy h3 span {color:#fde047}
.demo-slot .p-copy p {font-size:13.5px;line-height:1.55;color:#e0f2fe;margin:0 0 14px}
.demo-slot .p-ctas {display:flex;gap:7px}
.demo-slot .p-ctas span {padding:10px 11px;border-radius:9px;font-size:12.5px;font-weight:800;text-align:center}
.demo-slot .p-ctas .y {background:#facc15;color:#111827;flex:1.2}
.demo-slot .p-ctas .o {border:1.5px solid #fff;color:#fff;flex:1}
.demo-slot .p-stars {margin-top:12px;font-size:12px;color:#fde047;font-weight:700}
.demo-slot .p-stars b {color:#fff}
.demo-slot .p-photo {position:relative;min-height:220px}
.demo-slot .p-photo img {position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.demo-slot .p-photo:after {content:"SAME-DAY SERVICE";position:absolute;bottom:12px;right:12px;background:#fff;color:#0369a1;font-size:10px;font-weight:900;letter-spacing:.08em;padding:7px 9px;border-radius:999px;box-shadow:0 8px 20px rgba(0,0,0,.25)}
.demo-slot .p-services {display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e0f2fe;border-top:1px solid #e0f2fe}
.demo-slot .p-services div {background:#f0f9ff;padding:11px 13px;font-size:12.5px;font-weight:800;color:#0c4a6e;display:flex;gap:8px;align-items:center}
.demo-slot .p-services i {font-style:normal;width:22px;height:22px;border-radius:6px;background:#0284c7;color:#fff;display:grid;place-items:center;font-size:11px;flex:none}
.demo-slot .m-hvac {background:#fff7ed}
.demo-slot .h-photo {height:178px;position:relative}
.demo-slot .h-photo img {width:100%;height:100%;object-fit:cover}
.demo-slot .h-photo:after {content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(67,20,7,.55),transparent 55%)}
.demo-slot .h-nav {position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:2;background:#fff;border-radius:999px;padding:7px 8px 7px 14px;display:flex;align-items:center;gap:14px;box-shadow:0 10px 24px rgba(0,0,0,.25);white-space:nowrap}
.demo-slot .h-nav b {font-family:Sora,sans-serif;font-size:12.5px;color:#431407}
.demo-slot .h-nav span {font-size:11px;font-weight:700;color:#9a3412}
.demo-slot .h-nav em {font-style:normal;background:#ea580c;color:#fff;padding:6px 9px;border-radius:999px;font-size:11px;font-weight:800}
.demo-slot .h-season {position:absolute;left:14px;bottom:12px;z-index:2;color:#fff;font-size:11px;font-weight:800;letter-spacing:.14em}
.demo-slot .h-head {background:linear-gradient(135deg,#f97316,#dc2626);color:#fff;text-align:center;padding:18px 20px 16px}
.demo-slot .h-head h3 {font-family:Sora,sans-serif;font-size:27px;line-height:1;letter-spacing:-.03em;margin:0 0 7px}
.demo-slot .h-head p {margin:0;color:#ffedd5;font-size:13.5px;line-height:1.5}
.demo-slot .h-stats {display:grid;grid-template-columns:repeat(3,1fr);text-align:center;padding:14px 10px 6px;gap:6px}
.demo-slot .h-stats b {font-family:Sora,sans-serif;font-size:18px;color:#9a3412;display:block}
.demo-slot .h-stats span {font-size:11px;font-weight:700;color:#7c2d12;line-height:1.3;display:block}
.demo-slot .h-plan {margin:10px 14px 16px;background:#431407;color:#fff;border-radius:14px;padding:13px 14px;display:flex;justify-content:space-between;align-items:center;gap:10px}
.demo-slot .h-plan b {font-size:13.5px;display:block}
.demo-slot .h-plan span {font-size:12px;color:#fed7aa}
.demo-slot .h-plan em {font-style:normal;background:#fff;color:#9a3412;font-weight:800;font-size:12px;padding:9px 10px;border-radius:999px;white-space:nowrap}
.demo-slot .m-roof {background:#f8fafc}
.demo-slot .r-head {background:#111827;color:#fff;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:4px solid #dc2626}
.demo-slot .r-head b {font-family:"Bebas Neue",sans-serif;font-size:20px;letter-spacing:.08em;font-weight:400}
.demo-slot .r-head b i {font-style:normal;color:#f87171}
.demo-slot .r-head span {font-size:11px;font-weight:800;letter-spacing:.1em;color:#d1d5db}
.demo-slot .r-split {display:grid;grid-template-columns:.88fr 1.12fr}
.demo-slot .r-photo {position:relative;min-height:262px}
.demo-slot .r-photo img {position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.demo-slot .r-photo span {position:absolute;top:12px;left:12px;background:#dc2626;color:#fff;font-size:10px;font-weight:900;letter-spacing:.1em;padding:7px 8px;transform:rotate(-3deg);box-shadow:0 8px 16px rgba(0,0,0,.3)}
.demo-slot .r-copy {padding:18px 16px 14px}
.demo-slot .r-copy .loc {color:#dc2626;font-size:11px;font-weight:900;letter-spacing:.14em}
.demo-slot .r-copy h3 {font-family:"Bebas Neue",sans-serif;font-weight:400;font-size:36px;line-height:.92;letter-spacing:.02em;margin:8px 0 10px;color:#111827}
.demo-slot .r-list {list-style:none;padding:0;margin:0 0 14px;display:grid;gap:7px}
.demo-slot .r-list li {font-size:13px;font-weight:700;color:#374151;display:flex;gap:8px}
.demo-slot .r-list li:before {content:"✓";width:19px;height:19px;border-radius:50%;background:#fee2e2;color:#b91c1c;display:grid;place-items:center;font-size:11px;flex:none}
.demo-slot .r-btn {background:#111827;color:#fff;text-align:center;padding:11px;border-radius:6px;font-weight:800;font-size:13px}
.demo-slot .r-btn b {color:#fca5a5}
.demo-slot .r-strip {display:flex;justify-content:space-between;gap:6px;background:#e5e7eb;padding:9px 14px;font-size:11px;font-weight:800;letter-spacing:.06em;color:#374151;text-transform:uppercase}
.demo-slot .m-lawn {background:#fefce8;padding:18px 18px 16px;text-align:center}
.demo-slot .l-eyebrow {color:#15803d;font-size:11px;font-weight:900;letter-spacing:.18em}
.demo-slot .m-lawn h3 {font-family:"Fraunces",serif;font-size:29px;line-height:1.02;color:#14532d;margin:8px auto 6px;max-width:340px}
.demo-slot .m-lawn .sub {color:#4d7c0f;font-size:13.5px;line-height:1.55;margin:0 auto 14px;max-width:360px}
.demo-slot .l-photo {position:relative;margin:0 8px}
.demo-slot .l-photo img {width:100%;height:196px;object-fit:cover;border-radius:999px 999px 18px 18px;border:4px solid #fff;box-shadow:0 14px 28px rgba(20,83,45,.22)}
.demo-slot .l-quote {position:absolute;left:50%;transform:translateX(-50%);bottom:-14px;width:86%;background:#fff;border-radius:12px;box-shadow:0 12px 24px rgba(0,0,0,.14);padding:9px 12px;font-size:12px;font-weight:700;color:#365314}
.demo-slot .l-quote span {color:#eab308}
.demo-slot .l-services {margin-top:28px;display:flex;flex-wrap:wrap;justify-content:center;gap:6px}
.demo-slot .l-services span {background:#dcfce7;color:#166534;border:1px solid #bbf7d0;padding:7px 10px;border-radius:999px;font-size:12px;font-weight:800}
.demo-slot .l-cta {margin-top:12px;background:#16a34a;color:#fff;padding:11px;border-radius:999px;font-weight:800;font-size:13.5px}
.demo-slot .m-dental {background:linear-gradient(180deg,#f5f3ff 0%,#ecfdf5 100%);padding:14px}
.demo-slot .d-top {display:flex;justify-content:space-between;align-items:center;padding:2px 4px 12px}
.demo-slot .d-top b {font-family:Sora,sans-serif;color:#4c1d95;font-size:14px}
.demo-slot .d-top span {background:#7c3aed;color:#fff;font-size:11.5px;font-weight:800;padding:7px 10px;border-radius:999px}
.demo-slot .d-card {background:#fff;border-radius:20px;padding:16px;box-shadow:0 14px 30px rgba(109,40,217,.12);display:grid;grid-template-columns:1.1fr .9fr;gap:14px;align-items:center}
.demo-slot .d-card .pill {display:inline-block;background:#ccfbf1;color:#115e59;font-size:10px;font-weight:900;letter-spacing:.1em;padding:5px 8px;border-radius:999px}
.demo-slot .d-card h3 {font-family:Sora,sans-serif;font-size:24px;line-height:1.05;letter-spacing:-.03em;color:#1e1b4b;margin:9px 0 8px}
.demo-slot .d-card h3 span {color:#0d9488}
.demo-slot .d-card p {font-size:12.5px;line-height:1.55;color:#64748b;margin:0}
.demo-slot .d-img img {width:100%;height:150px;object-fit:cover;border-radius:999px 999px 16px 16px}
.demo-slot .d-feats {display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;text-align:center}
.demo-slot .d-feats div {background:rgba(255,255,255,.75);border:1px solid #fff;border-radius:14px;padding:11px 6px}
.demo-slot .d-feats i {font-style:normal;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;margin:0 auto 6px;font-size:14px;color:#fff}
.demo-slot .d-feats b {font-size:11.5px;display:block;color:#312e81;line-height:1.25}
.demo-slot .d-bar {margin-top:12px;background:#0f766e;color:#fff;border-radius:999px;padding:11px 14px;display:flex;justify-content:space-between;font-size:12.5px;font-weight:800}
.demo-slot .d-bar span {opacity:.9;font-weight:600}
.demo-slot .m-steak {background:#0c0a09;color:#e7e5e4;padding:20px 18px 18px;text-align:center}
.demo-slot .s-orn {color:#d4af37;font-size:13px;letter-spacing:.5em}
.demo-slot .s-loc {color:#a8a29e;font-size:10.5px;font-weight:800;letter-spacing:.22em;margin-top:8px}
.demo-slot .m-steak h3 {font-family:"Playfair Display",serif;font-size:31px;line-height:1.05;margin:10px 0 8px;color:#fff}
.demo-slot .m-steak h3 em {color:#eab308}
.demo-slot .s-line {width:54px;height:1px;background:#b45309;margin:12px auto}
.demo-slot .m-steak .intro {color:#d6d3d1;font-size:13px;line-height:1.6;margin:0 auto 14px;max-width:360px}
.demo-slot .s-photo {border:1px solid #92400e;padding:6px;background:#1c1917}
.demo-slot .s-photo img {width:100%;height:168px;object-fit:cover}
.demo-slot .s-menu {display:grid;grid-template-columns:1fr 1fr;gap:7px 18px;text-align:left;margin:16px 4px;font-family:"Playfair Display",serif;font-size:13.5px;color:#e7e5e4}
.demo-slot .s-menu span {display:flex;justify-content:space-between;border-bottom:1px dotted #57534e;padding-bottom:5px}
.demo-slot .s-menu b {color:#facc15;font-weight:700}
.demo-slot .s-btns {display:flex;gap:8px}
.demo-slot .s-btns span {flex:1;padding:11px;border-radius:2px;font-size:12.5px;font-weight:800;letter-spacing:.08em}
.demo-slot .s-btns .gold {background:#b45309;color:#fff}
.demo-slot .s-btns .line {border:1px solid #d4af37;color:#facc15}
.demo-slot .p-copy {position:relative;overflow:hidden;background:linear-gradient(160deg,#0ea5e9,#0369a1 55%,#082f49)}
.demo-slot .p-copy:before {content:"FLOW";position:absolute;right:-4px;bottom:-20px;font-family:Sora,sans-serif;font-weight:800;font-size:66px;letter-spacing:-.04em;line-height:1;color:rgba(255,255,255,.10)}
.demo-slot .p-copy:after {content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:22px 22px}
.demo-slot .p-copy>* {position:relative;z-index:1}
.demo-slot .p-photo img {clip-path:polygon(9% 0,100% 0,100% 100%,0 100%)}
.demo-slot .p-seal {position:absolute;top:12px;left:16px;z-index:2;width:62px;height:62px;border-radius:50%;background:rgba(255,255,255,.94);border:2px dashed #0284c7;color:#0369a1;display:grid;place-items:center;text-align:center;font-size:8px;font-weight:900;letter-spacing:.08em;line-height:1.35;transform:rotate(-10deg);box-shadow:0 10px 20px rgba(2,44,74,.35);padding:6px}
.demo-slot .p-wave {display:block;line-height:0;margin-top:-1px}
.demo-slot .p-ctas .y {box-shadow:0 5px 0 #a16207}
.demo-slot .p-services div:nth-child(odd) {background:#e0f2fe}
.demo-slot .p-services div:nth-child(even) {background:#f0f9ff}
.demo-slot .h-photo img {filter:saturate(1.18) contrast(1.03)}
.demo-slot .h-dial {position:absolute;right:14px;bottom:12px;z-index:3;width:70px;height:70px;border-radius:50%;background:#fff;border:5px solid #ffedd5;box-shadow:0 12px 24px rgba(67,20,7,.4);display:grid;place-items:center;text-align:center;transform:rotate(7deg);color:#9a3412}
.demo-slot .h-dial b {font-family:Sora,sans-serif;font-size:19px;line-height:1;display:block}
.demo-slot .h-dial span {font-size:7.5px;font-weight:900;letter-spacing:.14em;color:#ea580c}
.demo-slot .h-head {position:relative;overflow:hidden}
.demo-slot .h-head:before {content:"";position:absolute;inset:0;background:repeating-conic-gradient(from -12deg at 88% -30%,rgba(255,255,255,.16) 0deg 9deg,transparent 9deg 20deg)}
.demo-slot .h-head>* {position:relative;z-index:1}
.demo-slot .h-head h3 {text-shadow:0 2px 0 rgba(124,45,18,.35)}
.demo-slot .h-stats div {background:#fff;border:1.5px dashed #fdba74;border-radius:12px;padding:9px 4px 7px}
.demo-slot .h-plan {background:repeating-linear-gradient(-45deg,rgba(255,255,255,.045) 0 10px,transparent 10px 20px),#431407;border:1px solid #7c2d12}
.demo-slot .r-hazard {height:9px;background:repeating-linear-gradient(45deg,#dc2626 0 12px,#111827 12px 24px)}
.demo-slot .r-copy {position:relative;overflow:hidden}
.demo-slot .r-copy:before {content:"APEX";position:absolute;right:2px;bottom:-8px;font-family:"Bebas Neue",sans-serif;font-size:62px;letter-spacing:.05em;line-height:1;color:rgba(17,24,39,.07)}
.demo-slot .r-copy>* {position:relative;z-index:1}
.demo-slot .r-photo img {clip-path:polygon(0 0,100% 0,100% 100%,0 95%)}
.demo-slot .r-btn {clip-path:polygon(0 0,100% 0,calc(100% - 12px) 100%,0 100%);text-align:left;padding-left:16px}
.demo-slot .r-strip {background:repeating-linear-gradient(135deg,#e5e7eb 0 14px,#d8dde5 14px 28px)}
.demo-slot .r-list li:nth-child(2):before {background:#111827;color:#fca5a5}
.demo-slot .m-lawn {position:relative;background:radial-gradient(360px 210px at 50% 128px,rgba(254,240,138,.85),rgba(254,240,138,0) 70%),#fefce8}
.demo-slot .l-leaf {position:absolute;z-index:2;pointer-events:none}
.demo-slot .l-leaf-a {top:10px;left:10px;transform:rotate(-18deg)}
.demo-slot .l-leaf-b {top:44px;right:12px;transform:rotate(24deg) scale(.8)}
.demo-slot .m-lawn h3 em {font-style:normal;padding-bottom:7px;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6"><path d="M1 3 Q11 0 20 3 T39 3" fill="none" stroke="%23eab308" stroke-width="2.6" stroke-linecap="round"/></svg>') bottom left repeat-x;background-size:40px 6px}
.demo-slot .l-photo:before {content:"";position:absolute;top:-24px;left:50%;transform:translateX(-50%);width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#fde047 0%,rgba(253,224,71,0) 68%);z-index:0}
.demo-slot .l-photo img {position:relative;z-index:1}
.demo-slot .l-quote {border:1.5px dashed #bbf7d0;transform:translateX(-50%) rotate(-1deg)}
.demo-slot .l-services span:nth-child(1) {transform:rotate(-2deg)}
.demo-slot .l-services span:nth-child(3) {transform:rotate(1.6deg)}
.demo-slot .l-services span:nth-child(4) {transform:rotate(-1.2deg)}
.demo-slot .l-cta {border-radius:999px 999px 999px 6px;box-shadow:0 10px 20px rgba(22,163,74,.3)}
.demo-slot .m-dental {position:relative}
.demo-slot .m-dental:before {content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(124,58,237,.16) 1.6px,transparent 1.8px),radial-gradient(rgba(13,148,136,.16) 1.6px,transparent 1.8px);background-size:22px 22px,34px 34px;background-position:0 0,8px 12px}
.demo-slot .m-dental>* {position:relative;z-index:1}
.demo-slot .d-card {border-radius:30px 30px 30px 8px;border:1px solid #ede9fe}
.demo-slot .d-smile {display:block;margin-top:2px}
.demo-slot .d-img {position:relative}
.demo-slot .d-img:before {content:"✦";position:absolute;top:-13px;right:-7px;z-index:2;width:30px;height:30px;border-radius:50%;background:#facc15;color:#713f12;display:grid;place-items:center;font-size:14px;box-shadow:0 8px 16px rgba(250,204,21,.45);transform:rotate(12deg)}
.demo-slot .d-img img {border:3px solid #ccfbf1}
.demo-slot .d-feats div:nth-child(1) {transform:rotate(-1.4deg)}
.demo-slot .d-feats div:nth-child(2) {transform:translateY(4px)}
.demo-slot .d-feats div:nth-child(3) {transform:rotate(1.4deg)}
.demo-slot .d-feats i {box-shadow:0 7px 14px rgba(49,46,129,.22)}
.demo-slot .d-bar {background:linear-gradient(90deg,#0f766e 20%,#7c3aed);box-shadow:0 10px 20px rgba(124,58,237,.25)}
.demo-slot .m-steak {position:relative;background:radial-gradient(430px 250px at 50% -10%,rgba(217,164,65,.20),rgba(217,164,65,0) 70%),#0c0a09}
.demo-slot .m-steak:before {content:"";position:absolute;inset:9px;border:1px solid rgba(212,175,55,.40);pointer-events:none}
.demo-slot .m-steak:after {content:"";position:absolute;inset:13px;border:1px solid rgba(212,175,55,.16);pointer-events:none}
.demo-slot .m-steak>* {position:relative;z-index:1}
.demo-slot .s-fan {display:flex;justify-content:center;margin-bottom:2px}
.demo-slot .s-rule {display:flex;align-items:center;gap:10px;justify-content:center;margin:12px auto;color:#d4af37;font-size:10px;max-width:230px}
.demo-slot .s-rule i {height:1px;background:linear-gradient(90deg,transparent,#b45309);flex:1}
.demo-slot .s-rule i:last-child {background:linear-gradient(90deg,#b45309,transparent)}
.demo-slot .s-photo {position:relative}
.demo-slot .s-seal {position:absolute;top:-17px;right:-9px;z-index:2;width:64px;height:64px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#d97706,#92400e 70%);border:2px dashed rgba(255,235,190,.75);color:#fef3c7;display:grid;place-items:center;text-align:center;font-size:8px;font-weight:800;letter-spacing:.12em;line-height:1.5;transform:rotate(10deg);box-shadow:0 12px 22px rgba(0,0,0,.55);padding:7px}
.demo-slot .m-steak h3 em {background:linear-gradient(100deg,#facc15,#b45309);-webkit-background-clip:text;background-clip:text;color:transparent}
@media(max-width:820px) {
.demo-slot .p-hero {grid-template-columns:1fr}
.demo-slot .p-photo {min-height:180px}
.demo-slot .r-split {grid-template-columns:1fr}
.demo-slot .r-photo {min-height:190px}
}
@media(max-width:760px) {
.demo-slot .d-card {grid-template-columns:1fr}
.demo-slot .d-img img {height:170px}
}
@media(max-width:420px) {
.demo-slot .s-menu {grid-template-columns:1fr}
.demo-slot .p-services {grid-template-columns:1fr 1fr}
}
`;
