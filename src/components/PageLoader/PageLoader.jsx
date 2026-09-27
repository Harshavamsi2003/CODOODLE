import { useEffect, useState } from "react";
import Logo from "../Logo/Logo.jsx";
import "./PageLoader.css";

/**
 * PageLoader — a short, premium splash that plays once per browser session
 * (not on every client-side route change). Purely cosmetic: it never blocks
 * real content, which is already rendering behind it.
 */
export default function PageLoader() {
  const [phase, setPhase] = useState(() => {
    if (typeof window === "undefined") return "done";
    try {
      return sessionStorage.getItem("codoodle-loaded") ? "done" : "in";
    } catch {
      return "in";
    }
  });

  useEffect(() => {
    if (phase === "done") return;
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const toOut = setTimeout(() => setPhase("out"), reduce ? 150 : 1050);
    const toDone = setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem("codoodle-loaded", "1");
      } catch {
        /* private mode — fine to skip */
      }
    }, reduce ? 200 : 1550);

    return () => {
      clearTimeout(toOut);
      clearTimeout(toDone);
    };
  }, [phase]);

  useEffect(() => {
    document.body.style.overflow = phase === "in" || phase === "out" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`ploader ${phase === "out" ? "is-out" : ""}`} aria-hidden="true">
      <div className="ploader__inner">
        <Logo className="ploader__logo" />
        <div className="ploader__bar">
          <span className="ploader__fill" />
        </div>
      </div>
    </div>
  );
}
