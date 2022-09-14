import ThreeByThree from "../../../challenges/01-3x3Grid";
import Pyramid from "../../../challenges/02-Pyramid";
import Staircase from "../../../challenges/03-Staircase";
import CelticKnot from "../../../challenges/CelticKnots";
import RecursiveSquare from "../../../challenges/RecursiveSquare";

import SingleChallenge from "../../../helpers/SingleChallenge";

export default function LayoutChallenges() {
  const allChallengeProps = {
    tic_tac_toe: {
      challengeText: "Build a 3x3 grid.",
      challengeNum: 1,
      challengeFileLabel: "ThreeByThree.jsx",
      challengeComponent: ThreeByThree,
    },
    staircase: {
      challengeText: "Build an ascending staircase with 7 steps.",
      challengeNum: 2,
      challengeFileLabel: "Pyramid.jsx",
      challengeComponent: Staircase,
    },
    pyramid: {
      challengeText: "Build a pyramid 5 levels high.",
      challengeNum: 3,
      challengeFileLabel: "Pyramid.jsx",
      challengeComponent: Pyramid,
    },
    brickWall: {
      challengeText: "Build a pyramid 5 levels high.",
      challengeNum: 4,
      challengeFileLabel: "Pyramid.jsx",
      challengeComponent: Pyramid,
    },
    weave: {
      challengeText: "Build a pyramid 3 levels high.",
      challengeNum: 5,
      challengeFileLabel: "Pyramid.jsx",
      challengeComponent: Pyramid,
    },
    squareKnot: {
      challengeText: "Build a square knot.",
      extras: [],
      challengeNum: 6,
      challengeFileLabel: "Pyramid.jsx",
      challengeComponent: Pyramid,
    },
  };

  return (
    <section className="container">
      <h3>Layout Challenges</h3>

      <SingleChallenge {...allChallengeProps.tic_tac_toe} />
      <SingleChallenge {...allChallengeProps.staircase} />
      <SingleChallenge {...allChallengeProps.pyramid} />

      {/* <section
        className="outer-border"
        style={{ width: "900px", height: "1200px" }}
      >
        <RecursiveSquare>
          <RecursiveSquare>
            <RecursiveSquare />
          </RecursiveSquare>
        </RecursiveSquare>
      </section> */}

      {/* <ol>
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
      </ol> */}
    </section>
  );
}
