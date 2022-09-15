import { forwardRef } from "react";

/**
 * Creates an ExternalLink that will EVENTUALLY accept a ref as a prop in the actual Component its used in.
 * {@see {@link https://robinvdvleuten.nl/blog/scroll-a-react-component-into-view/ Scroll a React component into view | Scroll to a React element section
}}
 */
export const ExternalLink = forwardRef(
  ({ url, label, description, footnoteNumber }, ref) => {
    return (
      <li id={`ref-${footnoteNumber}`} ref={ref}>
        <a className="styled-link" target="_blank" rel="noopener" href={url}>
          {`${label}:`}
        </a>
        {` ${description}`}
      </li>
    );
  }
);
