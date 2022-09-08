import DontRepeatYourself from "../sections/DontRepeatYourself";
import ExternalLink from "../helpers/ExternalLink";
import TwelveColumnGrid from "../examples/TwelveColumnGrid";
import SectionReferences from "../helpers/SectionReferences";
import GridFlowExample from "../sections/GridFlowExample";
import GridFirstDeclaration from "../sections/GridFirstDeclaration";
import MindTheGap from "../sections/MindTheGap";
import RowsAndColumns from "../sections/RowsAndColumns";

export default function GridBasics() {
  return (
    <>
      <GridFirstDeclaration />
      <RowsAndColumns />
      <MindTheGap />
      <DontRepeatYourself />
      <GridFlowExample />

      <h3>Stacks on Stacks on Stacks (rows)</h3>
      <h4>Mixing Sizes (mixing widths and heights)</h4>
      <h4>Start Here, End There (declaring spans)</h4>

      <SectionReferences startRef={5}>
        <ExternalLink
          url={
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
          }
          label={"[MDN] CSS values and units"}
          description={"Official reference docs"}
          refLabel={5}
        />
        <ExternalLink
          url={"https://css-tricks.com/introduction-fr-css-unit/"}
          label={"[CSS-Tricks] An Introduction to the `fr` CSS Unit"}
          description={"Has useful examples and links to more articles"}
          refLabel={6}
        />
        <ExternalLink url={""} label={""} description={""} />
        <ExternalLink url={""} label={""} description={""} />
      </SectionReferences>
    </>
  );
}
