import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoAsset from "@/assets/logo.asset.json";
import team1Asset from "@/assets/team1.asset.json";
import team2Asset from "@/assets/team2.asset.json";
import sniperAsset from "@/assets/sniper.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strategic Task Force — Zayd Kahn | Tactical, Medical & Protection Training" },
      { name: "description", content: "Founded by Zayd Kahn — HPCSA ILS Paramedic, PFTC Advanced Firearms Instructor, Piper Knife Master Guardian & 20-year VIP Protection operator. Live-fire, tactical medicine & close-protection training in Durban, South Africa." },
      { property: "og:title", content: "Strategic Task Force — Zayd Kahn" },
      { property: "og:description", content: "Battlefield medicine, live-fire doctrine & executive protection tradecraft — trained by a 20-year operator." },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:image", content: logoAsset.url },
    ],
  }),

  component: Index,
});

const VIDEO_1 = "https://skiy9cizul.ufs.sh/f/kOxGBlH1ZBgl6th4UHCXO1gWw4yhBf8R0FuU2nEAa7z5mcNT";
const VIDEO_2 = "https://skiy9cizul.ufs.sh/f/kOxGBlH1ZBglC7zggoDH0gLtQ9DhEAWlpoiPw8RS4k73FGnX";

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="STF" className="h-10 w-10 object-contain drop-shadow-[0_0_8px_oklch(0.78_0.18_200/0.6)]" />
          <div className="leading-tight">
            <div className="text-stencil text-xs text-accent">STRATEGIC TASK FORCE</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.3em]">TACTICAL TRAINING CENTER</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <a href="#mission" className="hover:text-accent transition">Mission</a>
          <a href="#programs" className="hover:text-accent transition">Programs</a>
          <a href="#cell" className="hover:text-accent transition">Cell</a>
          <a href="#operators" className="hover:text-accent transition">Operators</a>
          <a href="#field" className="hover:text-accent transition">Field</a>
          <a href="#dossier" className="hover:text-accent transition">Dossier</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>

        </div>
        <a href="#contact" className="clip-tag bg-primary text-primary-foreground px-5 py-2 text-xs font-bold uppercase tracking-widest hover:glow-gold transition">
          Enlist
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const y = useParallax();
  return (
    <section id="top" className="relative min-h-screen overflow-hidden camo-gradient pt-16">
      {/* parallax video bg */}
      <div className="absolute inset-0 opacity-30" style={{ transform: `translateY(${y * 0.3}px)` }}>
        <video src={VIDEO_1} autoPlay muted loop playsInline className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>
      <div className="absolute inset-0 tactical-grid opacity-40" />
      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-scanline" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center min-h-[calc(100vh-4rem)]">
        <div>
          <div className="inline-flex items-center gap-2 text-stencil text-xs text-accent border border-accent/40 px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse" />
            ACTIVE — TRAINING CYCLE 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
            <span className="block gold-text">FORGE</span>
            <span className="block cyan-text">THE OPERATOR</span>
            <span className="block text-foreground">WITHIN.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Strategic Task Force trains civilians, security professionals, and law enforcement
            in elite firearms, close-quarter combat, and protective operations — under live
            conditions, by combat-tested instructors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#programs" className="clip-tag bg-accent text-accent-foreground px-7 py-3 font-bold uppercase tracking-widest hover:glow-cyan transition">
              View Programs
            </a>
            <a href="#field" className="clip-tag border border-primary/60 text-primary px-7 py-3 font-bold uppercase tracking-widest hover:bg-primary/10 transition">
              Watch Field Ops
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 max-w-md gap-4 text-stencil">
            {[["20 YR","VIP protection"],["12 YR","HPCSA paramedic"],["3° DAN","Shotokan"]].map(([n,l]) => (
              <div key={l} className="border-l-2 border-accent/60 pl-3">
                <div className="text-2xl gold-text">{n}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{l}</div>
              </div>
            ))}
          </div>

        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse-ring" />
          <img
            src={logoAsset.url}
            alt="Strategic Task Force shield"
            className="relative w-full max-w-md mx-auto drop-shadow-[0_0_40px_oklch(0.78_0.18_200/0.5)]"
            style={{ transform: `translateY(${y * -0.15}px) rotate(${y * 0.02}deg)` }}
          />
        </div>
      </div>

      {/* coordinates strip */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 flex flex-wrap items-center justify-between text-[10px] text-stencil text-muted-foreground tracking-widest gap-4">
          <span>LAT -29.8587° / LON 31.0218°</span>
          <span className="text-accent">// KZN OPERATIONAL ZONE</span>
          <span>SECTOR 04 — RANGE BRAVO</span>
          <span>STATUS: <span className="text-primary">GREEN</span></span>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="relative py-32 camo-texture">
      <div className="absolute inset-0 tactical-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-stencil text-xs text-accent mb-3 tracking-widest">// 01 — MISSION BRIEF</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            <span className="gold-text">Built for those</span><br/>
            <span className="text-foreground">who run </span>
            <span className="cyan-text">toward</span>
            <span className="text-foreground"> it.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We exist to close the gap between civilian capability and operational
            readiness. Our curriculum is forged from real-world deployments —
            distilled into progressive, measurable, repeatable training.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              ["DOCTRINE","Proven combat principles, not theatre."],
              ["DISCIPLINE","Every rep, deliberate. Every shot, accounted for."],
              ["DEPLOYMENT","Train how you will fight. Always."],
              ["DUTY","Skill in service of those you protect."],
            ].map(([k,v]) => (
              <div key={k} className="border border-border bg-card/40 p-5 backdrop-blur">
                <div className="text-stencil text-accent text-xs mb-2">{k}</div>
                <div className="text-sm text-foreground/90">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/10 blur-2xl" />
          <div className="relative aspect-[3/4] overflow-hidden border border-border clip-shield">
            <img src={sniperAsset.url} alt="Operator on overwatch" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-stencil text-xs text-accent">OVERWATCH — DRY OPS</div>
              <div className="text-display text-2xl gold-text">PRECISION UNDER LOAD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROGRAMS = [
  { code:"SCS-001", title:"Strategic Combat & Survival — Weekly Classes", desc:"Integrated close-quarters combat: empty-hand, blade, edged-weapon defense & tactical survival across vehicle, home & public-space threats. Wednesday sharp-focus drills (1 hr) + Sunday scenario immersion (1.5 hr). Piper, Systema, Ronin Silat & functional conditioning — mapped strictly to SA private-defense law.", level:"TIER 1 — CIVILIAN" },
  { code:"FCA-117705", title:"Knowledge of the Firearms Control Act 60/2000", desc:"The legal shield. Statutory framework of justifiable homicide, private defense & the responsibilities of ownership in SA — plus how to navigate the aftermath of a defensive shooting.", level:"PRIVATE USE" },
  { code:"HG-119649", title:"Handle & Use of a Handgun", desc:"Primary defensive carry. Safety principles, stance, grip, sight alignment, trigger control & rapid clearing of basic malfunctions. Unshakeable fundamentals — no bad habits.", level:"PRIVATE USE" },
  { code:"SLR-119650", title:"Handle & Use of a Self-Loading Rifle / Carbine", desc:"Modern defensive rifle mastery. Intermediate-caliber mechanics, zeroing principles, recoil mitigation & safe handling under direct supervision.", level:"PRIVATE USE" },
  { code:"SG-119652", title:"Handle & Use of a Shotgun", desc:"Close-range stopping power. Managing heavy recoil, administrative feeding of the platform & mastering buckshot patterning.", level:"PRIVATE USE" },
  { code:"MOR-119651", title:"Handle & Use of a Manually Operated Rifle / Carbine", desc:"Precision & reliability for rural security and bolt-action shooters. Steady shooting positions, aggressive action cycling & precision target tracking.", level:"PRIVATE USE" },
  { code:"HGB-123515", title:"Handle & Use a Handgun for Business Purposes", desc:"Baseline standard for CPOs & armed response. Time-constrained accuracy from a duty holster, rapid reloads & Immediate Action Drills to clear failures dynamically.", level:"BUSINESS" },
  { code:"SGB-123514", title:"Handle & Use a Shotgun for Business Purposes", desc:"High-proficiency 12-gauge deployment. Rapid combat reloading, slug/buckshot selection under time duress & resolution of complex malfunctions under pressure.", level:"BUSINESS" },
  { code:"SLRB-123511", title:"Handle & Use a Self-Loading Rifle / Carbine for Business Purposes", desc:"High-value transit & infrastructure defense. Rapid target acquisition, unconventional shooting postures (in & around vehicles) & platform handling in high-risk commercial environments.", level:"BUSINESS" },
  { code:"MORB-123519", title:"Handle & Use a Manually Operated Rifle for Business Purposes", desc:"Built for anti-poaching, asset protection & estate security. Precise engagements at extended ranges, fast bolt cycling & strict target accountability.", level:"BUSINESS" },
  { code:"TAC-123510", title:"Apply Tactical Knowledge in the Use of Firearms", desc:"The Strategic Task Force mindset. Master theory & movement matrix for CQB: dynamic room entries, slicing the pie, team movement & clearing high-danger chokepoints like stairwells.", level:"ADVANCED TACTICAL" },
  { code:"TAC-HG-123513", title:"Demonstrate Tactical Proficiency with a Handgun", desc:"Surviving a close-quarters ambush under severe cognitive stress. One-handed primary/support manipulation (simulating an injured arm), explosive movement drills, low-light shooting & weapon retention.", level:"ADVANCED TACTICAL" },
  { code:"TAC-SLR-123518", title:"Demonstrate Tactical Proficiency with a Self-Loading Rifle / Carbine", desc:"Win a high-risk long-gun fight. Asymmetric urban prone positions, rapid carbine-to-sidearm transitions, fire & movement — running the platform to its mechanical limit.", level:"ADVANCED TACTICAL" },
  { code:"TAC-SG-123512", title:"Demonstrate Tactical Proficiency with a Shotgun", desc:"The offensive combat shotgun at its most violent. Tactical breaching protocols, constant tube feeding on the move & surgical shot placement under extreme physiological duress.", level:"ADVANCED TACTICAL" },
  { code:"RSO-123517", title:"Safely Supervise a Shooting Range & Tactical Shooting Exercises", desc:"Command level. Oversee dynamic multi-directional live-fire ranges. Advanced range design safety geometry, medical management under hot-range conditions & strict supervisor protocols to prevent accidents.", level:"COMMAND" },
  { code:"OTC-101", title:"Operator Trauma Care (OTC)", desc:"MARCH protocol adapted for South African urban threats. Bystander safety, LE integration, civilian hospital evacuation. Curriculum aligned to CoTCCC guidelines for CPOs, security operators & HNWIs.", level:"MEDICAL — CAPSTONE" },
];

const CREDENTIALS = [
  { k:"HPCSA", v:"Registered ILS Paramedic" },
  { k:"PFTC", v:"Firearms Instructor — Tactical Level" },
  { k:"VIP PROTECTION", v:"20 Years Operational Experience" },
  { k:"DOCTRINE", v:"CoTCCC & TECC Guidelines — SA Adapted" },
];

function Programs() {
  return (
    <section id="programs" className="relative py-32 bg-background">
      <div className="absolute inset-0 tactical-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-stencil text-xs text-accent mb-3 tracking-widest">// 02 — TRAINING PROGRAMS</div>
            <h2 className="text-4xl md:text-6xl">
              <span className="text-foreground">SKILL </span>
              <span className="gold-text">CYCLES</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Progressive tracks engineered to take you from first-time shooter to
            combat-credible operator. Each course is graded, certified, and live-fire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.code}
              className="group relative border border-border bg-card/60 p-6 backdrop-blur overflow-hidden hover:border-accent transition"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center justify-between mb-4">
                <span className="text-stencil text-[10px] text-accent border border-accent/40 px-2 py-0.5">{p.code}</span>
                <span className="text-stencil text-[10px] text-primary">{p.level}</span>
              </div>
              <h3 className="text-2xl gold-text mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between text-stencil text-xs">
                <span className="text-muted-foreground">MODULE {String(i+1).padStart(2,"0")}</span>
                <span className="text-accent group-hover:translate-x-1 transition">DEPLOY →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingCell() {
  return (
    <section id="cell" className="relative py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 tactical-grid opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-stencil text-xs text-accent mb-3 tracking-widest">// 02.5 — KZN SECURITY TRAINING</div>
            <h2 className="text-4xl md:text-6xl">
              <span className="gold-text">STRATEGIC COMBAT</span><br/>
              <span className="text-foreground">& </span><span className="cyan-text">SURVIVAL</span>
            </h2>
            <p className="mt-4 text-xs text-stencil text-accent tracking-widest">• ACTIVE — TRAINING CYCLE 2026 •</p>
          </div>
          <p className="max-w-md text-muted-foreground">
            A cohesive system bridging empty-hand defence, blade work and tactical firearms
            deployment under extreme stress. Real-world geometry. Built for operational
            reality, not the arena.
          </p>
        </div>

        {/* Framework pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            ["FRAMEWORK","STF Integrated Combative — empty-hand, blade & firearm bridged under stress."],
            ["PIPER","Blade & Counter-Blade System under Master Guardian Zayd Kahn."],
            ["FLUIDS","Systema & Ronin Silat combat fluidity — economy of motion."],
            ["CORE","Functional core body conditioning for sustained fight capacity."],
          ].map(([k,v]) => (
            <div key={k} className="relative border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/60 transition group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="text-stencil text-xs text-primary mb-3">{k}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{v}</div>
            </div>
          ))}
        </div>

        {/* Schedule + venue card */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
          <div className="relative border border-accent/40 bg-card/70 backdrop-blur p-8 md:p-10 glow-cyan">
            <div className="text-stencil text-xs text-accent mb-6 tracking-widest">// WEEKLY TRAINING SCHEDULE</div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-5">
                <div className="text-stencil text-[10px] text-primary tracking-widest">WEDNESDAY EVENINGS</div>
                <div className="text-3xl gold-text mt-1">1 HOUR</div>
                <div className="text-sm text-muted-foreground mt-2">Sharp Focus & Conditioning</div>
              </div>
              <div className="border-l-2 border-accent pl-5">
                <div className="text-stencil text-[10px] text-accent tracking-widest">SUNDAY MORNINGS</div>
                <div className="text-3xl cyan-text mt-1">1.5 HOURS</div>
                <div className="text-sm text-muted-foreground mt-2">Deep Dive & Scenario Application</div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-stencil text-[10px] text-muted-foreground tracking-widest mb-1">TRAINING VENUE</div>
                <div className="text-foreground">Glenearn Road, Overport · Durban</div>
              </div>
              <div>
                <div className="text-stencil text-[10px] text-muted-foreground tracking-widest mb-1">BUNDLES</div>
                <div className="text-foreground">Premium multi-class packages — enquire.</div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+27785806911" className="clip-tag bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:glow-gold transition">
                Enrol → 078 580 6911
              </a>
              <a href="#contact" className="clip-tag border border-accent/60 text-accent px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent/10 transition">
                Request Bundle Rates
              </a>
            </div>
            <div className="mt-6 text-stencil text-[10px] text-destructive tracking-widest animate-pulse">
              ▲ SPACES ARE LIMITED — ENROL TODAY
            </div>
          </div>

          {/* Master Guardian card */}
          <div className="relative border border-border bg-card/60 backdrop-blur p-8 overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/15 blur-2xl" />
            <div className="text-stencil text-xs text-primary mb-3 tracking-widest">// MASTER GUARDIAN</div>
            <div className="text-2xl gold-text mb-1">PIPER KNIFE SYSTEM</div>
            <div className="text-stencil text-[10px] text-accent mb-6 tracking-widest">1 OF 10 WORLDWIDE · 17 COUNTRIES</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary text-stencil">◤</span> Appointed by founder <span className="text-foreground">Nigel E. February</span> — practitioner since June 1999.</li>
              <li className="flex gap-3"><span className="text-primary text-stencil">◤</span> Full Instructor — <span className="text-foreground">Ronin Silat</span> (Sept 2006).</li>
              <li className="flex gap-3"><span className="text-primary text-stencil">◤</span> SA bladed doctrine sought by <span className="text-foreground">FBI, CIA, Gurkha Snipers (Singapore), SERE Institute DC</span>.</li>
              <li className="flex gap-3"><span className="text-primary text-stencil">◤</span> PFTC Tactical Firearms Instructor.</li>
              <li className="flex gap-3"><span className="text-primary text-stencil">◤</span> HPCSA ILS Paramedic — trauma protocols embedded in every live scenario.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


function FieldVideo() {
  const y = useParallax();
  return (
    <section id="field" className="relative py-32 overflow-hidden camo-gradient">
      <div className="absolute inset-0 tactical-grid opacity-20" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-accent/10 blur-[120px] rounded-full"
        style={{ transform: `translate(-50%, ${y * 0.1}px)` }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="text-stencil text-xs text-accent mb-3 tracking-widest">// 03 — FIELD OPERATIONS</div>
          <h2 className="text-4xl md:text-6xl">
            <span className="cyan-text">LIVE</span>
            <span className="text-foreground"> FROM THE </span>
            <span className="gold-text">RANGE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {[
            { src: VIDEO_2, poster: team1Asset.url, tag: "REC // STF-FIELD-04", time: "ZULU 14:00 — RANGE BRAVO" },
            { src: VIDEO_1, poster: sniperAsset.url, tag: "REC // STF-FIELD-07", time: "ZULU 18:30 — OVERWATCH" },
          ].map((v) => (
            <div key={v.src} className="relative border border-border overflow-hidden glow-cyan">
              <video
                src={v.src}
                controls
                playsInline
                poster={v.poster}
                className="w-full aspect-video object-cover bg-black"
              />
              <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 text-stencil text-xs text-accent">
                <span className="h-2 w-2 bg-destructive rounded-full animate-pulse" />
                {v.tag}
              </div>
              <div className="pointer-events-none absolute top-4 right-4 text-stencil text-xs text-muted-foreground">
                {v.time}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 text-stencil text-xs">
          {[["LIVE FIRE","Real ammunition. Real consequences. Real growth."],
            ["FORCE-ON-FORCE","Sim-rounds. Adrenal stress. Decision making under duress."],
            ["NIGHT OPS","NVG familiarisation, IR work, and low-light fundamentals."]].map(([k,v]) => (
            <div key={k} className="border border-border bg-background/60 p-5 backdrop-blur">
              <div className="text-accent mb-2">{k}</div>
              <div className="text-muted-foreground normal-case tracking-normal" style={{fontFamily:"var(--font-sans)"}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Operators() {
  return (
    <section id="operators" className="relative py-32 bg-background">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="text-stencil text-xs text-accent mb-3 tracking-widest">// 04 — THE OPERATORS</div>
          <h2 className="text-4xl md:text-6xl">
            <span className="text-foreground">FORGED IN </span>
            <span className="gold-text">BROTHERHOOD</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {[team2Asset.url, team1Asset.url].map((src, i) => (
            <div key={i} className="group relative overflow-hidden border border-border aspect-[16/10]">
              <img src={src} alt="Operators on the range" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-stencil text-xs text-accent">{i === 0 ? "INTAKE 04 — RANGE DAY" : "GRADUATION — CYCLE 03"}</div>
                  <div className="text-display text-2xl gold-text">{i === 0 ? "STANDING READY" : "MISSION COMPLETE"}</div>
                </div>
                <div className="text-stencil text-xs text-muted-foreground">{String(i+1).padStart(2,"0")} / 02</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lead instructor */}
        <div className="mt-16 border border-border bg-card/60 backdrop-blur p-8 md:p-12 grid md:grid-cols-[1fr_2fr] gap-10 items-center">
          <div className="relative aspect-[3/4] overflow-hidden border border-accent/40 glow-cyan">
            <video
              src={VIDEO_1}
              autoPlay
              muted
              loop
              playsInline
              poster={sniperAsset.url}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 flex items-center gap-2 text-stencil text-[10px] text-accent pointer-events-none">
              <span className="h-1.5 w-1.5 bg-destructive rounded-full animate-pulse" />
              LIVE // INSTRUCTOR FEED
            </div>
          </div>
          <div>
            <div className="text-stencil text-xs text-accent mb-3 tracking-widest">// LEAD INSTRUCTOR & FOUNDER</div>
            <h3 className="text-4xl md:text-5xl mb-4"><span className="gold-text">ZAYD KAHN</span> <span className="text-foreground">— CHIEF OPERATOR</span></h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HPCSA-registered <span className="text-foreground">ILS Paramedic</span> (Western Cape Metro EMS
              College, refreshed 2023). <span className="text-foreground">PFTC Advanced Firearms Instructor</span>,
              trained tactical alongside ex-members of the SAPS Special Task Force. Twenty years as
              full-time <span className="text-foreground">VIP Personal Bodyguard</span> — including
              principal detail to diplomats, delegates and celebrities across Cape Town in
              cooperation with the NIU, PPU, Dog Unit and Flying Squad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="text-accent">Master Guardian</span> of the Piper Knife System under
              founder Nigel February — one of only <span className="text-foreground">10 worldwide</span>
              (Reference 012-23-99). 3rd Dan Shotokan Black Belt. Full instructor in Ronin Silat.
              20 years in Systema (Russian Special Forces method), Jeet Kune Do, Muay Thai & MMA.
              Tactical tracking under David Scott-Donelan, John D. Hurth and David Diaz.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-stencil">
              {CREDENTIALS.map(({k,v}) => (
                <div key={k} className="border-t-2 border-accent pt-2">
                  <div className="text-primary text-xs">{k}</div>
                  <div className="text-[10px] text-muted-foreground normal-case tracking-normal" style={{fontFamily:"var(--font-sans)"}}>{v}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[10px] text-muted-foreground italic">
              PSIRA 1125245 (Grades E–A) · TCCC Care Under Fire · Stop the Bleed · Code 10 + PrDP with advanced driving.
              Curriculum aligned to CoTCCC & OTC (Operator Trauma Care) guidelines, adapted for the South African high-crime landscape.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 camo-texture">
      <div className="absolute inset-0 tactical-grid opacity-30" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="text-stencil text-xs text-accent mb-3 tracking-widest">// 06 — ENLISTMENT</div>
        <h2 className="text-5xl md:text-7xl mb-6">
          <span className="text-foreground">READY TO </span>
          <span className="gold-text">DEPLOY</span>
          <span className="text-foreground">?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Reserve your seat in the next training cycle. Limited intake per program — we
          train small to train deep.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const d = new FormData(f);
            const subject = `ENLISTMENT // ${d.get("program") || "PROGRAM TBD"} — ${d.get("name") || "OPERATOR"}`;
            const body = `CALL SIGN / NAME: ${d.get("name") || ""}\nEMAIL: ${d.get("email") || ""}\nCONTACT: ${d.get("phone") || ""}\nPROGRAM: ${d.get("program") || ""}\n\nBRIEF:\n${d.get("brief") || ""}`;
            window.location.href = `mailto:ghostealth7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }}
          className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto"
        >
          <input name="name" required placeholder="CALL SIGN / FULL NAME" className="bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition placeholder:text-muted-foreground placeholder:text-stencil placeholder:text-xs" />
          <input name="email" required type="email" placeholder="SECURE EMAIL" className="bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition placeholder:text-muted-foreground placeholder:text-stencil placeholder:text-xs" />
          <input name="phone" placeholder="CONTACT NUMBER" className="bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition placeholder:text-muted-foreground placeholder:text-stencil placeholder:text-xs sm:col-span-2" />
          <select name="program" required defaultValue="" className="bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition sm:col-span-2 text-stencil text-xs">
            <option value="" disabled>SELECT PROGRAM OF INTEREST</option>
            {PROGRAMS.map(p => <option key={p.code} value={`${p.code} — ${p.title}`}>{p.code} — {p.title} · {p.level}</option>)}
            <option value="CUSTOM — Bespoke / Corporate Package">CUSTOM — Bespoke / Corporate Package</option>
          </select>
          <textarea name="brief" rows={4} placeholder="BRIEF: experience, intent, availability." className="bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition placeholder:text-muted-foreground placeholder:text-stencil placeholder:text-xs sm:col-span-2" />
          <button type="submit" className="sm:col-span-2 clip-tag bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest hover:glow-gold transition">
            Transmit Request → ghostealth7@gmail.com
          </button>
        </form>

        <div className="mt-16 grid sm:grid-cols-4 gap-6 text-stencil text-xs">
          {[
            ["BASE","North Beach, Durban, KZN"],
            ["COMMS","078 580 6911"],
            ["SIGNAL","ghostealth7@gmail.com"],
            ["PSIRA","Reg. 1125245 · E–A"],
          ].map(([k,v]) => (
            <div key={k} className="border border-border bg-background/60 backdrop-blur p-5">
              <div className="text-accent mb-2">{k}</div>
              <div className="text-foreground normal-case tracking-normal" style={{fontFamily:"var(--font-sans)"}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DOSSIER = [
  { code: "M-01", tag: "MEDICAL", title: "HPCSA ILS Paramedic", body: "Western Cape Metro EMS College · 12 yrs Metro EMS (2012–2017) · ILS refresher Maritzburg Emergency College 2023 · TCCC Care Under Fire · Stop the Bleed." },
  { code: "F-02", tag: "FIREARMS", title: "PFTC Advanced Instructor", body: "Professional Firearms Training Council instructor at advanced level, tactical course alongside ex-SAPS Special Task Force. Range Officer, Facilitator & Assessor. Unit Standards 123510–123519, 119649–119652." },
  { code: "P-03", tag: "PROTECTION", title: "20 Yrs VIP Bodyguard", body: "Full-time principal detail to businessman Zahir Vallie & family; diplomats, delegates and celebrities in Cape Town. Coordinated ops with NIU, PPU, Dog Unit & Flying Squad. Overseas travel details." },
  { code: "B-04", tag: "BLADE", title: "Piper Master Guardian", body: "One of only 10 Master Guardians worldwide in the Piper Knife System — SA's first official martial art, taught to CIA, FBI, Singapore Gurkha Snipers & the SERE Institute (DC). Ref 012-23-99, under founder Nigel February." },
  { code: "C-05", tag: "COMBATIVES", title: "Multi-System Practitioner", body: "3rd Dan Shotokan Black Belt (Shihan Allan Mohammed) · Full instructor Ronin Silat · Jeet Kune Do · Muay Thai · Kick Boxing · MMA · 20 yrs Systema (Russian Special Forces method)." },
  { code: "T-06", tag: "TRACKING", title: "Tactical Tracking Ops", body: "Sign & visual tracking for crime scene investigation and fugitive apprehension. Studied under David Scott-Donelan, John D. Hurth, David Diaz, Fernando Moreira, Kytlin Walken." },
];

function Dossier() {
  return (
    <section id="dossier" className="relative py-32 camo-texture">
      <div className="absolute inset-0 tactical-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-stencil text-xs text-accent mb-3 tracking-widest">// 05 — OPERATOR DOSSIER</div>
            <h2 className="text-4xl md:text-6xl">
              <span className="text-foreground">A </span>
              <span className="gold-text">RARE STACK</span>
              <span className="text-foreground"> OF SKILLS</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Medicine. Firearms. Protection. Blade. Every program on this site is drawn
            from the same operator's field record — not licensed content, not theory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOSSIER.map((d) => (
            <div key={d.code} className="relative border border-border bg-card/60 backdrop-blur p-6 hover:border-accent transition group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-stencil text-[10px] text-accent border border-accent/40 px-2 py-0.5">{d.code}</span>
                <span className="text-stencil text-[10px] text-primary">{d.tag}</span>
              </div>
              <h3 className="text-xl gold-text mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-accent/30 bg-background/60 backdrop-blur p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="text-stencil text-accent text-xs">// VOUCHED BY</div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <div><span className="text-foreground">Nigel February</span> — Founder, Piper Knife System</div>
            <div><span className="text-foreground">Shihan Allan Mohammed</span> — Grand Master, UMAI</div>
            <div><span className="text-foreground">Sup. Fuad Floris (Ret.)</span> — SAPS Presidential Protection Unit</div>
            <div><span className="text-foreground">Stuart Affleck</span> — Firearms TC Councillor, Director of IHAWU</div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="STF" className="h-8 w-8 object-contain" />
          <div className="text-stencil text-xs text-muted-foreground tracking-widest">© 2026 STRATEGIC TASK FORCE — ALL RIGHTS RESERVED</div>
        </div>
        <div className="text-stencil text-[10px] text-accent tracking-widest">TRAIN HARD. TRAIN HONEST. TRAIN REPEATEDLY.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Mission />
      <Programs />
      <TrainingCell />
      <FieldVideo />
      <Operators />
      <Dossier />
      <Contact />

      <Footer />
    </div>
  );
}
