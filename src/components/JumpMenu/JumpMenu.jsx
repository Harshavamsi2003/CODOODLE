import { useEffect, useRef, useState } from "react";
import "./JumpMenu.css";

/**
 * JumpMenu — a tiny fixed tab on the left edge of the screen, the same
 * idea as the WhatsApp button on the right. Collapsed it's just a
 * small pill; tap it and a solid (fully opaque, always-readable) panel
 * slides out listing the sites we've built — pick one and it smooth-
 * scrolls straight to that case study.
 */
export default function JumpMenu({ items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const jump = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`jmenu ${open ? "is-open" : ""}`} ref={ref}>
      <button
        type="button"
        className="jmenu__tab"
        aria-expanded={open}
        aria-label="Jump to a site"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" className="jmenu__icon">
          <rect x="3.5" y="4" width="17" height="4.2" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3.5" y="10.9" width="17" height="4.2" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3.5" y="17.8" width="10.5" height="4.2" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <span className="jmenu__tabtext mono">Sites</span>
      </button>

      <div className="jmenu__panel" role="menu">
        <span className="jmenu__title mono">Our sites</span>
        {items.map((p) => (
          <button
            type="button"
            key={p.id}
            className="jmenu__item"
            role="menuitem"
            onClick={() => jump(p.id)}
          >
            <span className="jmenu__dot" aria-hidden="true" />
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}