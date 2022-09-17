import { menuLinks } from "../../data/menuLinks.data";
import { useLocation } from "react-router-dom";
import ChapterLink from "./ChapterLink";
import StyledLink from "./StyledLink";

export default function SlidingMenuLinks() {
  const { pathname } = useLocation();

  return (
    <div className="grid slide-menu">
      {menuLinks.map(({ chapter, links }) => (
        <div className="section-links" key={`${chapter.linkURL}`}>
          <ChapterLink {...chapter} />
          <ul>
            {links.map((link) => (
              <li key={link.linkURL}>
                <StyledLink {...link} />
              </li>
            ))}
          </ul>
          {/* {pathname === chapter.linkURL && (
            <ul>
              {links.map((link) => (
                <li key={link.linkURL}>
                  <StyledLink {...link} isSectionNavLink={true} />
                </li>
              ))}
            </ul>
          )} */}
        </div>
      ))}
    </div>
  );
}
