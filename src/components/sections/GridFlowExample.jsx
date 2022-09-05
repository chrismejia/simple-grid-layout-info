import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";
import { four_cols_wide_css, four_cols_wide_jsx } from "../../code-examples";

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

      <div className="grid four-cols-wide">
        <div className="ex-col">1</div>
        <div className="ex-col">2</div>
        <div className="ex-col">3</div>
        <div className="ex-col">4</div>
        <div className="ex-col">5</div>
      </div>
    </>
  );
}
