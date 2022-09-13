import { HashLink } from "react-router-hash-link";

export default function ChapterLink({ linkText, linkURL }) {
  return (
    <h5 className="chapter-link">
      <HashLink to={`${linkURL}#`} className={"chapter-link"}>
        {linkText}
      </HashLink>
    </h5>
  );
}
