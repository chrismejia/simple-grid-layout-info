import { useState } from "react";
import TargetSolution from "../../0X-answers/visuals/A4-TargetSolution";
import PlainTarget from "./PlainTarget";

import InteractiveGridWithButtons from "../../../helpers/InteractiveGridWithButtons";

export default function Target() {
  const [showingDetails, setShowingDetails] = useState(false);

  const toggleDetails = () => {
    setShowingDetails((state) => !state);
  };

  const ToggleButton = () => (
    <button className="btn__single-line" onClick={toggleDetails}>
      {showingDetails
        ? "Hide Target Challenge Breakdown"
        : "Show Target Challenge Breakdown"}
    </button>
  );

  return (
    <section className="container">
      <InteractiveGridWithButtons interactiveBtns={<ToggleButton />}>
        {showingDetails ? <TargetSolution /> : <PlainTarget />}
      </InteractiveGridWithButtons>
    </section>
  );
}
