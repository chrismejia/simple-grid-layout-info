import CodeWrapper from "./helpers/CodeWrapper";
import HighlightedCode from "./helpers/HighlightedCode";
import HighlightedElement from "./helpers/HighlightedElement";
import { index_css, container_with_media } from "../code-examples";

export default function ContainerPartTwo() {
  return (
    <section className="container">
      <h3>Fixing the Container's Width</h3>
      <p>
        We have a container, but it's currently the full width of the page.
        Instead of setting the width directly on the{" "}
        <code className="inline">.container</code>, let's base the width on the
        current browser width.
      </p>
      <p>
        We can do this by defining some reusable variables for some widths and
        creating some media queries.
      </p>

      <h4>The Width Variables</h4>
      <p>
        We want our <code className="inline">.container</code> to be able to
        split into as many as 12 columns, to give us a bunch of layout options.
        We can set some breakpoint widths that are divisible by 12 so our
        columns have even column sizes.
      </p>

      <CodeWrapper sections={2}>
        <HighlightedCode
          code={index_css}
          codeFilename={"styles/index.css"}
          codeLang={"css"}
          preClass={"example-code"}
        />
        <HighlightedCode
          code={container_with_media}
          codeFilename={"styles/container.css"}
          codeLang={"css"}
          preClass={"example-code"}
        />
      </CodeWrapper>

      <h4 style={{ marginBottom: "2rem" }} href={"#asd"}>
        Our Container Now
      </h4>
      <HighlightedElement elementLabel={`<section className="container" />`}>
        <div className="ex-container">
          <p>
            Adjust the width of your browser to see the container change widths.
          </p>
        </div>
      </HighlightedElement>
    </section>
  );
}
