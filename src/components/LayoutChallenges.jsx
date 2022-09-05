import Pyramid from "./challenges/02-Pyramid";

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
        <li>Build a pyramid rows tall.</li>
        <Pyramid />
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </section>
  );
}
