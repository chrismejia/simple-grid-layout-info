import { useState } from "react";
import HighlightedElement from "./HighlightedElement";
import ShowLayoutExample from "./ShowLayoutExample";

export default function SingleChallenge({
  challengeText,
  challengeNum,
  challengeFileLabel,
  challengeComponent,
}) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((state) => !state);
  };

  const ExampleComponent = challengeComponent;
  return (
    <div className="grid single-challenge">
      <div className="grid challenge-info">
        <ol start={challengeNum ? challengeNum : ""}>
          <li>{challengeText}</li>
        </ol>
        <button className="button" onClick={toggleOpen}>
          {open ? "Hide Example" : "Show Example"}
        </button>
      </div>
      <ShowLayoutExample isOpen={open}>
        <HighlightedElement elementLabel={challengeFileLabel}>
          <ExampleComponent />
        </HighlightedElement>
      </ShowLayoutExample>
    </div>
  );
}
