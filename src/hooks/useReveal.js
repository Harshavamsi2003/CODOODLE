import { useEffect, useRef, useState } from "react";

/**
 * useReveal — adds an `inView` flag once the element scrolls into view.
 * Fires once, then unobserves.
 *
 * Reduced-motion is handled in CSS (see doodle.css): people who prefer
 * less motion still get the reveal, but as a gentle fade — no sliding,
 * no blur. So this hook always observes; it never skips the reveal.
 */
export default function useReveal({ threshold = 0.2, rootMargin = "0px 0px -8% 0px", once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}