import { pageNavFlow } from "../data/pageNavFlow.data";

export default function getPageNavData(path) {
  if (path === "/") {
    return pageNavFlow.base;
  } else {
    return pageNavFlow[path];
  }
}
