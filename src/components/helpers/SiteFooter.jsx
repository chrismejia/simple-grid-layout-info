import { Link } from "react-router-dom";
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
          <h5>
            <Link to="/">Intro</Link>
          </h5>
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
            <Link to="/content-container">The Container</Link>
          </h5>
          {/* <StyledLink linkText={"Container + Grid"} />
          <StyledLink linkText={"Container + Grid"} />
          <StyledLink linkText={"a"} />
          <StyledLink linkText={"a"} /> */}
        </div>
        <div className="section-links">
          <h5>The Grid</h5>
          <ul>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
          </ul>
        </div>
        <div className="section-links">
          <h5>Subgrids + More</h5>
          <ul>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
            <li className="styled-link">link</li>
          </ul>
        </div>
        <div className="section-links">
          <h5>Challenges</h5>
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
