import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import LogoMark from "../LogoMark/LogoMark.jsx";
import { NAV, BRAND } from "../../data/index.js";
import "./Navbar.css";

// "Contact" and the "Start a project" button go to the same page, so the
// button is the only contact entry in the navbar/drawer (the footer menu
// still lists Contact, since it has no button).
const LINKS = NAV.filter((item) => item.to !== "/contact");

// Contact details shown at the bottom of the mobile menu
const ICON = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h3.6l1.7 4.3-2.2 1.4a11 11 0 0 0 5.2 5.2l1.4-2.2L19 14.4V18a2 2 0 0 1-2.2 2A14.8 14.8 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const DRAWER_CONTACT = [
  { id: "email", label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
  { id: "phone", label: "Call", value: BRAND.phone, href: `tel:+${BRAND.phoneRaw}` },
  { id: "instagram", label: "Instagram", value: BRAND.instagramHandle, href: BRAND.instagram, external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Escape closes the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // lets other fixed UI (e.g. the WhatsApp greeting) get out of the menu's way
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Codoodle home">
          <LogoMark />
          <Logo />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={{ "--i": i }}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""}`
              }
            >
              <span className="nav__link-label">{item.label}</span>
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn--coral nav__cta"
            style={{ "--i": LINKS.length }}
          >
            <span>Start a project</span>
            <span className="nav__cta-arrow" aria-hidden="true">→</span>
          </Link>
        </nav>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`nav__drawer ${open ? "is-open" : ""}`}
        onClick={(e) => {
          // tapping empty space (not a link) closes the menu
          if (e.target === e.currentTarget || e.target.tagName === "NAV") setOpen(false);
        }}
      >
        <nav aria-label="Mobile">
          {LINKS.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav__drawer-link ${isActive ? "is-active" : ""}`
              }
              style={{ transitionDelay: `${open ? 80 + i * 55 : 0}ms` }}
            >
              <span className="nav__drawer-dot" aria-hidden="true" />
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn--coral nav__drawer-cta"
            style={{ transitionDelay: `${open ? 80 + LINKS.length * 55 : 0}ms` }}
          >
            Start a project <span className="arrow">→</span>
          </Link>
        </nav>

        <ul className="nav__drawer-contact" aria-label="Contact details">
          {DRAWER_CONTACT.map((c, i) => (
            <li
              key={c.id}
              style={{ transitionDelay: `${open ? 120 + (LINKS.length + i) * 55 : 0}ms` }}
            >
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
              >
                <span className="nav__drawer-ico">{ICON[c.id]}</span>
                <span className="nav__drawer-ctext">
                  <span className="nav__drawer-clabel mono">{c.label}</span>
                  <span className="nav__drawer-cvalue">{c.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}