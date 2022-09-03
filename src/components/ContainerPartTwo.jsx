import CodeWrapper from "./helpers/CodeWrapper";
import BreakpointWidths from "./BreakpointWidths";
import HighlightedCode from "./helpers/HighlightedCode";
import HighlightedElement from "./helpers/HighlightedElement";
import ExternalLink from "./helpers/ExternalLink";
import SectionReferences from "./helpers/SectionReferences";
import Footnote from "./helpers/Footnote";
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
        We can do this by defining some reusable CSS variables
        <Footnote refLabel={2} /> for some widths and creating some media
        queries
        <Footnote refLabel={3} />.
      </p>

      <h4 id="breakpoints">Column Widths & Breakpoints</h4>
      <p>
        We want our <code className="inline">.container</code> to be able to
        split into as many as 12 columns, to give us a bunch of layout options.
        We can set three breakpoint widths that are divisible by 12 so our grid
        columns have integer column sizes
        <Footnote refLabel={4} />:
      </p>

      <ul>
        <li>
          <code className="inline">960px</code>
        </li>
        <li>
          <code className="inline">1152px</code>
        </li>
        <li>
          <code className="inline">1344px</code>
        </li>
      </ul>

      <p>
        It is also useful to set up a <code className="inline">gap</code>{" "}
        variable to help manage
      </p>

      <BreakpointWidths />

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

      <h4 style={{ marginBottom: "2rem" }}>Our Container Now</h4>

      <p>
        Don't forget to import the new <code className="inline">index</code> CSS
        file into your App!
      </p>

      <HighlightedElement elementLabel={`<section className="container" />`}>
        <div className="ex-container">
          <p>
            Adjust the width of your browser to see the container change widths.
          </p>
        </div>
      </HighlightedElement>

      <SectionReferences>
        <ExternalLink
          url={"https://bulma.io/documentation/layout/container/"}
          label={"[Bulma] Container docs"}
          description={
            "CSS framework whose container element I shamelessly stole and swear by"
          }
          refLabel={1}
        />
        <ExternalLink
          url={
            "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
          }
          label={"[MDN] CSS Variables"}
          description={"Official reference docs"}
          refLabel={2}
        />
        <ExternalLink
          url={"https://css-tricks.com/a-complete-guide-to-css-media-queries/"}
          label={"[CSS-Tricks] A Complete Guide to CSS Media Queries"}
          description={
            "Great guide with lots of illustrations and codepen examples"
          }
          refLabel={3}
        />
        <ExternalLink
          url={
            "https://bulma.io/documentation/overview/responsiveness/#breakpoints"
          }
          label={"[Bulma] Responsive docs"}
          description={
            "CSS framework whose breakpoint widths I shamelessly stole and swear by"
          }
          refLabel={4}
        />
      </SectionReferences>
    </section>
  );
}
