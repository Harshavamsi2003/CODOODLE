import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal.jsx";
import Stagger from "../../components/Stagger/Stagger.jsx";
import Doodle from "../../components/Doodle/Doodle.jsx";
import Marquee from "../../components/Marquee/Marquee.jsx";
import ToolsMarquee from "../../components/ToolsMarquee/ToolsMarquee.jsx";
import useTilt from "../../hooks/useTilt.js";
import { SERVICES, PROCESS, PROJECTS } from "../../data/index.js";
import "./Home.css";

const STARS = [
  { top: "12%", left: "6%", size: "0.8rem", delay: "0s" },
  { top: "22%", left: "42%", size: "0.5rem", delay: "0.6s" },
  { top: "8%", left: "68%", size: "0.65rem", delay: "1.2s" },
  { top: "48%", left: "18%", size: "0.45rem", delay: "1.8s" },
  { top: "62%", left: "58%", size: "0.7rem", delay: "0.9s" },
  { top: "38%", left: "88%", size: "0.5rem", delay: "2.3s" },
  { top: "78%", left: "34%", size: "0.55rem", delay: "1.5s" },
];

const PROMISES = [
  { v: "Live preview links", n: "Watch it come together the whole way." },
  { v: "Clear timelines", n: "Real dates, told upfront — no guessing." },
  { v: "You own it all", n: "Code, domain, content. Never locked in." },
  { v: "We stick around", n: "Support after launch, not just before." },
];

const TRUST = [
  { title: "No junior handoff", body: "The person who scopes the project is the one who builds it." },
  { title: "Every device, tested", body: "Not assumed responsive — checked on real phones, tablets and desktops." },
  { title: "Plain-language updates", body: "You'll always know what's happening, in words that aren't jargon." },
  { title: "Built to be found", body: "Clean structure and metadata from the first commit, not bolted on later." },
];

function WorkCard({ p, index }) {
  const tiltRef = useTilt(6);
  return (
    <Reveal as="article" className="wp-card" delay={index * 90}>
      <a
        href={p.live}
        target="_blank"
        rel="noreferrer"
        ref={tiltRef}
        className="wp-card__frame tilt"
        aria-label={`Visit ${p.name} — opens in a new tab`}
      >
        <img src={p.image} alt={`${p.name} website preview`} className="wp-card__img" loading="lazy" />
        <span className="wp-card__visit mono">
          Visit live <span className="arrow">↗</span>
        </span>
      </a>
      <div className="wp-card__meta">
        <span className="wp-card__dot" aria-hidden="true" />
        <div>
          <h3 className="wp-card__name">{p.name}</h3>
          <p className="wp-card__cat mono">{p.category}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="home">
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <span className="hero__blob hero__blob--1" aria-hidden="true" />
        <span className="hero__blob hero__blob--2" aria-hidden="true" />
        <div className="star-field" aria-hidden="true">
          {STARS.map((s, i) => (
            <span
              key={i}
              className="star-field__star"
              style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: s.delay }}
            >
              ✦
            </span>
          ))}
        </div>
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1 className="hero__title">
              We sketch the{" "}
              <span className="underlined">
                idea.
                <Doodle name="underline" color="var(--peri)" delay={400} />
              </span>
              <br />
              We ship the{" "}
              <span className="underlined">
                code.
                <Doodle name="underline" color="var(--coral)" delay={700} />
              </span>
            </h1>

            <p className="lead hero__lead">
              Codoodle is a web studio that designs and builds premium websites,
              portfolios and online stores — the kind that load fast, look sharp
              and make people trust the business behind them.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn--coral">
                Start a project <span className="arrow">→</span>
              </Link>
              <Link to="/work" className="btn btn--ghost">
                See the work
              </Link>
            </div>

            <ul className="hero__proof">
              <li>
                <Doodle name="check" color="var(--coral)" /> Responsive on every device
              </li>
              <li>
                <Doodle name="check" color="var(--peri)" /> Fast &amp; SEO-ready
              </li>
              <li>
                <Doodle name="check" color="var(--butter)" /> Built to hand over
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ---------------- Tools we build with ---------------- */}
      <section className="section--tight tools-teaser">
        <div className="container">
          <Reveal className="tools-teaser__head">
            <p className="eyebrow">Under the hood</p>
            <span className="tools-teaser__title">
              Real tools, <span className="doodle-word">real</span> stack.
            </span>
          </Reveal>
          <Reveal delay={80}>
            <ToolsMarquee />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Recent work ---------------- */}
      <section className="section work-teaser">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">
              Live sites, <span className="doodle-word">real businesses.</span>
            </h2>
          </Reveal>

          <div className="wp-grid">
            {PROJECTS.map((p, i) => (
              <WorkCard key={p.id} p={p} index={i} />
            ))}
          </div>

          <Reveal className="work-teaser__foot" delay={120}>
            <Link to="/work" className="link-doodle mono">
              See the full case studies →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- What we do ---------------- */}
      <section className="section services-teaser">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">
              Three things,{" "}
              <span className="circled">
                done well
                <Doodle name="circle" color="var(--coral)" />
              </span>
              .
            </h2>
          </Reveal>

          <div className="svc-list">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} className="svc-row" delay={i * 90}>
                <span className="svc-row__dot" style={{ background: s.accent }} aria-hidden="true" />
                <div className="svc-row__main">
                  <h3 className="svc-row__title">{s.title}</h3>
                  <p className="svc-row__line" style={{ color: s.accent }}>
                    {s.line}
                  </p>
                </div>
                <p className="svc-row__body">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="services-teaser__foot" delay={120}>
            <Link to="/services" className="link-doodle mono">
              Explore all services →
            </Link>
          </Reveal>

          <Stagger className="promises">
            {PROMISES.map((p) => (
              <div className="promises__cell" key={p.v}>
                <span className="promises__k mono">
                  <Doodle name="check" color="var(--coral)" />
                </span>
                <span className="promises__v">{p.v}</span>
                <span className="promises__note">{p.n}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="section process">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 className="section-title">
              From <span className="doodle-word">doodle</span> to done.
            </h2>
            <p className="lead process__intro">
              Every project runs the same honest path. You&apos;ll always know
              which step we&apos;re on.
            </p>
          </Reveal>

          <div className="process__grid">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} className="process__step" delay={i * 90}>
                <span className="process__dot" aria-hidden="true" />
                <h3 className="process__title">{p.title}</h3>
                <p className="process__body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why Codoodle ---------------- */}
      <section className="section trust">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Why Codoodle</p>
            <h2 className="section-title">The quiet stuff that matters.</h2>
          </Reveal>
          <Stagger className="trust__grid">
            {TRUST.map((t) => (
              <div className="trust__cell" key={t.title}>
                <Doodle name="star" color="var(--peri)" className="trust__star" />
                <h3 className="trust__title">{t.title}</h3>
                <p className="trust__body">{t.body}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="section cta">
        <span className="cta__blob" aria-hidden="true" />
        <div className="container">
          <Reveal className="cta__inner">
            <Doodle name="star" color="var(--butter)" loop className="cta__star" />
            <h2 className="cta__title">
              Got something you want{" "}
              <span className="doodle-word cta__word">built?</span>
            </h2>
            <p className="lead cta__lead">
              Tell us the idea. We&apos;ll sketch how it could look and how
              we&apos;d ship it — no obligation.
            </p>
            <Link to="/contact" className="btn btn--coral cta__btn">
              Start a project <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}