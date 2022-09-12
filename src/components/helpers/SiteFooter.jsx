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
        <div>
          <ChapterLink linkText={"Intro"} linkURL={"/"} />

          <StyledLink
            linkText={"Three Column Article"}
            linkURL={"/#three-col-article"}
          />
          <StyledLink linkText={"Photo Collage"} linkURL={"/#photo-collage"} />
          <StyledLink
            linkText={"True Centering"}
            linkURL={"/#true-centering"}
          />
        </div>
        <div className="section-links">
          <h5>
            <ChapterLink linkURL="/container" linkText={"Container"} />
          </h5>
          {/* <StyledLink linkText={"Container + Grid"} />
          <StyledLink linkText={"Container + Grid"} />
          <StyledLink linkText={"a"} />
          <StyledLink linkText={"a"} /> */}
        </div>
        <div className="section-links">
          <h5>
            <ChapterLink linkURL="/grid" linkText={"Grid"} />
          </h5>
          <ul>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
          </ul>
        </div>
        <div className="section-links">
          <h5>
            <ChapterLink linkURL="/subgrid" linkText={"Subgrid"} />
          </h5>
          <ul>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
          </ul>
        </div>
        <div className="section-links">
          <h5>
            <ChapterLink linkURL="/layouts" linkText={"Layouts"} />
          </h5>
          <ul>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
          </ul>
        </div>
        <div className="section-links">
          <h5>
            <ChapterLink linkURL="/challenges" linkText={"Challenges"} />
          </h5>
          <ul>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
