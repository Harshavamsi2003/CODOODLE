import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal.jsx";
import Stagger from "../../components/Stagger/Stagger.jsx";
import Doodle from "../../components/Doodle/Doodle.jsx";
import useTilt from "../../hooks/useTilt.js";
import { PROJECTS } from "../../data/index.js";
import "./Work.css";

function FeaturedProject({ p, index }) {
  const tiltRef = useTilt(5);

  return (
    <article className="wf" id={p.id}>
      <Reveal className="wf__meta">
        <div className="wf__titlewrap">
          <span className="wf__dot" aria-hidden="true" />
          <h2 className="wf__name">{p.name}</h2>
        </div>
        <div className="wf__facts mono">
          {p.category} · {p.sector} · {p.year}
        </div>
      </Reveal>

      {/* Full banner — edges fully visible */}
      <Reveal className="wf__stage" delay={60}>
        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          ref={tiltRef}
          className="wf__frame tilt"
          aria-label={`Visit ${p.name} — opens in a new tab`}
        >
          <span className="wf__dots" aria-hidden="true">
            <i /> <i /> <i />
          </span>
          <img
            src={p.image}
            alt={`The full ${p.name} website homepage.`}
            className="wf__img"
            loading="lazy"
          />
          <span className="wf__visit mono">
            Visit live site <span className="arrow">↗</span>
          </span>
        </a>
      </Reveal>

      {/* Intro + 5 description points */}
      <div className="wf__grid">
        <Reveal className="wf__lead-col" delay={60}>
          <p className="wf__intro">{p.intro}</p>
          <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--coral wf__live">
            Visit {p.liveLabel} <span className="arrow">↗</span>
          </a>
        </Reveal>

        <Stagger as="ul" className="wf__points" delay={120}>
          {p.descPoints.map((d) => (
            <li key={d}>
              <Doodle name="check" color="var(--peri)" />
              <span>{d}</span>
            </li>
          ))}
        </Stagger>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <main className="work-page">
      {/* Header */}
      <section className="section page-hero">
        <div className="container">
          <Reveal as="p" className="eyebrow">Selected work</Reveal>
          <h1 className="page-hero__title title-wipe">
            The <span className="doodle-word">work.</span>
          </h1>
          <Reveal as="p" className="lead page-hero__lead" delay={170}>
            Real sites, live and working for real businesses. Here&apos;s a
            close look at the latest one to leave the studio.
          </Reveal>
        </div>
      </section>

      {/* Featured project(s) */}
      <section className="section--tight">
        <div className="container work-list">
          {PROJECTS.map((p, i) => (
            <FeaturedProject key={p.id} p={p} index={i} />
          ))}

          {/* Honest placeholder for what's next */}
          <Reveal className="work-ghost">
            <Doodle name="star" color="var(--butter)" className="work-ghost__star" loop />
            <div>
              <span className="work-ghost__k mono">Next up</span>
              <p className="work-ghost__t">
                A new project is on the desk right now — yours could be the next
                case study here.
              </p>
            </div>
            <Link to="/contact" className="link-doodle mono work-ghost__link">
              Start a project →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal className="work-next__inner">
            <Doodle name="squiggle" color="var(--peri)" className="work-next__squiggle" />
            <h2 className="work-next__title">
              The first of <span className="doodle-word">many.</span>
            </h2>
            <p className="lead work-next__lead">
              Want your business to show up like it means it?
            </p>
            <Link to="/contact" className="btn btn--coral">
              Start a project <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}