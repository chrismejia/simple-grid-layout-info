import CodeWrapper from "./helpers/CodeWrapper";
import Footnote from "./helpers/Footnote";
import GridExamples from "./GridExamples";
import HighlightedCode from "./helpers/HighlightedCode";
import { container_css, container_jsx } from "../code-examples";

export default function ContainerPartOne() {
  return (
    <section className="container">
      <h1 className="title centered-text neon-effect">
        Build Layouts using CSS Grid
      </h1>
      <p>You want to build a layout for your pages, but you don't want to:</p>

      <ul>
        <li>install CSS frameworks, no matter how lightweight</li>
        <li>don't want to spend the time to become a wizened CSS sage</li>
        <li>prefer simplicity, because simple = easy</li>
        <li>bottom text</li>
      </ul>

      <fieldset style={{ display: "inline" }}>
        <legend>The Goal</legend>
        <b>
          Build a container that holds a grid to build layouts using columns,
          spans, and more.
        </b>
      </fieldset>

      <GridExamples />

      <h2>Containers + Grid = Win</h2>
      <p>
        Let's start with the <code className="inline">container</code>.
      </p>
      <p>
        Our container is meant to act as a utility element that allow you to
        center content
        <Footnote refNum={1} />. Let's set one up.
      </p>

      <CodeWrapper sections={2}>
        <HighlightedCode
          code={container_jsx}
          codeFilename={"App.jsx"}
          codeLang={"jsx"}
        />
        <HighlightedCode
          code={container_css}
          codeFilename={"styles/container.css"}
          codeLang={"css"}
        />
      </CodeWrapper>
    </section>
  );
}
