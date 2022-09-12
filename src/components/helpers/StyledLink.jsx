import { Link } from "react-router-dom";

export default function StyledLink({ isFootnote, linkURL, linkText }) {
  const styling = isFootnote ? "footnote styled-link" : "styled-link";
  return (
    <Link to={linkURL} className={styling}>
      {linkText}
    </Link>
  );
}
