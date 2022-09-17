import { useLocation } from "react-router-dom";

export default function getCurrentRoute() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return "base";
  } else {
    // remove leading slash from pathname
    return pathname.slice(1);
  }
}
