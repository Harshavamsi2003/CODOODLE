import { CONTACT_LINKS } from "../../data/index.js";
import "./ContactIcons.css";

const ICONS = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.004 2C6.477 2 2 6.478 2 12.004c0 2.116.638 4.084 1.734 5.719L2 22l4.393-1.71a9.943 9.943 0 0 0 5.61 1.714h.001c5.526 0 10.003-4.478 10.003-10.004C22.007 6.478 17.53 2 12.004 2zm0 18.13a8.09 8.09 0 0 1-4.129-1.13l-.296-.176-3.043.99.994-3.063-.192-.303a8.06 8.06 0 0 1-1.244-4.324c0-4.458 3.628-8.086 8.09-8.086 4.462 0 8.088 3.63 8.088 8.088 0 4.458-3.628 8.089-8.088 8.089z" />
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
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

/**
 * ContactIcons — the only three channels we surface as buttons:
 * Email, WhatsApp, Instagram. Used in the footer, the contact page
 * and the floating quick-contact cluster, so it's one source of truth.
 */
export default function ContactIcons({ variant = "default", className = "" }) {
  return (
    <ul className={`cico cico--${variant} ${className}`.trim()}>
      {CONTACT_LINKS.map((c, i) => (
        <li key={c.id} style={{ "--cico-i": i }}>
          <a
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noreferrer" : undefined}
            className={`cico__btn cico__btn--${c.id}`}
            aria-label={c.label}
          >
            <span className="cico__icon">{ICONS[c.id]}</span>
            {variant === "wide" && (
              <span className="cico__text">
                <span className="cico__label">{c.label}</span>
                <span className="cico__sub mono">{c.sub}</span>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
