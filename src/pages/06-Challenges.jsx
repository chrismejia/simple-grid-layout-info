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
import Maze from "../components/chapters/06-challenges/visuals/C9-Maze";
import Weave from "../components/chapters/06-challenges/visuals/C10-Weave";

import { allChallengeDetails } from "../data/challengeDetails.data";

export default function Challenges() {
  const {
    tic_tac_toe,
    staircase,
    pyramid,
    target,
    spiral,
    brickWall,
    weave,
    maze,
    squareKnot,
    interlockingSquares,
  } = allChallengeDetails;

  return (
    <Page>
      <section className="container">
        <article className="text">
          <h2>Art Challenges</h2>
        </article>
      </section>

      <SingleChallenge {...tic_tac_toe}>
        <ChallengeSpecs
          width={400}
          height={400}
          cols={3}
          rows={3}
          example={<TicTacToe />}
        />
      </SingleChallenge>

      <SingleChallenge {...staircase}>
        <ChallengeSpecs
          width={700}
          height={350}
          cols={7}
          rows={7}
          example={<Staircase />}
        />
      </SingleChallenge>

      <SingleChallenge {...pyramid}>
        <ChallengeSpecs
          width={900}
          height={500}
          cols={9}
          rows={5}
          example={<Pyramid />}
        />
      </SingleChallenge>

      <SingleChallenge {...target}>
        <ChallengeSpecs
          width={400}
          height={400}
          cols={5}
          rows={5}
          example={<PlainTarget />}
        />
      </SingleChallenge>

      <SingleChallenge {...spiral}>
        <ChallengeSpecs
          width={400}
          height={400}
          cols={9}
          rows={9}
          example={<PlainSpiral />}
        />
      </SingleChallenge>

      <SingleChallenge {...brickWall}>
        <ChallengeSpecs
          width={800}
          height={450}
          cols={21}
          rows={10}
          example={<BrickWall />}
        />
      </SingleChallenge>

      <SingleChallenge {...maze}>
        <ChallengeSpecs
          width={800}
          height={800}
          cols={21}
          rows={21}
          example={<Maze />}
        >
          <p>
            You don't need to replicate this exact maze; come up with your own.
            I chose a center finish because I thought that
          </p>
          <p>Some guidance:</p>
          <ol>
            <li>
              Any wall take up at least 1 column & 1 row, so two paths separated
              by a wall is already 3 columns or 3 rows.
            </li>
            <li>
              It's easier to create wrong paths if the maze is larger; more room
              for walls to separate these wrong paths.
            </li>
            <li>
              Once you've chosen your start and end points, a good way to build
              the maze is to first draw the solution path, then the wrong paths,
              and finally the walls. I took a screenshot and used excalidraw to
              plot everything out:{" "}
              <a
                className="styled-link"
                target="_blank"
                rel="noopener"
                href="https://build-layouts-using-css-grid.netlify.app/final-maze-layout.png"
              >
                [maze image]
              </a>
            </li>
          </ol>
        </ChallengeSpecs>
      </SingleChallenge>

      {/*
      <SingleChallenge {...weave}>
        <ChallengeSpecs width={400} height={400} cols={8} rows={8}>
          <Weave />
        </ChallengeSpecs>
      </SingleChallenge> */}

      <Divider />
      <section className="container">
        <article className="text">
          <h2>Layout Challenges</h2>
        </article>
      </section>
    </Page>
  );
}
