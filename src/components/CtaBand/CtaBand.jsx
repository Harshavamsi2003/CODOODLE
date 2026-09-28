import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal.jsx";
import Doodle from "../Doodle/Doodle.jsx";
import "./CtaBand.css";

/**
 * CtaBand — the closing "let's talk" section used at the bottom of the
 * pages: a soft drifting glow, a floating sparkle, a big heading with
 * one cursive word, and the main button.
 *
 *   <CtaBand
 *     title={<>Got something you want <span className="doodle-word">built?</span></>}
 *     lead="Tell us the idea…"
 *     primary={{ to: "/contact", label: "Start a project" }}
 *     secondary={{ href: "mailto:hi@x.com", label: "hi@x.com" }}   // optional
 *   />
 */
export default function CtaBand({ title, lead, primary, secondary }) {
  return (
    <section className="section cta">
      <span className="cta__blob" aria-hidden="true" />
      <div className="container">
        <Reveal className="cta__inner">
          <Doodle name="star" color="var(--butter)" loop className="cta__star" />
          <h2 className="cta__title">{title}</h2>
          <p className="lead cta__lead">{lead}</p>
          <div className="cta__actions">
            <Link to={primary.to} className="btn btn--coral cta__btn">
              {primary.label} <span className="arrow">→</span>
            </Link>
            {secondary && (
              <a href={secondary.href} className="btn btn--ghost">
                {secondary.label}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}