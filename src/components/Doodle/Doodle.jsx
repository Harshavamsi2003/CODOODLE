import useReveal from "../../hooks/useReveal.js";

/**
 * Doodle — a small library of hand-drawn SVG marks.
 * They "draw" themselves (stroke-dashoffset) when scrolled into view.
 *
 * <Doodle name="underline" color="var(--coral)" />
 */

const PATHS = {
  // wavy underline used beneath headline words
  underline: {
    viewBox: "0 0 200 14",
    render: (c) => (
      <path
        d="M4 9 C 34 2, 60 12, 92 7 S 150 2, 196 8"
        fill="none"
        stroke={c}
        strokeWidth="3.4"
        strokeLinecap="round"
        pathLength="1"
      />
    ),
    length: 1,
  },
  // loose circle drawn around a word
  circle: {
    viewBox: "0 0 220 90",
    render: (c) => (
      <path
        d="M120 8 C 60 2, 14 20, 12 46 C 10 74, 74 86, 132 82 C 192 78, 214 52, 204 32 C 196 15, 168 6, 128 9"
        fill="none"
        stroke={c}
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="1"
      />
    ),
    length: 1,
  },
  // curved arrow
  arrow: {
    viewBox: "0 0 90 60",
    render: (c) => (
      <g fill="none" stroke={c} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10 C 30 6, 66 14, 78 44" pathLength="1" />
        <path d="M64 40 L 80 46 L 74 30" pathLength="1" />
      </g>
    ),
    length: 1,
  },
  // four-point sparkle / star
  star: {
    viewBox: "0 0 40 40",
    render: (c) => (
      <path
        d="M20 3 C 21 14, 26 19, 37 20 C 26 21, 21 26, 20 37 C 19 26, 14 21, 3 20 C 14 19, 19 14, 20 3 Z"
        fill="none"
        stroke={c}
        strokeWidth="2.4"
        strokeLinejoin="round"
        pathLength="1"
      />
    ),
    length: 1,
  },
  // loose scribble squiggle
  squiggle: {
    viewBox: "0 0 120 24",
    render: (c) => (
      <path
        d="M4 12 C 12 2, 20 22, 30 12 S 48 2, 58 12 S 76 22, 86 12 S 104 2, 116 12"
        fill="none"
        stroke={c}
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="1"
      />
    ),
    length: 1,
  },
  // hand-drawn checkmark
  check: {
    viewBox: "0 0 34 30",
    render: (c) => (
      <path
        d="M4 16 C 8 20, 11 24, 14 26 C 18 18, 24 8, 31 3"
        fill="none"
        stroke={c}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
      />
    ),
    length: 1,
  },
};

export default function Doodle({
  name = "underline",
  color = "var(--coral)",
  className = "",
  delay = 0,
  loop = false,
  "aria-hidden": ariaHidden = true,
  ...rest
}) {
  const def = PATHS[name] || PATHS.underline;
  const [ref, inView] = useReveal({ threshold: 0.4 });

  return (
    <svg
      ref={ref}
      className={`doodle doodle--${name} ${inView ? "is-drawn" : ""} ${
        loop ? "doodle--loop" : ""
      } ${className}`.trim()}
      viewBox={def.viewBox}
      style={{ "--doodle-delay": `${delay}ms` }}
      aria-hidden={ariaHidden}
      focusable="false"
      {...rest}
    >
      {def.render(color)}
    </svg>
  );
}
