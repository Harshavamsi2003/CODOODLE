import useReveal from "../../hooks/useReveal.js";

/**
 * Reveal — wraps children and fades/slides them up when scrolled into view.
 * `as` lets you pick the element; `delay` staggers siblings.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 22,
  className = "",
  ...rest
}) {
  const [ref, inView] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{
        transitionDelay: `${delay}ms`,
        "--reveal-y": `${y}px`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
