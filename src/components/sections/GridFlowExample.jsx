import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";
import FiveColsFourWide from "../examples/FiveColsFourWide";
import {
  four_cols_wide_css,
  four_cols_wide_jsx,
} from "../../code-samples/code-examples";

export default function GridFlowExample() {
  return (
    <>
      <h3>
        What happens when you declared columns, but not rows and then insert
        over the number of rows?
      </h3>

      <CodeWrapper sections={2}>
        <HighlightedCode
          code={four_cols_wide_jsx}
          codeFilename={"GridFlowExample.jsx"}
          codeLang={"jsx"}
        />
        <HighlightedCode
          code={four_cols_wide_css}
          codeFilename={"styles/four-wide.css"}
          codeLang={"css"}
        />
      </CodeWrapper>

      <FiveColsFourWide />
    </>
  );
}
