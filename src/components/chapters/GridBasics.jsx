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

      <h3>
        <del>Don't</del> Repeat Yourself
      </h3>
      <p>
        Remember how we made our{" "}
        <a className="external" href="#breakpoints">
          container widths divisible by 12
        </a>
        ? Well, to have 12 columns, we'd need 12{" "}
        <code className="inline">1fr</code>, like so:
      </p>
      <p className="centered-text">
        <code className="inline">
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
        </code>
      </p>
      <p>
        This isn't ideal as it's a pain to write that all out, and it's not easy
        to understand how many columns you've got in your grid at a glance.
        Thankfully, you can just <code className="inline">repeat</code>{" "}
        yourself.
      </p>
      <p className="centered-text">
        <code className="inline">grid-template-columns: repeat(12, 1fr)</code>
      </p>

      <TwelveColumnGrid />

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
