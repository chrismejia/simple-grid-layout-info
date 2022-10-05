import ChallengeSpecs from "../components/helpers/ChallengeSpecs";
import CodeWrapper from "../components/helpers/CodeWrapper";
import Divider from "../components/helpers/Divider";
import ExternalLink from "../components/helpers/ExternalLink";
import HighlightedCode from "../components/helpers/HighlightedCode";
import SingleChallenge from "../components/helpers/SingleChallenge";
import Page from "../components/helpers/Page";

import TicTacToe from "../components/chapters/06-challenges/visuals/C1-TicTacToe";
import Staircase from "../components/chapters/06-challenges/visuals/C2-Staircase";
import Pyramid from "../components/chapters/06-challenges/visuals/C3-Pyramid";
import PlainTarget from "../components/chapters/06-challenges/visuals/PlainTarget";
import PlainSpiral from "../components/chapters/06-challenges/visuals/PlainSpiral";
import BrickWall from "../components/chapters/06-challenges/visuals/C6-BrickWall";
import PlainKnot from "../components/chapters/06-challenges/visuals/C7-PlainKnot";
import InterlockingSquares from "../components/chapters/06-challenges/visuals/C8-InterlockingSquares";
import Tile from "../components/chapters/06-challenges/visuals/C9-Tile";
import TiledFloor from "../components/chapters/06-challenges/visuals/C9-TiledFloor";
import Maze from "../components/chapters/06-challenges/visuals/C9-Maze";
import Weave from "../components/chapters/06-challenges/visuals/C10-Weave";

import { allChallengeDetails } from "../data/challengeDetails.data";

import {
  wrappedSingleTile_jsx,
  wrappedSingleTile_css,
} from "../components/chapters/06-challenges/ex-code/wrappedSingleTile.code";

export default function Challenges() {
  const {
    tic_tac_toe,
    staircase,
    pyramid,
    target,
    spiral,
    brickWall,
    squareKnot,
    interlockingSquares,
    tile,
    maze,
    weave,
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

      <SingleChallenge {...squareKnot}>
        <ChallengeSpecs
          width={700}
          height={700}
          cols={7}
          rows={7}
          example={<PlainKnot />}
        />
      </SingleChallenge>

      <SingleChallenge {...interlockingSquares}>
        <ChallengeSpecs
          width={600}
          height={600}
          cols={8}
          rows={8}
          gap={"1rem"}
          example={<InterlockingSquares />}
        >
          <p>
            You may choose to use the colors of the example below or pick your
            own colors.
          </p>
          <p>
            If you pick your own, be sure that the contrast with each other to
            make the square pop. Tools like{" "}
            <ExternalLink
              externalURL={"https://coolors.co/"}
              linkLabel={"Coolors.co"}
            />{" "}
            are fantastic for generating and modifying color palettes.
          </p>
          <ul>
            <li>
              <ExternalLink
                externalURL={"https://coolors.co/a3a762-ffe1a8-e26d5c-a0ccda"}
                linkLabel={"Color palette I used."}
              />
            </li>
          </ul>
        </ChallengeSpecs>
      </SingleChallenge>

      <SingleChallenge {...tile}>
        <ChallengeSpecs
          width={550}
          height={550}
          cols={1}
          rows={1}
          example={
            <div className="single-tile-wrapper">
              <Tile />
            </div>
          }
        >
          <p>You do not need to copy this tile design.</p>
          <p>
            The key thing to note here is that the finished{" "}
            <code className="inline">{"<Tile />"}</code> component has no
            implicit height and width; it'll be inherited from its parent
            container.
          </p>

          <p>
            While you're developing your{" "}
            <code className="inline">{"<Tile />"}</code>, you should give it a
            height and width in order to see your tile. Once your tile is
            complete, remove its <code className="inline">height</code> and{" "}
            <code className="inline">width</code> values.
          </p>

          <CodeWrapper sections={2}>
            <HighlightedCode
              code={wrappedSingleTile_jsx}
              codeLang={"jsx"}
              codeFilename={"WrappedSingleTile.jsx"}
            />
            <HighlightedCode
              code={wrappedSingleTile_css}
              codeLang={"css"}
              codeFilename={"wrapped-single-tile.css"}
            />
          </CodeWrapper>
        </ChallengeSpecs>
        <hr />
        <ChallengeSpecs
          width={550}
          height={550}
          cols={11}
          rows={11}
          example={<TiledFloor />}
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
            I chose a center finish because I thought it was cool.
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
              <ExternalLink
                externalURL={
                  "https://build-layouts-using-css-grid.netlify.app/final-maze-layout.png"
                }
                linkLabel={"[maze image]"}
              />
            </li>
          </ol>
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
