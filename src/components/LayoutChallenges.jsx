import ThreeByThree from "./challenges/01-3x3Grid";
import Pyramid from "./challenges/02-Pyramid";
import CelticKnot from "./challenges/CelticKnots";

import SingleChallenge from "./helpers/SingleChallenge";

export default function LayoutChallenges() {
  const allChallengeProps = {
    tic_tac_toe: {
      challengeText: "Build a 3x3 tic-tac-toe board.",
      challengeNum: 1,
      challengeFileLabel: "ThreeByThree.jsx",
      challengeComponent: ThreeByThree,
    },
    pyramid: {
      challengeText: "Build a pyramid 3 levels high",
      challengeNum: 1,
      challengeFileLabel: "Pyramid.jsx",
      challengeComponent: Pyramid,
    },
  };

  return (
    <section className="container">
      <h3>Layout Challenges</h3>

      <SingleChallenge {...allChallengeProps.tic_tac_toe} />
      <SingleChallenge {...allChallengeProps.pyramid} />

      <ol>
        <li>Build a 3x3 grid.</li>
        <li>Build a pyramid 3 rows tall.</li>
        <li>Build a staircase</li>

        <li>Build a brick wall</li>
        <li>Build hollow square</li>
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
