import GridExamples from "./GridExamples";
import CodeWrapper from "./helpers/CodeWrapper";
import HighlightedCode from "./helpers/HighlightedCode";
import { container_css, container_jsx } from "../code-examples";

export default function ContainerPartOne() {
  return (
    <section className="container">
      <fieldset>
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
        center content. Let's set one up.
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
