import { useLocation } from "react-router-dom";
import StyledLink from "./StyledLink";
import getPageNavData from "../../utils/getPageNavData";
import scrollToTop from "../../utils/scrollToTop";

export default function PageNavigation() {
  const { pathname } = useLocation();
  const { back, next } = getPageNavData(pathname);

  return (
    <nav className="grid container page-to-page">
      <div>
        {back && (
          <>
            <div className="centered-text page-nav-label">PREVIOUS</div>
            <StyledLink
              {...back}
              clickFunc={scrollToTop}
              isSectionNavLink={true}
            />
          </>
        )}
      </div>
      <div>
        {next && (
          <>
            <div className="centered-text page-nav-label">NEXT</div>
            <StyledLink
              {...next}
              clickFunc={scrollToTop}
              isSectionNavLink={true}
            />
          </>
        )}
      </div>
    </nav>
  );
}
