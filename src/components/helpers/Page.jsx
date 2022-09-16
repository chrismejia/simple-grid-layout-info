import { useLocation } from "react-router-dom";

import PageNavigation from "./PageNavigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Page({ children }) {
  /**
   * Determine whether to show site intro section based on current route
   */
  const { pathname } = useLocation();
  const onMainPage = pathname === "/";

  return (
    <>
      <main>
        <SiteHeader isMainPage={onMainPage} />
        {children}
      </main>
      <PageNavigation />
      <SiteFooter />
    </>
  );
}
