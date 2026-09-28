import { useState } from "react";
import Reveal from "../../components/Reveal/Reveal.jsx";
import Doodle from "../../components/Doodle/Doodle.jsx";
import ContactIcons from "../../components/ContactIcons/ContactIcons.jsx";
import { BRAND, TERMS } from "../../data/index.js";
import "./Contact.css";

const PROJECT_TYPES = ["Website", "Portfolio", "E-commerce", "Not sure yet"];

// Web3Forms access key, lightly obfuscated so it doesn't sit as plain
// text in the source. Note: Web3Forms' own docs say this key is public
// and safe for client-side use — this step is obscurity, not real
// security, since any client-side JS is always readable in devtools
// regardless of how it's stored here.
const _K = "0cjNwIDOzYTZzAjYtQTYzEWLyYDN00iZzMGZtYmNhJWYjdDZ";
const WEB3FORMS_KEY = atob([..._K].reverse().join(""));

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "Website", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [agreed, setAgreed] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Your name helps us say hello.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "A valid email so we can reply.";
    if (!agreed) next.terms = "Please tick the box to agree to the terms before sending.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const data = {
      access_key: WEB3FORMS_KEY,
      subject: `New project enquiry from ${form.name} — ${form.type}`,
      from_name: "Codoodle website",
      name: form.name,
      email: form.email,
      replyto: form.email,
      project_type: form.type,
      message: form.message.trim() || "(No project details provided)",
      terms_accepted: "Yes — agreed to the terms shown on the contact page",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setErrorMsg("");
        setStatus("success");
      } else {
        // Web3Forms tells us exactly what's wrong (bad key, domain not
        // allowed, rate limit...) — keep it for debugging.
        console.error("Web3Forms rejected the submission:", json);
        setErrorMsg(json.message || "");
        setStatus("error");
      }
    } catch (err) {
      console.error("Web3Forms request failed:", err);
      setErrorMsg("");
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ name: "", email: "", type: "Website", message: "" });
    setErrors({});
    setErrorMsg("");
    setAgreed(false);
    setStatus("idle");
  };

  return (
    <main className="contact-page">
      <section className="section page-hero">
        <div className="container">
          <Reveal as="p" className="eyebrow">Contact</Reveal>
          <h1 className="page-hero__title title-wipe">
            Let&apos;s <span className="doodle-word">talk.</span>
          </h1>
          <Reveal as="p" className="lead page-hero__lead" delay={170}>
            Tell us what you&apos;re building. Send the form and it lands
            straight in our inbox — we reply within a couple of days.
          </Reveal>
        </div>
      </section>

      <section className="section contact-body">
        <div className="container contact-grid">
          {/* Left: what to expect + channels */}
          <Reveal className="contact-aside">
            <h2 className="contact-aside__h">What happens next</h2>
            <ol className="contact-steps">
              <li>
                <Doodle name="check" color="var(--coral)" />
                <div><strong>You send it.</strong> A few lines about the project is plenty to start.</div>
              </li>
              <li>
                <Doodle name="check" color="var(--peri)" />
                <div><strong>We reply.</strong> Questions, a rough direction, and what we&apos;d need from you.</div>
              </li>
              <li>
                <Doodle name="check" color="var(--butter)" />
                <div><strong>We sketch.</strong> If it&apos;s a fit, we map out how it could look and ship.</div>
              </li>
            </ol>

            <div className="contact-direct">
              <span className="mono contact-direct__label">Or reach us directly</span>
              <ContactIcons variant="wide" />
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal className="contact-form-wrap" delay={100}>
            {status === "success" ? (
              <div className="contact-success">
                <Doodle name="check" color="var(--coral)" className="contact-success__check" />
                <h2>Message sent.</h2>
                <p>
                  Thanks, {form.name.split(" ")[0] || "there"} — it&apos;s in our
                  inbox. We&apos;ll get back to you within a couple of days.
                </p>
                <button type="button" className="btn btn--ghost" onClick={reset}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" value={form.name} onChange={update("name")}
                    placeholder="Your name" aria-invalid={!!errors.name} />
                  {errors.name && <span className="field__err">{errors.name}</span>}
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={update("email")}
                    placeholder="you@company.com" aria-invalid={!!errors.email} />
                  {errors.email && <span className="field__err">{errors.email}</span>}
                </div>

                <div className="field">
                  <label>Project type</label>
                  <div className="chips" role="radiogroup" aria-label="Project type">
                    {PROJECT_TYPES.map((t) => (
                      <button type="button" key={t} role="radio" aria-checked={form.type === t}
                        className={`chip ${form.type === t ? "is-active" : ""}`}
                        onClick={() => setForm((f) => ({ ...f, type: t }))}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">
                    About the project <span className="field__opt">optional</span>
                  </label>
                  <textarea id="message" rows="5" value={form.message} onChange={update("message")}
                    placeholder="Anything you'd like us to know — what you're building, timeline, ideas… (optional)" />
                </div>

                <fieldset className={`terms ${errors.terms ? "has-error" : ""}`}>
                  <legend className="terms__title mono">Before you send</legend>
                  <ul className="terms__list">
                    {TERMS.map((t) => (
                      <li key={t.id} className="terms__item">
                        <span className="terms__dot" aria-hidden="true" />
                        <span>
                          <strong>{t.lead}.</strong> {t.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <label className="terms__agree">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                        if (e.target.checked) setErrors((er) => ({ ...er, terms: undefined }));
                      }}
                      aria-invalid={!!errors.terms}
                    />
                    <span className="terms__box" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.5l4.4 4.4L19 7.4" />
                      </svg>
                    </span>
                    <span className="terms__label">I&apos;ve read and agree to these terms.</span>
                  </label>
                  {errors.terms && (
                    <span className="field__err" role="alert">{errors.terms}</span>
                  )}
                </fieldset>

                {status === "error" && (
                  <p className="contact-form__status is-error" role="alert">
                    That didn&apos;t send{errorMsg ? ` (${errorMsg})` : ""}. Please try
                    again, or email us directly at{" "}
                    <a href={`mailto:${BRAND.email}`} className="link-doodle">
                      {BRAND.email}
                    </a>
                    .
                  </p>
                )}

                <button type="submit" className="btn btn--coral contact-form__submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : (<>Send message <span className="arrow">→</span></>)}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}