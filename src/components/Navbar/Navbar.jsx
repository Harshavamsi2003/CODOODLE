import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import { NAV } from "../../data/index.js";
import "./Navbar.css";

// "Contact" and the "Start a project" button go to the same page, so the
// button is the only contact entry in the navbar/drawer (the footer menu
// still lists Contact, since it has no button).
const LINKS = NAV.filter((item) => item.to !== "/contact");

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

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Codoodle home">
          <Logo />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""}`
              }
            >
              <span className="nav__link-label">{item.label}</span>
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--coral nav__cta">
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

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
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
      </div>
    </header>
  );
}