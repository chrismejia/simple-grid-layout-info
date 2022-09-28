import { useState } from "react";
import HighlightedElement from "./HighlightedElement";
import ShowLayoutExample from "./ShowLayoutExample";

export default function SingleChallenge({
  challengeBlurb,
  challengeNum,
  challengeFileLabel,
  children,
}) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((state) => !state);
  };

  return (
    <section className="container">
      <article className="grid single-challenge">
        <div className="grid challenge-info">
          <ol start={challengeNum ? challengeNum : ""}>
            <li>{challengeBlurb}</li>
          </ol>
          <button className="button" onClick={toggleOpen}>
            {open ? "Hide Example" : "Show Example"}
          </button>
        </div>
        <ShowLayoutExample isOpen={open}>
          <HighlightedElement elementLabel={challengeFileLabel}>
            {children}
          </HighlightedElement>
        </ShowLayoutExample>
      </article>
    </section>
  );
}
