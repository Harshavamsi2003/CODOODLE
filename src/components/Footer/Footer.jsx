import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import ContactIcons from "../ContactIcons/ContactIcons.jsx";
import { NAV, BRAND } from "../../data/index.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" aria-label="Codoodle home">
              <Logo />
            </Link>
            <p className="footer__pitch">
              A web studio where <span className="mono">code</span> meets{" "}
              <span className="doodle-word">doodle</span>. We design and build
              sites businesses are proud to share.
            </p>
            <a href={`mailto:${BRAND.email}`} className="footer__email link-doodle">
              {BRAND.email}
            </a>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <span className="footer__col-title mono">Menu</span>
            <Link to="/">Home</Link>
            {NAV.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="footer__nav footer__contact">
            <span className="footer__col-title mono">Get in touch</span>
            <ContactIcons />
          </div>
        </div>

        <div className="footer__bottom">
          <span className="mono">© {year} Codoodle</span>
          <span className="footer__note">
            Built where code meets doodle.
          </span>
        </div>
      </div>
    </footer>
  );
}
