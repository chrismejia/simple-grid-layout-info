import { useState } from "react";

import InteractiveGridWithButtons from "../../../helpers/InteractiveGridWithButtons";
import MDNQuote from "../../../helpers/MDNQuote";

import SeeingTheGridLines from "../visuals/SeeingTheGridLines";

import { mdnQuoteData } from "../../../../data/mdnQuote.data";

export default function LiningThingsUp() {
  const [linesVisible, setVisibleLines] = useState(false);

  const toggleLines = () => {
    setVisibleLines((state) => !state);
  };

  return (
    <section className="container">
      <article className="text">
        <h3>Lining Things Up</h3>
        <p>Let's </p>
      </article>
      <InteractiveGridWithButtons
        gridExample={<SeeingTheGridLines linesAreVisible={linesVisible} />}
      >
        <button className="btn__single-line" onClick={toggleLines}>
          {linesVisible ? "Hide Grid Lines" : "Show Grid Lines"}
        </button>
      </InteractiveGridWithButtons>
    </section>
  );
}
