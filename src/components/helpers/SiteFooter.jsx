import { Link } from "react-router-dom";
import ChapterLink from "./ChapterLink";
import StyledLink from "./StyledLink";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="grid site-nav container">
        <div className="grid nav-info">
          <h4>
            Build Layouts
            <br />
            Using CSS Grid
          </h4>
          <div>link</div>
        </div>

        <div className="grid all-section-links">
          <div className="section-links">
            <ChapterLink linkText={"Intro"} linkURL={"/"} />
            <StyledLink
              linkText={"Three Column Article"}
              linkURL={"/#three-col-article"}
            />
            <StyledLink
              linkText={"Photo Collage"}
              linkURL={"/#photo-collage"}
            />
            <StyledLink
              linkText={"True Centering"}
              linkURL={"/#true-centering"}
            />
          </div>
          <div className="section-links">
            <ChapterLink linkURL="/container" linkText={"Container"} />
            {/* <StyledLink linkText={"Container + Grid"} />
            <StyledLink linkText={"Container + Grid"} />
            <StyledLink linkText={"a"} />
            <StyledLink linkText={"a"} /> */}
          </div>
          <div className="section-links">
            <ChapterLink linkURL="/grid" linkText={"Grid"} />
            <ul>
              <li className="styled-link">link</li>
              <li className="styled-link">link</li>
              <li className="styled-link">link</li>
            </ul>
          </div>
          <div className="section-links">
            <ChapterLink linkURL="/subgrid" linkText={"Subgrid"} />
            <ul>
              <li className="styled-link">link</li>
              <li className="styled-link">link</li>
              <li className="styled-link">link</li>
            </ul>
          </div>
          <div className="section-links">
            <ChapterLink linkURL="/layouts" linkText={"Layouts"} />
            <ul>
              <li className="styled-link">link</li>
              <li className="styled-link">link</li>
              <li className="styled-link">link</li>
            </ul>
          </div>
          <div className="section-links">
            <ChapterLink linkURL="/challenges" linkText={"Challenges"} />
            <ul>
              <li className="styled-link">link</li>
              <li className="styled-link">link</li>
              <li className="styled-link">link</li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}
