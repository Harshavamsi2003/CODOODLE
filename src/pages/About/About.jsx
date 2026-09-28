import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal.jsx";
import Stagger from "../../components/Stagger/Stagger.jsx";
import Doodle from "../../components/Doodle/Doodle.jsx";
import ToolsMarquee from "../../components/ToolsMarquee/ToolsMarquee.jsx";
import CtaBand from "../../components/CtaBand/CtaBand.jsx";
import { VALUES, BRAND } from "../../data/index.js";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      {/* Header */}
      <section className="section page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="page-hero__title">
              Code{" "}
              <span className="about-plus">
                +
                <Doodle name="star" color="var(--butter)" className="about-plus__star" />
              </span>{" "}
              <span className="doodle-word about-doodleword">Doodle</span>
            </h1>
            <p className="lead page-hero__lead">
              The name says how we work. Two halves of the same craft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meaning split */}
      <section className="section about-meaning">
        <div className="container about-meaning__grid">
          <Reveal className="about-meaning__cell">
            <span className="about-meaning__label mono">// code</span>
            <h2 className="about-meaning__h">The craft under the hood</h2>
            <p>
              Clean, fast, reliable builds. Responsive layouts, tuned
              performance and structure that search engines and future-you can
              both read. This is the part people don&apos;t see — but always
              feel.
            </p>
          </Reveal>

          <Reveal className="about-meaning__cell" delay={100}>
            <span className="about-meaning__label mono about-meaning__label--peri">
              ✎ doodle
            </span>
            <h2 className="about-meaning__h">The spark on top</h2>
            <p>
              Ideas, sketches and design. The character that stops a site from
              looking like everyone else&apos;s. We start every project on paper,
              because the best interfaces begin as a good doodle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container narrow">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <p className="about-story__text">
              Codoodle is a small, focused web studio. We build websites,
              portfolios and online stores for people who care how their
              business shows up online. No bloated teams, no handing your project
              to a junior — just considered work, shipped properly.
            </p>
            <p className="about-story__text">
              We&apos;d rather do a few things really well than everything
              loosely. Every site we ship has to clear one bar:{" "}
              <span className="underlined">
                would we trust the business behind it?
                <Doodle name="underline" color="var(--coral)" delay={300} />
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Toolkit */}
      <section className="section--tight about-tools">
        <div className="container">
          <Reveal className="about-tools__head">
            <p className="eyebrow">The craft, literally</p>
            <h2 className="section-title">What we build with.</h2>
          </Reveal>
          <Reveal delay={80}>
            <ToolsMarquee />
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What we stand on</p>
            <h2 className="section-title">Four things we don&apos;t bend on.</h2>
          </Reveal>
          <Stagger className="about-values__grid">
            {VALUES.map((v) => (
              <div key={v.title} className="about-values__cell">
                <span className="about-values__dot" aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title={
          <>
            Let&apos;s make <span className="doodle-word">something.</span>
          </>
        }
        lead="Have a project in mind? We'd love to hear about it."
        primary={{ to: "/contact", label: "Start a project" }}
        secondary={{ href: `mailto:${BRAND.email}`, label: BRAND.email }}
      />
    </main>
  );
}