import BaseRowsColumns from "../visuals/BaseRowsColumns";
import CodeWrapper from "../../../helpers/CodeWrapper";
import HighlightedCode from "../../../helpers/HighlightedCode";
import MDNQuote from "../../../helpers/MDNQuote";
import ShowExampleCode from "../../../helpers/ShowExampleCode";

import {
  basicRowsCols_jsx,
  basicRowsCols_css,
} from "../ex-code/basicRowsCols.code";
import { mdnQuoteData } from "../../../../data/mdnQuote.data";

export default function PuttingItAllTogether() {
  return (
    <section className="container">
      <article className="text">
        <h3 id="put-it-all-together">Putting It All Together</h3>
        <p>
          If you want both columns and rows, you can declare both{" "}
          <code className="inline">grid-template-columns</code> and{" "}
          <code className="inline">grid-template-rows</code>.
        </p>

        <p>
          Let's say we want 3 columns and 3 rows; that's 9 grid areas available.
          Thanks to the <code className="inline">grid-auto-flow</code> property,
          we don't have to worry about <b>HOW</b> to fill the next row or
          column.
        </p>

        <MDNQuote {...mdnQuoteData.grid_auto_flow} />

        <p>
          Here, <code className="inline">grid-auto-flow</code> defaults to{" "}
          <code className="inline">'row'</code>, so the grid will organize its
          fourth child,{" "}
          <code className="inline">{`<div className="filled"> 4 </div>`}</code>,
          in the second row of the first column, since all columns on the first
          row have been filled.
        </p>
      </article>

      <BaseRowsColumns isMixed={false} />

      <ShowExampleCode exampleLabel={"Even Rows & Cols"}>
        <CodeWrapper sections={2}>
          <HighlightedCode
            code={basicRowsCols_jsx}
            codeFilename={"EvenRowsColumns.jsx"}
            codeLang={"jsx"}
          />
          <HighlightedCode
            code={basicRowsCols_css}
            codeFilename={"even-rows-cols.css"}
            codeLang={"css"}
          />
        </CodeWrapper>
      </ShowExampleCode>
    </section>
  );
}
