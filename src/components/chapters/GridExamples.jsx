import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";
import ShowExampleCode from "../helpers/ShowExampleCode";

import ThreeColArticle from "../examples/ThreeColArticle";
import RecentPhotos from "../examples/RecentPhotos";
import SuperCentered from "../examples/SuperCentered";

import {
  threeColJSX,
  threeColCSS,
} from "../../code-samples/ex-ThreeColArticle";

export default function GridExamples() {
  return (
    <section className="container">
      <h2>What Can You Build With The Grid?</h2>
      <p>Stuff like this article.</p>
      <ThreeColArticle />

      <ShowExampleCode exampleLabel={"Three Column Article"}>
        <CodeWrapper sections={2}>
          <HighlightedCode
            code={threeColJSX}
            codeFilename={"ThreeColArticle.jsx"}
            codeLang={"jsx"}
          />
          <HighlightedCode
            code={threeColCSS}
            codeFilename={"styles/three-col-article.css"}
            codeLang={"css"}
          />
        </CodeWrapper>
      </ShowExampleCode>

      <p>Or like this photo collage.</p>

      <RecentPhotos />
      <p>
        Or finally learn to <b>TRULY</b> center something, once and for all,{" "}
        <b>IN JUST ONE LINE.</b>
      </p>
      <SuperCentered />
    </section>
  );
}
