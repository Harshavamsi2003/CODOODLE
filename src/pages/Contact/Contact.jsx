import { useState } from "react";
import Reveal from "../../components/Reveal/Reveal.jsx";
import Doodle from "../../components/Doodle/Doodle.jsx";
import ContactIcons from "../../components/ContactIcons/ContactIcons.jsx";
import "./Contact.css";

const PROJECT_TYPES = ["Website", "Portfolio", "E-commerce", "Not sure yet"];
const WEB3FORMS_KEY = "376649b8-3d19-4d0d-ab95-16439d84b2ec";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "Website", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Your name helps us say hello.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "A valid email so we can reply.";
    if (form.message.trim().length < 10) next.message = "A line or two about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const data = {
      access_key: WEB3FORMS_KEY,
      subject: `New project enquiry — ${form.type}`,
      from_name: "Codoodle website",
      name: form.name,
      email: form.email,
      project_type: form.type,
      message: form.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ name: "", email: "", type: "Website", message: "" });
    setErrors({});
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
                  <label htmlFor="message">About the project</label>
                  <textarea id="message" rows="5" value={form.message} onChange={update("message")}
                    placeholder="What are you building, and what would success look like?"
                    aria-invalid={!!errors.message} />
                  {errors.message && <span className="field__err">{errors.message}</span>}
                </div>

                {status === "error" && (
                  <p className="contact-form__status is-error">
                    Something went wrong sending that. Please try again, or email us directly.
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