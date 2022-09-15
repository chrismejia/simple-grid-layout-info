import { useRef } from "react";

import Divider from "../../helpers/Divider";
import { ExternalLink } from "../../helpers/ExternalLink";
import SectionReferences from "../../helpers/SectionReferences";

import DontRepeatYourself from "./sections/DontRepeatYourself";
import GridFirstDeclaration from "./sections/GridFirstDeclaration";
import IntroToRowsColumns from "./sections/IntroToRowsColumns";
import MindTheGap from "./sections/MindTheGap";
import PuttingItAllTogether from "./sections/PuttingItAllTogether";
import RowsColsAllSizes from "./sections/RowsColsAllSizes";
import WorkingWithColumns from "./sections/WorkingWithColumns";
import WorkingWithRows from "./sections/WorkingWithRows";

export default function GridBasics() {
  const ref5 = useRef();
  const ref6 = useRef();
  const seventhRef = useRef();
  const eighthRef = useRef();

  return (
    <>
      <GridFirstDeclaration />
      <IntroToRowsColumns footnotes={{ ref5, ref6 }} />
      <WorkingWithColumns />
      <WorkingWithRows />
      <PuttingItAllTogether />
      <RowsColsAllSizes />

      <MindTheGap />
      <DontRepeatYourself />

      <h4>Start Here, End There (declaring spans)</h4>

      <section className="container">
        <SectionReferences startRef={5}>
          <ExternalLink
            ref={ref5}
            url={
              "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
            }
            label={"[MDN] CSS values and units"}
            description={"Official reference docs"}
            refLabel={5}
          />
          <ExternalLink
            ref={ref6}
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
    </>
  );
}
