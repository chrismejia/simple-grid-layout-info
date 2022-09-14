import NavSectionLinks from "./NavSectionLinks";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="grid site-nav container">
        <div className="grid nav-info">
          <h3 className="neon-effect">
            Build Layouts
            <br />
            Using CSS Grid
          </h3>
          <div>link</div>
        </div>

        <NavSectionLinks />
      </nav>
    </footer>
  );
}
