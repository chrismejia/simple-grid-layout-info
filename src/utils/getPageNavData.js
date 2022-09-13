import { pageNavFlow } from "../data/pageNavFlow.data";

export default function getPageNavData(path) {
  if (path === "/") {
    return pageNavFlow.base;
  } else {
    // Path names come in with leading slash; remove it, then use as key value
    const noSlashPath = path.slice(1);
    return pageNavFlow[noSlashPath];
  }
}
