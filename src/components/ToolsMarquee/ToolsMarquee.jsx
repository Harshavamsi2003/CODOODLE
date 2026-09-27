import { TOOLS } from "../../data/index.js";
import "./ToolsMarquee.css";

/**
 * ToolsMarquee — an infinite-scrolling strip of the real tools we build with.
 * Same "code meets doodle" language as the rest of the site: mono labels,
 * quiet borders, a coral/peri edge-fade so it never looks clipped.
 */
export default function ToolsMarquee({ items = TOOLS }) {
  const loop = [...items, ...items];

  return (
    <div className="tools" aria-hidden="true">
      <div className="tools__track">
        {loop.map((t, i) => (
          <span
            className={`tools__item ${i >= items.length ? "tools__item--dup" : ""}`}
            key={`${t.name}-${i}`}
          >
            <img
              src={t.icon}
              alt=""
              className="tools__icon"
              width="26"
              height="26"
              loading={i < items.length ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="tools__name mono">{t.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
