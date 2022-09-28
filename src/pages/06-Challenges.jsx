import Page from "../components/helpers/Page";
import Divider from "../components/helpers/Divider";

import SingleChallenge from "../components/helpers/SingleChallenge";
import ChallengeSpecs from "../components/helpers/ChallengeSpecs";

import PlainTarget from "../components/chapters/06-challenges/visuals/PlainTarget";
import PlainSpiral from "../components/chapters/06-challenges/visuals/PlainSpiral";
import BrickWall from "../components/chapters/06-challenges/visuals/C6-BrickWall";

import { allChallengeDetails } from "../data/challengeDetails.data";

export default function Challenges() {
  const { target, spiral, brickWall } = allChallengeDetails;

  return (
    <Page>
      <section className="container">
        <article className="text">
          <h2>Art Challenges</h2>
        </article>
      </section>
      <SingleChallenge {...target}>
        <PlainTarget />
      </SingleChallenge>

      <SingleChallenge {...spiral}>
        <PlainSpiral />
      </SingleChallenge>

      <SingleChallenge {...brickWall}>
        <ChallengeSpecs
          details={"Details"}
          width={800}
          height={450}
          cols={21}
          rows={10}
        >
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
