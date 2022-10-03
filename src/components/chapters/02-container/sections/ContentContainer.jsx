import CodeWrapper from "../../../helpers/CodeWrapper";
import InlineFootnote from "../../../helpers/InlineFootnote";
import HighlightedCode from "../../../helpers/HighlightedCode";

import {
  full_width_container_css,
  full_width_container_jsx,
} from "../ex-code/fullWidthContainer.code";

export default function ContentContainer({ footnoteRefs }) {
  const { footnote1 } = footnoteRefs;

  return (
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
          <InlineFootnote refLabel={1} refLocation={footnote1} />. Let's set one
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
  );
}
