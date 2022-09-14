import { useRef } from "react";

import Divider from "../components/helpers/Divider";
import { ExternalLink } from "../components/helpers/ExternalLink";
import Page from "../components/helpers/Page";
import GridBasics from "../components/chapters/03-grid/GridBasics";
import SectionReferences from "../components/helpers/SectionReferences";

export default function Grid() {
  const fifthRef = useRef();
  const sixthRef = useRef();
  const seventhRef = useRef();
  const eighthRef = useRef();

  return (
    <Page>
      <GridBasics />
      <section className="container">
        <SectionReferences startRef={5}>
          <ExternalLink
            ref={fifthRef}
            url={
              "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
            }
            label={"[MDN] CSS values and units"}
            description={"Official reference docs"}
            refLabel={5}
          />
          <ExternalLink
            ref={sixthRef}
            url={"https://css-tricks.com/introduction-fr-css-unit/"}
            label={"[CSS-Tricks] An Introduction to the `fr` CSS Unit"}
            description={"Has useful examples and links to more articles"}
            refLabel={6}
          />
          <ExternalLink ref={seventhRef} url={""} label={""} description={""} />
          <ExternalLink ref={eighthRef} url={""} label={""} description={""} />
        </SectionReferences>
        <Divider />
      </section>
    </Page>
  );
}
