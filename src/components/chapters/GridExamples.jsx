import CodeWrapper from "../helpers/CodeWrapper";
import Divider from "../helpers/Divider";
import HighlightedCode from "../helpers/HighlightedCode";
import ShowExampleCode from "../helpers/ShowExampleCode";

import ThreeColArticle from "../examples/ThreeColArticle";
import RecentPhotos from "../examples/RecentPhotos";
import SuperCentered from "../examples/TrueCenter";

import {
  threeColJSX,
  threeColCSS,
} from "../../code-samples/ex-ThreeColArticle";
import {
  recentPhotosCSS,
  recentPhotosJSX,
} from "../../code-samples/ex-recentPhotos";
import { trueCenterCSS, trueCenterJSX } from "../../code-samples/ex-trueCenter";

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
            codeFilename={"three-col-article.css"}
            codeLang={"css"}
          />
        </CodeWrapper>
      </ShowExampleCode>

      <p>Or like this photo collage.</p>

      <RecentPhotos />

      <ShowExampleCode exampleLabel={"Recent Photo Collage"}>
        <CodeWrapper sections={2}>
          <HighlightedCode
            code={recentPhotosJSX}
            codeFilename={"RecentPhotos.jsx"}
            codeLang={"jsx"}
          />
          <HighlightedCode
            code={recentPhotosCSS}
            codeFilename={"recent-photos.css"}
            codeLang={"css"}
          />
        </CodeWrapper>
      </ShowExampleCode>

      <p>
        Or finally learn to <b>TRULY</b> center something, once and for all,{" "}
        <b>IN JUST ONE LINE.</b>
      </p>

      <SuperCentered />

      <ShowExampleCode exampleLabel={"True Centering"}>
        <CodeWrapper sections={2}>
          <HighlightedCode
            code={trueCenterJSX}
            codeFilename={"TrueCenter.jsx"}
            codeLang={"jsx"}
          />
          <HighlightedCode
            code={trueCenterCSS}
            codeFilename={"true-center.css"}
            codeLang={"css"}
          />
        </CodeWrapper>
      </ShowExampleCode>

      <Divider />
    </section>
  );
}
