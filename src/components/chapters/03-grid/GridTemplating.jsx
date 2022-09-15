import ExternalLink from "../../helpers/ExternalLink";
import SectionReferences from "../../helpers/SectionReferences";

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
    </section>
  );
}
