import BaseRowsColumns from "./BaseRowsColumns";
import CodeWrapper from "../../../helpers/CodeWrapper";
import HighlightedCode from "../../../helpers/HighlightedCode";
import ShowExampleCode from "../../../helpers/ShowExampleCode";

import {
  mixedRowsCols_jsx,
  mixedRowsCols_css,
} from "../ex-code/mixedRowsCols.code";

export default function RowsColsAllSizes() {
  return (
    <section className="container">
      <article className="text">
        <h4>Rows & Columns of All Sizes</h4>
        <p>
          Using <code className="inline">fr</code> values makes it easy to
          assign column and row sizes relative to the grid's area. You can also
          define different sizes for each row, or column, independently.
        </p>
      </article>

      <BaseRowsColumns isMixed={true} />

      <ShowExampleCode exampleLabel={"Mixed Rows & Cols"}>
        <CodeWrapper sections={2}>
          <HighlightedCode
            code={mixedRowsCols_jsx}
            codeFilename={"MixedRowsColumns.jsx"}
            codeLang={"jsx"}
          />
          <HighlightedCode
            code={mixedRowsCols_css}
            codeFilename={"mixed-rows-cols.css"}
            codeLang={"css"}
          />
        </CodeWrapper>
      </ShowExampleCode>
    </section>
  );
}
