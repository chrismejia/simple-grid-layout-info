import CodeWrapper from "./helpers/CodeWrapper";
import HighlightedCode from "./helpers/HighlightedCode";
import HighlightedElement from "./helpers/HighlightedElement";
import ExternalLink from "./helpers/ExternalLink";
import SectionReferences from "./helpers/SectionReferences";
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

      <SectionReferences sectionTitle={"More About This Section's Topics"}>
        <ul>
          <li>
            <ExternalLink
              linkUrl={
                "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
              }
              linkText={"[MDN] CSS Variables"}
            />
            {" - Official reference doc"}
          </li>
          <li>
            <ExternalLink
              linkUrl={
                "https://css-tricks.com/a-complete-guide-to-css-media-queries/"
              }
              linkText={"[CSS-Tricks] A Complete Guide to CSS Media Queries"}
            />
            {" - Great guide with lots of illustrations and codepen examples"}
          </li>
          <li>
            <ExternalLink
              linkUrl={"https://bulma.io/documentation/layout/container/"}
              linkText={"[Bulma] Container docs"}
            />
            {
              " - CSS framework element whose breakpoints I shamelessly stole and swear by"
            }
          </li>
        </ul>
      </SectionReferences>
    </section>
  );
}
