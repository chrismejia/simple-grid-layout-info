import Page from "../components/helpers/Page";
import Divider from "../components/helpers/Divider";

import SingleChallenge from "../components/helpers/SingleChallenge";
import ChallengeSpecs from "../components/helpers/ChallengeSpecs";

import TicTacToe from "../components/chapters/06-challenges/visuals/C1-TicTacToe";
import Staircase from "../components/chapters/06-challenges/visuals/C2-Staircase";
import Pyramid from "../components/chapters/06-challenges/visuals/C3-Pyramid";
import PlainTarget from "../components/chapters/06-challenges/visuals/PlainTarget";
import PlainSpiral from "../components/chapters/06-challenges/visuals/PlainSpiral";
import BrickWall from "../components/chapters/06-challenges/visuals/C6-BrickWall";

import { allChallengeDetails } from "../data/challengeDetails.data";

export default function Challenges() {
  const { tic_tac_toe, staircase, pyramid, target, spiral, brickWall } =
    allChallengeDetails;

  return (
    <Page>
      <section className="container">
        <article className="text">
          <h2>Art Challenges</h2>
        </article>
      </section>
      <SingleChallenge {...tic_tac_toe}>
        <ChallengeSpecs width={400} height={400} cols={3} rows={3}>
          <TicTacToe />
        </ChallengeSpecs>
      </SingleChallenge>

      <SingleChallenge {...staircase}>
        <ChallengeSpecs width={700} height={350} cols={7} rows={7}>
          <Staircase />
        </ChallengeSpecs>
      </SingleChallenge>

      <SingleChallenge {...pyramid}>
        <ChallengeSpecs width={900} height={500} cols={9} rows={5}>
          <Pyramid />
        </ChallengeSpecs>
      </SingleChallenge>

      <SingleChallenge {...target}>
        <ChallengeSpecs width={400} height={400} cols={5} rows={5}>
          <PlainTarget />
        </ChallengeSpecs>
      </SingleChallenge>

      <SingleChallenge {...spiral}>
        <ChallengeSpecs width={400} height={400} cols={9} rows={9}>
          <PlainSpiral />
        </ChallengeSpecs>
      </SingleChallenge>

      <SingleChallenge {...brickWall}>
        <ChallengeSpecs width={800} height={450} cols={21} rows={10}>
          <BrickWall />
        </ChallengeSpecs>
      </SingleChallenge>

      <Divider />
      <section className="container">
        <article className="text">
          <h2>Layout Challenges</h2>
        </article>
      </section>
    </Page>
  );
}
