import useReveal from "../../hooks/useReveal.js";

/**
 * Stagger — reveals its direct children one after another on scroll.
 * Pair with the `.stagger` styles in doodle.css.
 */
export default function Stagger({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useReveal({ threshold: 0.15 });
  return (
    <Tag
      ref={ref}
      className={`stagger ${inView ? "is-in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
