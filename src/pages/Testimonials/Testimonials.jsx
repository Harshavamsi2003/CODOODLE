import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal.jsx";
import Stagger from "../../components/Stagger/Stagger.jsx";
import Doodle from "../../components/Doodle/Doodle.jsx";
import { TESTIMONIALS } from "../../data/index.js";
import "./Testimonials.css";

const ACCENTS = ["var(--coral)", "var(--peri)", "var(--butter)"];

export default function Testimonials() {
  return (
    <main className="testimonials-page">
      {/* Header */}
      <section className="section page-hero">
        <div className="container">
          <Reveal as="p" className="eyebrow">What clients say</Reveal>
          <h1 className="page-hero__title title-wipe">
            Kind <span className="doodle-word">words.</span>
          </h1>
          <Reveal as="p" className="lead page-hero__lead" delay={170}>
            We&apos;d rather let the people we&apos;ve built for do the talking.
            Here&apos;s what a couple of them said after launch.
          </Reveal>
        </div>
      </section>

      {/* Testimonial grid */}
      <section className="section--tight">
        <div className="container">
          <Stagger className="tm-grid">
            {TESTIMONIALS.map((t, i) => (
              <article className="tm-card" key={t.id}>
                <Doodle
                  name="squiggle"
                  color={ACCENTS[i % ACCENTS.length]}
                  className="tm-card__squiggle"
                />
                <span className="tm-card__quotemark" style={{ color: ACCENTS[i % ACCENTS.length] }} aria-hidden="true">
                  “
                </span>
                <p className="tm-card__quote">{t.quote}</p>
                <div className="tm-card__foot">
                  <span
                    className="tm-card__avatar"
                    style={{ background: ACCENTS[i % ACCENTS.length] }}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <span className="tm-card__name">{t.name}</span>
                    <span className="tm-card__company mono">{t.company}</span>
                  </div>
                  {t.project && (
                    <Link to={`/work#${t.project}`} className="tm-card__link mono">
                      See the site ↗
                    </Link>
                  )}
                </div>
              </article>
            ))}

            {/* Honest placeholder — same voice as the Work page's "Next up" */}
            <div className="tm-card tm-card--ghost">
              <Doodle name="star" color="var(--butter)" loop className="tm-card__star" />
              <p className="tm-ghost__t">
                More of these land after every launch — this list is just
                getting started.
              </p>
              <Link to="/contact" className="link-doodle mono">
                Start a project →
              </Link>
            </div>
          </Stagger>
        </div>
      </section>
    </main>
  );
}