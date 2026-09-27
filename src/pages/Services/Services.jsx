import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal.jsx";
import Stagger from "../../components/Stagger/Stagger.jsx";
import Doodle from "../../components/Doodle/Doodle.jsx";
import { SERVICES } from "../../data/index.js";
import "./Services.css";

const INCLUDED = [
  ["Responsive layouts", "One build that reflows cleanly from phone to widescreen."],
  ["Speed optimisation", "Compressed assets and lean code for fast first loads."],
  ["SEO foundations", "Semantic markup, meta tags and clean URLs search engines like."],
  ["Accessibility basics", "Keyboard focus, alt text and contrast that includes everyone."],
  ["Analytics ready", "Hook up Google Analytics or similar so you can see what works."],
  ["Clean handover", "Documented, tidy and yours — set up so you can run it."],
];

const FAQ = [
  ["How long does a site take?", "Most sites ship in two to four weeks depending on scope. You get a real timeline before we start — not a vague 'soon'."],
  ["Do I have to write all the content?", "No. Share whatever you have — notes, an old site, a rough idea — and we'll shape the words, structure and flow around it."],
  ["Can I update the site myself afterwards?", "Yes. We hand it over set up so everyday edits are easy, and we'll show you how. No calling us for a text change."],
  ["What happens after launch?", "We don't disappear. We're around for fixes and questions, and ready when you want to grow the site further."],
  ["Who owns the code and domain?", "You do — completely. Code, domain and content are yours with no lock-in and nothing held hostage."],
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {FAQ.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <Reveal key={q} className={`faq__item ${isOpen ? "is-open" : ""}`} delay={i * 60}>
            <button
              className="faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{q}</span>
              <span className="faq__icon" aria-hidden="true" />
            </button>
            <div className="faq__a-wrap">
              <div className="faq__a">
                <p>{a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function Services() {
  return (
    <main className="services-page">
      {/* Header */}
      <section className="section page-hero">
        <div className="container">
          <Reveal as="p" className="eyebrow">Services</Reveal>
          <h1 className="page-hero__title title-wipe">
            What we <span className="doodle-word">make.</span>
          </h1>
          <Reveal as="p" className="lead page-hero__lead" delay={170}>
            Three focused offerings, each built to the same standard — fast,
            responsive and designed around what your visitors actually need to
            do.
          </Reveal>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="section svc-detail-wrap">
        <div className="container">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} className="svc-detail" delay={i * 60}>
              <div className="svc-detail__head">
                <span className="svc-detail__dot" style={{ background: s.accent }} aria-hidden="true" />
                <h2 className="svc-detail__title">{s.title}</h2>
                <p className="svc-detail__line" style={{ color: s.accent }}>
                  {s.line}
                </p>
              </div>

              <div className="svc-detail__body">
                <p className="svc-detail__desc">{s.body}</p>
                <Stagger as="ul" className="svc-detail__points">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Doodle name="check" color={s.accent} />
                      {p}
                    </li>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Included with every build — technical deliverables */}
      <section className="section--tight svc-included-wrap">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">No hidden extras</p>
            <h2 className="section-title">Baked into every build.</h2>
          </Reveal>
          <Stagger className="svc-included">
            {INCLUDED.map(([t, d]) => (
              <div className="svc-included__cell" key={t}>
                <Doodle name="check" color="var(--coral)" />
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ — unique to this page */}
      <section className="section svc-faq">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Before you ask</p>
            <h2 className="section-title">Questions, answered.</h2>
          </Reveal>
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal className="svc-cta">
            <h2 className="svc-cta__title">Not sure which one you need?</h2>
            <p className="lead">
              Tell us about the project and we&apos;ll point you the right way.
            </p>
            <Link to="/contact" className="btn btn--coral">
              Talk to us <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}