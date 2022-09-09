import CodeWrapper from "../helpers/CodeWrapper";
import Footnote from "../helpers/Footnote";
import HighlightedCode from "../helpers/HighlightedCode";
import {
  full_width_container_css,
  full_width_container_jsx,
} from "../../code-samples/ex-fullwidthcontainer";

export default function ContainerPartOne() {
  return (
    <section className="container">
      <h2>Containers + Grid = Win</h2>
      <p>
        Let's start with the <code className="inline">container</code>.
      </p>
      <p>
        Our container is meant to act as a utility element that allow you to
        center content
        <Footnote refLabel={1} />. Let's set one up.
      </p>

      <CodeWrapper sections={2}>
        <HighlightedCode
          code={full_width_container_jsx}
          codeFilename={"App.jsx"}
          codeLang={"jsx"}
        />
        <HighlightedCode
          code={full_width_container_css}
          codeFilename={"styles/container.css"}
          codeLang={"css"}
        />
      </CodeWrapper>
    </section>
  );
}
