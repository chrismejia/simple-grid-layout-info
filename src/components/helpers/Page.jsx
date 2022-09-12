import { useLocation } from "react-router-dom";

import SiteFooter from "./SiteFooter";
import SiteHeader from "../sections/SiteHeader";

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
      <SiteFooter />
    </>
  );
}
