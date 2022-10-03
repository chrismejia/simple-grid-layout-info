import { useRef } from "react";

import ContentContainer from "../components/chapters/02-container/sections/ContentContainer";
import FixingContainerWidth from "../components/chapters/02-container/sections/FixingContainerWidth";

import Divider from "../components/helpers/Divider";
import { FootnoteLink } from "../components/helpers/FootnoteLink";

import Page from "../components/helpers/Page";
import SectionReferences from "../components/helpers/SectionReferences";

import FullWidthExContainer from "../components/chapters/02-container/visuals/FullWidthExContainer";

export default function Container() {
  const footnote1 = useRef();
  const footnote2 = useRef();
  const footnote3 = useRef();
  const footnote4 = useRef();

  return (
    <Page>
      <ContentContainer footnoteRefs={{ footnote1 }} />
      <FullWidthExContainer />
      <FixingContainerWidth
        footnoteRefs={{ footnote2, footnote3, footnote4 }}
      />

      <SectionReferences>
        <FootnoteLink
          ref={footnote1}
          footnoteNumber={1}
          url={"https://bulma.io/documentation/layout/container/"}
          label={"[Bulma] Container docs"}
          description={
            "CSS framework whose container element I shamelessly stole and swear by"
          }
        />
        <FootnoteLink
          ref={footnote2}
          footnoteNumber={2}
          url={
            "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
          }
          label={"[MDN] CSS Variables"}
          description={"Official reference docs"}
        />
        <FootnoteLink
          ref={footnote3}
          footnoteNumber={3}
          url={"https://css-tricks.com/a-complete-guide-to-css-media-queries/"}
          label={"[CSS-Tricks] A Complete Guide to CSS Media Queries"}
          description={
            "Great guide with lots of illustrations and codepen examples"
          }
        />
        <FootnoteLink
          ref={footnote4}
          footnoteNumber={4}
          url={
            "https://bulma.io/documentation/overview/responsiveness/#breakpoints"
          }
          label={"[Bulma] Responsive docs"}
          description={
            "CSS framework whose breakpoint widths I shamelessly stole, and expanded"
          }
        />
      </SectionReferences>
    </Page>
  );
}
