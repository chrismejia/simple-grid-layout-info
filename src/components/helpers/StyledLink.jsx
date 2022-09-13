import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function StyledLink({ linkURL, linkText, isSectionNavLink }) {
  const RenderComponent = isSectionNavLink ? HashLink : Link;

  return (
    <RenderComponent to={linkURL} className="styled-link">
      {linkText}
    </RenderComponent>
  );
}
