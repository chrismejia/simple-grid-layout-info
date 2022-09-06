import AnswerPageBase from "../../components/helpers/AnswerPageBase";

import CodeWrapper from "../../components/helpers/CodeWrapper";
import HightlightedCode from "../../components/helpers/HighlightedCode";
import HighlightedElement from "../../components/helpers/HighlightedElement";

import RegularKnot from "./knots/RegularKnot";

export default function PageSquareKnot() {
  return (
    <AnswerPageBase pageName={"Square Knot"}>
      <h2>Square Knot</h2>
      <article>
        <h3>Regular Square Knot</h3>
        <CodeWrapper sections={2}></CodeWrapper>
        <HighlightedElement elementLabel={"RegularKnot.jsx"}>
          <RegularKnot />
        </HighlightedElement>
      </article>
    </AnswerPageBase>
  );
}
