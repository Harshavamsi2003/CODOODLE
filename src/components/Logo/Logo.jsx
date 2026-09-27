/**
 * Wordmark — "Codoodle" where the brand's two halves are visible:
 * "Co / de" leans mono (code), "doodle" leans handwritten (doodle),
 * tied together with a squiggle underline.
 */
import "./Logo.css";

export default function Logo({ className = "" }) {
  return (
    <span className={`logo ${className}`.trim()} aria-label="Codoodle">
      <span className="logo__code">Co</span>
      <span className="logo__doodle">doodle</span>
      <svg
        className="logo__mark"
        viewBox="0 0 132 10"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M3 6 C 24 1, 44 9, 66 5 S 110 1, 129 6"
          fill="none"
          stroke="var(--coral)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
