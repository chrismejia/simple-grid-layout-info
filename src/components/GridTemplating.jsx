import CodeWrapper from "./helpers/CodeWrapper";
import ExternalLink from "./helpers/ExternalLink";
import Footnote from "./helpers/Footnote";
import HighlightedCode from "./helpers/HighlightedCode";
import SectionReferences from "./helpers/SectionReferences";

export default function GridTemplating() {
  return (
    <section className="container">
      <h3>Who Needs Code When You Have Eyes? (grid-template)</h3>
      <p>
        In what's arguably one of the coolest features that CSS Grid offers, you
        can dictate a <code className="inline">grid-template</code> just by
        creating a simple text "array" representing each{" "}
        <code className="inline">grid-area</code>.
      </p>
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
    </section>
  );
}
