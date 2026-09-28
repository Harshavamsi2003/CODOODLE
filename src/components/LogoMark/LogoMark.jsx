import "./LogoMark.css";

/**
 * LogoMark — the brand's `<✦>` symbol (same as the favicon), drawn as
 * SVG so it stays sharp at any size. The two brackets are "code", the
 * sparkle is the "doodle". Sits beside the wordmark in the navbar.
 */
export default function LogoMark({ className = "" }) {
  return (
    <svg
      className={`lmark ${className}`.trim()}
      viewBox="0 0 48 32"
      aria-hidden="true"
      focusable="false"
    >
      <g
        className="lmark__brackets"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="lmark__b lmark__b--l" d="M12 6 L3.5 16 L12 26" />
        <path className="lmark__b lmark__b--r" d="M36 6 L44.5 16 L36 26" />
      </g>
      <path
        className="lmark__star"
        fill="var(--coral)"
        d="M24 5 C24.9 11.5 27.3 14.7 33 16 C27.3 17.3 24.9 20.5 24 27 C23.1 20.5 20.7 17.3 15 16 C20.7 14.7 23.1 11.5 24 5 Z"
      />
    </svg>
  );
}