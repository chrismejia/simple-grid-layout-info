import ThreeByThree from "./challenges/01-3x3Grid";
import Pyramid from "./challenges/02-Pyramid";
import CelticKnot from "./challenges/CelticKnots";

export default function LayoutChallenges() {
  return (
    <section className="container">
      <h3>Layout Challenges</h3>
      <h4>
        Using <code className="inline">grid-template-rows</code> &{" "}
        <code className="inline">grid-template-columns</code>
      </h4>
      <ol>
        <li>Build a 3x3 grid.</li>
        <ThreeByThree />
        <li>Build a pyramid 3 rows tall.</li>
        <Pyramid />
        <li></li>
        <li></li>
        <li>Build a Celtic Knot; bonus points for:</li>
        <ul>
          <li>rounded corners</li>
          <li>shadowing to replicate the overlapping lines</li>
        </ul>
        <CelticKnot />
      </ol>
    </section>
  );
}
