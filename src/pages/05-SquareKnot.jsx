import { regularKnotJSX, regularKnotCSS } from "../code-samples/challenge-code";
import AnswerPageBase from "../components/helpers/AnswerPageBase";

import CodeWrapper from "../components/helpers/CodeWrapper";
import HighlightedCode from "../components/helpers/HighlightedCode";
import HighlightedElement from "../components/helpers/HighlightedElement";

import RegularKnot from "../components/challenges/knots/RegularKnot";

export default function PageSquareKnot() {
  return (
    <AnswerPageBase pageName={"Square Knot"}>
      <h2>Square Knot</h2>
      <article>
        <h3>Regular Square Knot</h3>
        <CodeWrapper sections={2}>
          <HighlightedCode
            code={regularKnotJSX}
            codeFilename={"RegularKnot.jsx"}
            codeLang={"jsx"}
          />
          <HighlightedCode
            code={regularKnotCSS}
            codeFilename={"regular-knot.css"}
            codeLang={"css"}
          />
        </CodeWrapper>
        <HighlightedElement elementLabel={"RegularKnot.jsx"}>
          <RegularKnot />
        </HighlightedElement>
      </article>
    </AnswerPageBase>
  );
}
