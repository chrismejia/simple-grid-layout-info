import CodeWrapper from "../../helpers/CodeWrapper";
import Divider from "../../helpers/Divider";
import HighlightedCode from "../../helpers/HighlightedCode";
import ShowExampleCode from "../../helpers/ShowExampleCode";

import ThreeColArticle from "./visuals/ThreeColArticle";
import RecentPhotos from "./visuals/RecentPhotos";
import SuperCentered from "./visuals/SuperCentered";

import { threeColJSX, threeColCSS } from "./ex-code/threeColumnArticle.code";
import { recentPhotosCSS, recentPhotosJSX } from "./ex-code/recentPhotos.code";
import { trueCenterCSS, trueCenterJSX } from "./ex-code/trueCenter.code";

export default function GridExamples() {
  return (
    <section className="container">
      <article className="text">
        <h2>What Can You Build With The Grid?</h2>
        <p>Stuff like this article.</p>
      </article>

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

      <article className="text">
        <p>Or like this photo collage.</p>
      </article>

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

      <article className="text">
        <p>
          Or finally learn to <b>TRULY</b> center something, once and for all,{" "}
          <b>IN JUST ONE LINE.</b>
        </p>
      </article>

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

      <article className="text">
        <p>
          Create all this and more with a{" "}
          <code className="inline">.container</code> element and a CSS Grid.
        </p>
      </article>
      <Divider />
    </section>
  );
}
