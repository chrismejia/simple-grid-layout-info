import CodeWrapper from "../../../helpers/CodeWrapper";
import Footnote from "../../../helpers/Footnote";
import HighlightedCode from "../../../helpers/HighlightedCode";
import HighlightedElement from "../../../helpers/HighlightedElement";

import BreakpointExamples from "../visuals/BreakpointExamples";

import {
  container_with_media,
  index_css,
} from "../ex-code/varsAndBreakpoints.code";

export default function FixingContainerWidth({ footnoteRefs }) {
  const { footnote2, footnote3, footnote4 } = footnoteRefs;
  return (
    <section className="container">
      <article className="text">
        <h3 id="fixing-the-width">Fixing the Container's Width</h3>
        <p>
          We have a container, but it's currently the full width of the page.
          Instead of setting the width directly on the{" "}
          <code className="inline">.container</code>, let's base the width on
          the current browser width.
        </p>
        <p>
          We can do this by defining some reusable CSS variables
          <Footnote refLabel={2} refLocation={footnote2} /> for some Examples
          and creating some media queries
          <Footnote refLabel={3} refLocation={footnote3} />.
        </p>
        <h4 id="breakpoints">Column Widths & Breakpoints</h4>
        <p>
          We want our <code className="inline">.container</code> to be able to
          split into as many as 12 columns, to give us a bunch of layout
          options. We can set three breakpoint widths that are divisible by 12
          so our grid columns have integer column sizes
          <Footnote refLabel={4} refLocation={footnote4} />:
        </p>
      </article>

      <BreakpointExamples />

      <CodeWrapper sections={2}>
        <HighlightedCode
          code={index_css}
          codeFilename={"styles/index.css"}
          codeLang={"css"}
        />
        <HighlightedCode
          code={container_with_media}
          codeFilename={"styles/container.css"}
          codeLang={"css"}
        />
      </CodeWrapper>

      <article className="text">
        <h3 id="final-container">Our Container Now</h3>
        <p>
          Don't forget to import the new <code className="inline">index</code>{" "}
          CSS file into your App!
        </p>
      </article>

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
