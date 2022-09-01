import HighlightedCode from "./helpers/HighlightedCode";
import CodeWrapper from "./helpers/CodeWrapper";
import { container_css, container_jsx } from "../code-examples";

export default function ContainerIntro() {
  return (
    <section className="container">
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
          preClass={"example-code"}
        />
        <HighlightedCode
          code={container_css}
          codeFilename={"styles/container.css"}
          codeLang={"css"}
          preClass={"example-code"}
        />
      </CodeWrapper>
    </section>
  );
}
