import { useEffect, useState } from "react";
import { BRAND } from "../../data/index.js";
import "./FloatingContact.css";

/**
 * FloatingContact — a single WhatsApp button pinned to the bottom-right
 * corner of every page. The button NEVER moves: the greeting bubble is
 * absolutely positioned above it, so showing/hiding the bubble can't
 * shift the icon or overlap page text with the button.
 *
 * The bubble pops up once shortly after the page loads, then hides
 * itself automatically. It can also be closed early with the ×.
 */
const SHOW_AFTER_MS = 1800;
const VISIBLE_FOR_MS = 5500;
const FADE_MS = 500;

export default function FloatingContact() {
  const [shown, setShown] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setShown(true), SHOW_AFTER_MS);
    const hide = setTimeout(() => setShown(false), SHOW_AFTER_MS + VISIBLE_FOR_MS);
    const remove = setTimeout(
      () => setGone(true),
      SHOW_AFTER_MS + VISIBLE_FOR_MS + FADE_MS
    );
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
      clearTimeout(remove);
    };
  }, []);

  const close = () => {
    setShown(false);
    setTimeout(() => setGone(true), FADE_MS);
  };

  return (
    <div className="fcontact">
      {!gone && (
        <div
          className={`fcontact__bubble ${shown ? "is-shown" : ""}`}
          role="status"
          aria-hidden={!shown}
        >
          <button
            type="button"
            className="fcontact__dismiss"
            aria-label="Dismiss"
            onClick={close}
          >
            ×
          </button>
          <span className="fcontact__wave" aria-hidden="true">👋</span>
          <span>
            Hi! Got a project in mind?
            <span className="fcontact__more">
              <br />
              Say hi on WhatsApp — we reply fast.
            </span>
          </span>
        </div>
      )}

      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fcontact__toggle"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="fcontact__ping" aria-hidden="true" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="fcontact__icon">
          <path d="M12.004 2C6.477 2 2 6.478 2 12.004c0 2.116.638 4.084 1.734 5.719L2 22l4.393-1.71a9.943 9.943 0 0 0 5.61 1.714h.001c5.526 0 10.003-4.478 10.003-10.004C22.007 6.478 17.53 2 12.004 2zm0 18.13a8.09 8.09 0 0 1-4.129-1.13l-.296-.176-3.043.99.994-3.063-.192-.303a8.06 8.06 0 0 1-1.244-4.324c0-4.458 3.628-8.086 8.09-8.086 4.462 0 8.088 3.63 8.088 8.088 0 4.458-3.628 8.089-8.088 8.089z" />
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  );
}