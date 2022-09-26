import Page from "../components/helpers/Page";

import LiningThingsUp from "../components/chapters/04-templating/sections/LiningThingsUp";
import UsingASetUpGrid from "../components/chapters/04-templating/sections/UsingASetUpGrid";

import SeeingTheGridLines from "../components/chapters/04-templating/visuals/SeeingTheGridLines";
import IndividualGridLines from "../components/chapters/04-templating/visuals/IndividualGridLines";
import NamingGridLines from "../components/chapters/04-templating/sections/NamingGridLines";

import Divider from "../components/helpers/Divider";

export default function Templating() {
  return (
    <Page>
      <UsingASetUpGrid />
      <LiningThingsUp />
      <NamingGridLines />
      {/* <IndividualGridLines /> */}

      <section className="container">
        <article className="text">
          <h3>Staying on Track (grid tracks/lines)</h3>
          <h3>From Here to There (manual, then spanss)</h3>
          <h4>grid-column/row start/end css properties</h4>
          <h5>as (X,Y) coordinates</h5>
          <h5>using negative values</h5>
          <h5>using span with and without numbers</h5>

          <h4>using shorthand (grid-column & grid-row)</h4>
          <h5>with and without spans</h5>

          <h4>combined properties</h4>

          <h3>Naming Areas (grid-template)</h3>

          <h3>Sizing Functions and Keywords</h3>
          <h3>Flexbox in Grid?</h3>
          <h3>Layering in Grid (z-index)</h3>
          <h3>ORDER?</h3>
        </article>
      </section>
      <Divider />
    </Page>
  );
}
