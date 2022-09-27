import { useLocation } from "react-router-dom";

import PageNavigation from "./PageNavigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SlidingMenu from "./SlidingMenu";
import Divider from "./Divider";

export default function Page({ children }) {
  /**
   * Determine whether to show site intro section based on current route
   */
  const { pathname } = useLocation();
  const onMainPage = pathname === "/";

  return (
    <>
      <SlidingMenu />
      <SiteHeader isMainPage={onMainPage} />
      <main>
        {children}
        <Divider />
        <PageNavigation />
      </main>
      <SiteFooter />
    </>
  );
}
