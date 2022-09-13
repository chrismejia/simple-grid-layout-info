import { Link } from "react-router-dom";
import scrollToRef from "../../utils/scrollToRef";

export default function Footnote({ refLabel, refToScrollTo }) {
  const refLink = `#ref-${refLabel}`;
  return (
    <span>
      {" "}
      <Link
        className="footnote styled-link"
        to={refLink}
        onClick={() => {
          scrollToRef(refToScrollTo);
        }}
      >
        {`[${refLabel}]`}
      </Link>
    </span>
  );
}
