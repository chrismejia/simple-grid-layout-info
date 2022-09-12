import { NavLink, useLocation } from "react-router-dom";

export default function ChapterLink({ linkText, linkURL }) {
  // const { pathname } = useLocation();

  return (
    <h5 className="chapter-link">
      <NavLink
        to={linkURL}
        className={({ isActive }) =>
          isActive ? "current-chapter" : "chapter-link"
        }
      >
        {linkText}
      </NavLink>
    </h5>
  );
}
