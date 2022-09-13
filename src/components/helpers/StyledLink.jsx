import { Link } from "react-router-dom";

export default function StyledLink({ linkURL, linkText }) {
  return (
    <Link
      to={linkURL}
      className={"styled-link"}
      onClick={() => {
        console.log(linkURL);
      }}
    >
      {linkText}
    </Link>
  );
}
