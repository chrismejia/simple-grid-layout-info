import { Link } from "react-router-dom";
import scrollToRef from "../../utils/scrollToRef";

export default function Footnote({ refLabel, refLocation }) {
  const refLink = `#ref-${refLabel}`;
  return (
    <span>
      <Link
        className="footnote styled-link"
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
