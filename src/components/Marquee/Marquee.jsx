import "./Marquee.css";

const DEFAULT_ITEMS = [
  "Code + Doodle",
  "Sketched first",
  "Shipped fast",
  "Pixel-true builds",
  "SEO from day one",
  "You own the code",
  "No templates, ever",
  "Launch-day support",
  "Fast on any screen",
  "Built to convert",
  "Real businesses, real sites",
  "Hand-doodled, hand-coded",
];

function Row({ items, direction, dot }) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee__row marquee__row--${direction}`}>
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span className="marquee__item" key={i}>
            <span className="marquee__dot" aria-hidden="true">{dot}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Marquee — two rows of brand-phrase pill chips, drifting in opposite
 * directions. Always moving (this is decorative, not content, so it
 * ignores prefers-reduced-motion for its own animation), edge-faded,
 * generous tap targets on mobile.
 */
export default function Marquee({ items = DEFAULT_ITEMS, dot = "✦" }) {
  const mid = Math.ceil(items.length / 2);
  const rowA = items.slice(0, mid);
  const rowB = items.slice(mid);

  return (
    <div className="marquee">
      <Row items={rowA} direction="left" dot={dot} />
      <Row items={rowB} direction="right" dot={dot} />
    </div>
  );
}