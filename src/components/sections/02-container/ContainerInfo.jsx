import { useRef } from "react";

import BreakpointExamples from "../BreakpointExamples";
import CodeWrapper from "../../helpers/CodeWrapper";
import Divider from "../../helpers/Divider";
import { ExternalLink } from "../../helpers/ExternalLink";
import Footnote from "../../helpers/Footnote";
import FullWidthExContainer from "./FullWidthExContainer";
import HighlightedCode from "../../helpers/HighlightedCode";
import HighlightedElement from "../../helpers/HighlightedElement";
import SectionReferences from "../../helpers/SectionReferences";
import {
  full_width_container_css,
  full_width_container_jsx,
} from "../../../code-samples/ex-fullwidthcontainer";

import {
  index_css,
  container_with_media,
} from "../../../code-samples/code-examples";

export default function ContainerInfo() {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();

  return (
    <>
      <section className="container">
        <article className="text">
          <h2 id="content-component">
            Container: Your All-Purpose Content Component
          </h2>

          <p>
            Let's start with the <code className="inline">container</code>.
          </p>
          <p>
            Our container is meant to act as a utility element that allow you to
            center content
            <Footnote refLabel={1} refToScrollTo={firstRef} />. Let's set one
            up.
          </p>
        </article>

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
      <FullWidthExContainer />
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
            <Footnote refLabel={2} refToScrollTo={secondRef} /> for some
            Examples and creating some media queries
            <Footnote refLabel={3} refToScrollTo={thirdRef} />.
          </p>
          <h4 id="breakpoints">Column Widths & Breakpoints</h4>
          <p>
            We want our <code className="inline">.container</code> to be able to
            split into as many as 12 columns, to give us a bunch of layout
            options. We can set three breakpoint widths that are divisible by 12
            so our grid columns have integer column sizes
            <Footnote refLabel={4} refToScrollTo={fourthRef} />:
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
              Adjust the width of your browser to see the container change
              widths.
            </p>
          </div>
        </HighlightedElement>

        <SectionReferences>
          <ExternalLink
            ref={firstRef}
            url={"https://bulma.io/documentation/layout/container/"}
            label={"[Bulma] Container docs"}
            description={
              "CSS framework whose container element I shamelessly stole and swear by"
            }
            refNum={1}
          />
          <ExternalLink
            ref={secondRef}
            url={
              "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
            }
            label={"[MDN] CSS Variables"}
            description={"Official reference docs"}
            refNum={2}
          />
          <ExternalLink
            ref={thirdRef}
            url={
              "https://css-tricks.com/a-complete-guide-to-css-media-queries/"
            }
            label={"[CSS-Tricks] A Complete Guide to CSS Media Queries"}
            description={
              "Great guide with lots of illustrations and codepen examples"
            }
            refNum={3}
          />
          <ExternalLink
            ref={fourthRef}
            url={
              "https://bulma.io/documentation/overview/responsiveness/#breakpoints"
            }
            label={"[Bulma] Responsive docs"}
            description={
              "CSS framework whose breakpoint widths I shamelessly stole, and expanded"
            }
            refNum={4}
          />
        </SectionReferences>
        <Divider />
      </section>
    </>
  );
}
