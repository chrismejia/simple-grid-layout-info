import MDNQuote from "../../../helpers/MDNQuote";
import TwelveColumnGrid from "../visuals/TwelveColumnGrid";

import { mdnQuoteData } from "../../../../data/mdnQuote.data";

export default function DontRepeatYourself() {
  return (
    <section className="container">
      <article className="text">
        <h3>
          <del>Don't</del> Repeat Yourself
        </h3>
        <p>
          Remember how we made our{" "}
          <span>
            <a className="styled-link inline-link" href="#breakpoints">
              container widths divisible by 12
            </a>
          </span>
          ? Well, to have 12 columns, we'd need 12{" "}
          <code className="inline">1fr</code>, like so:
        </p>
        <p className="centered-text">
          <code className="inline">
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
            1fr
          </code>
        </p>
        <p>
          This isn't ideal as it's a pain to write that all out, and it's not
          easy to understand how many columns you've got in your grid at a
          glance. Thankfully, you can just{" "}
          <code className="inline">repeat</code> yourself.
        </p>

        <MDNQuote {...mdnQuoteData.repeat} />
        <p>
          Using the <code className="inline">repeat()</code> function, we can
          rewrite the above by setting the{" "}
          <code className="inline">{`<repeat count>`}</code> to 12 and the{" "}
          <code className="inline">{`<tracks>`}</code> to 1fr:
        </p>
        <p className="centered-text">
          <code className="inline">grid-template-columns: repeat(12, 1fr)</code>
        </p>
      </article>

      <TwelveColumnGrid />
    </section>
  );
}
