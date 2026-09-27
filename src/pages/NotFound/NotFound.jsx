import { Link } from "react-router-dom";
import Doodle from "../../components/Doodle/Doodle.jsx";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="container notfound__inner">
        <Doodle name="squiggle" color="var(--peri)" className="notfound__squiggle" />
        <p className="eyebrow">Error 404</p>
        <h1 className="notfound__title">
          This page got{" "}
          <span className="doodle-word">doodled</span> away.
        </h1>
        <p className="lead notfound__lead">
          The link&apos;s broken or the page moved. Let&apos;s get you back on
          track.
        </p>
        <Link to="/" className="btn btn--coral">
          Back home <span className="arrow">→</span>
        </Link>
      </div>
    </main>
  );
}
