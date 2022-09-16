import { menuLinks } from "../../data/menuLinks.data";
import ChapterLink from "./ChapterLink";
import StyledLink from "./StyledLink";

export default function NavSectionLinks() {
  return (
    <div className="grid all-section-links ">
      {menuLinks.map(({ chapter, links }) => (
        <div className="section-links" key={`${chapter.linkURL}`}>
          <ChapterLink {...chapter} />
          <ul>
            {links.map((link) => (
              <li key={link.linkURL}>
                <StyledLink {...link} isSectionNavLink={true} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
