import HighlightedCode from "./helpers/HighlightedCode";
import { code_container } from "../code-examples";

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

      <div className="code-wrapper">
        <div className="explanation">Create the class .container</div>
        <div className="code-label">
          <p>container.css</p>
        </div>

        <HighlightedCode
          code={code_container}
          codeLang={"css"}
          preClass={"example-code"}
        />
      </div>

      <fieldset className="outer-wrapper">
        <legend>
          <code className="inline">{`<section className="container"/>`}</code>
        </legend>
        <div className="container">p</div>
      </fieldset>
    </section>
  );
}
