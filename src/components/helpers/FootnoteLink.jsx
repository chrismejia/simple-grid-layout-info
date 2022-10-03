import { forwardRef } from "react";
import ExternalLink from "./ExternalLink";

/**
 * Creates an FootnoteLink that will EVENTUALLY accept a ref as a prop in the actual Component its used in.
 * {@see {@link https://robinvdvleuten.nl/blog/scroll-a-react-component-into-view/ Scroll a React component into view | Scroll to a React element section
}}
 */
export const FootnoteLink = forwardRef(
  ({ url, label, description, footnoteNumber }, ref) => {
    const footnoteLinkText = `${label}:`;

    return (
      <li id={`ref-${footnoteNumber}`} ref={ref}>
        <ExternalLink externalURL={url} linkLabel={footnoteLinkText} />
        {` ${description}`}
      </li>
    );
  }
);
