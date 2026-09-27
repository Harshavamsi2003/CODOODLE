import Doodle from "../Doodle/Doodle.jsx";
import "./HeroBrowser.css";

/**
 * The hero's signature visual. Not another lone browser mockup — the
 * one thing this studio actually sells, shown literally: the same
 * finished site, live on a desktop window AND a phone at once, both
 * drifting gently. "Responsive on every device" isn't a checklist
 * line here, it's the picture.
 */
export default function HeroBrowser() {
  return (
    <div className="hb" role="img" aria-label="A desktop browser window and a phone, both showing the same finished website, floating together.">
      {/* floating decorative doodles */}
      <Doodle name="star" color="var(--butter)" loop className="hb__float hb__float--1" delay={600} />
      <Doodle name="squiggle" color="var(--peri)" loop className="hb__float hb__float--2" delay={800} />
      <Doodle name="arrow" color="var(--coral)" className="hb__float hb__float--3" delay={1000} />

      <span className="hb__tag mono">one site, every screen</span>

      {/* ---------------- Desktop window ---------------- */}
      <div className="hb__desktop">
        <div className="hb__window">
          <div className="hb__bar">
            <span className="hb__dot" />
            <span className="hb__dot" />
            <span className="hb__dot" />
            <span className="hb__url mono">codoodle.studio</span>
            <span className="hb__live" aria-hidden="true" />
          </div>

          <svg className="hb__svg" viewBox="0 0 440 230" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hbImgGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--coral)" />
                <stop offset="100%" stopColor="var(--peri)" />
              </linearGradient>
            </defs>

            <rect x="14" y="14" width="412" height="30" rx="8" fill="#0d0d0d" stroke="var(--line-strong)" />
            <circle cx="29" cy="29" r="5.5" fill="var(--coral)" />
            <rect x="42" y="25" width="48" height="8" rx="4" fill="var(--ink-dim)" />
            <rect x="298" y="23" width="32" height="10" rx="5" fill="var(--ink-faint)" opacity="0.5" />
            <rect x="340" y="23" width="32" height="10" rx="5" fill="var(--ink-faint)" opacity="0.5" />
            <rect x="390" y="20" width="30" height="17" rx="8.5" fill="var(--peri)" />

            <rect x="18" y="76" width="148" height="16" rx="8" fill="var(--ink)" />
            <rect x="18" y="100" width="116" height="16" rx="8" fill="var(--ink)" />
            <rect x="18" y="134" width="160" height="7" rx="3.5" fill="var(--ink-faint)" />
            <rect x="18" y="150" width="128" height="7" rx="3.5" fill="var(--ink-faint)" />
            <rect x="18" y="178" width="114" height="32" rx="16" fill="var(--coral)" />
            <path d="M58 194 l9 7 15-15" stroke="#12070a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            <rect x="234" y="60" width="188" height="150" rx="12" fill="url(#hbImgGrad)" opacity="0.92" />
            <circle cx="388" cy="90" r="13" fill="var(--butter)" opacity="0.92" />
            <path d="M234 200 L300 146 L340 176 L422 112 V210 H234 Z" fill="#0b0b0b" opacity="0.32" />
          </svg>
        </div>
      </div>

      {/* ---------------- Phone ---------------- */}
      <div className="hb__mobile">
        <div className="hb__phone">
          <span className="hb__notch" />
          <svg className="hb__svg hb__svg--phone" viewBox="0 0 132 240" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hbImgGradM" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--coral)" />
                <stop offset="100%" stopColor="var(--peri)" />
              </linearGradient>
            </defs>

            <circle cx="16" cy="18" r="4.5" fill="var(--coral)" />
            <rect x="26" y="14.5" width="30" height="7" rx="3.5" fill="var(--ink-dim)" />
            <rect x="104" y="14" width="14" height="8" rx="4" fill="var(--peri)" />

            <rect x="10" y="34" width="112" height="72" rx="9" fill="url(#hbImgGradM)" opacity="0.92" />
            <circle cx="100" cy="48" r="8" fill="var(--butter)" opacity="0.92" />
            <path d="M10 100 L46 72 L68 90 L122 54 V106 H10 Z" fill="#0b0b0b" opacity="0.32" />

            <rect x="10" y="120" width="92" height="11" rx="5.5" fill="var(--ink)" />
            <rect x="10" y="136" width="70" height="11" rx="5.5" fill="var(--ink)" />
            <rect x="10" y="158" width="100" height="6" rx="3" fill="var(--ink-faint)" />
            <rect x="10" y="170" width="80" height="6" rx="3" fill="var(--ink-faint)" />
            <rect x="10" y="190" width="112" height="28" rx="14" fill="var(--coral)" />
            <path d="M52 205 l8 6 13-13" stroke="#12070a" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hb__home" />
        </div>
      </div>
    </div>
  );
}