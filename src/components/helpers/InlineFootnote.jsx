import { Link } from "react-router-dom";
import scrollToRef from "../../utils/scrollToRef";

export default function InlineFootnote({ refLabel, refLocation }) {
  const refLink = `#ref-${refLabel}`;
  return (
    <span>
      <Link
        className="inline-footnote styled-link"
        to={refLink}
        onClick={() => {
          scrollToRef(refLocation);
        }}
      >
        {` [${refLabel}]`}
      </Link>
    </span>
  );
}
