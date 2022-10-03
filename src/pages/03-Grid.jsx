import { useRef } from "react";

import Divider from "../components/helpers/Divider";
import { FootnoteLink } from "../components/helpers/FootnoteLink";
import SectionReferences from "../components/helpers/SectionReferences";
import Page from "../components/helpers/Page";

import DifferentGapSizing from "../components/chapters/03-grid/sections/DifferentGapSizing";
import DontRepeatYourself from "../components/chapters/03-grid/sections/DontRepeatYourself";
import GridFirstDeclaration from "../components/chapters/03-grid/sections/GridFirstDeclaration";
import IntroToRowsColumns from "../components/chapters/03-grid/sections/IntroToRowsColumns";
import MindTheGap from "../components/chapters/03-grid/sections/MindTheGap";
import PuttingItAllTogether from "../components/chapters/03-grid/sections/PuttingItAllTogether";
import RowsColsAllSizes from "../components/chapters/03-grid/sections/RowsColsAllSizes";
import WorkingWithColumns from "../components/chapters/03-grid/sections/WorkingWithColumns";
import WorkingWithRows from "../components/chapters/03-grid/sections/WorkingWithRows";

export default function Grid() {
  const ref5 = useRef();
  const ref6 = useRef();
  const seventhRef = useRef();
  const eighthRef = useRef();

  return (
    <Page>
      <GridFirstDeclaration />
      <IntroToRowsColumns footnoteRefs={{ ref5, ref6 }} />
      <WorkingWithColumns />
      <WorkingWithRows />
      <PuttingItAllTogether />
      <RowsColsAllSizes />
      <MindTheGap />
      <DifferentGapSizing />
      <DontRepeatYourself />

      <SectionReferences startRef={5}>
        <FootnoteLink
          ref={ref5}
          footnoteNumber={5}
          url={
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
          }
          label={"[MDN] CSS values and units"}
          description={"Official reference docs"}
        />
        <FootnoteLink
          ref={ref6}
          footnoteNumber={6}
          url={"https://css-tricks.com/introduction-fr-css-unit/"}
          label={"[CSS-Tricks] An Introduction to the `fr` CSS Unit"}
          description={"Has useful examples and links to more articles"}
        />
      </SectionReferences>
    </Page>
  );
}
