import StyledLink from "./StyledLink";

export default function PageNavigation({
  backText,
  backURL,
  nextText,
  nextURL,
}) {
  return (
    <nav className="grid page-to-page">
      <div>
        {backURL && (
          <>
            <div className="centered-text page-nav-label">PREVIOUS</div>
            &#10096; <StyledLink linkText={backText} linkURL={backURL} />
          </>
        )}
      </div>
      <div>
        {nextURL && (
          <>
            <div className="centered-text page-nav-label">NEXT</div>
            <StyledLink linkText={nextText} linkURL={nextURL} /> &#10097;
          </>
        )}
      </div>
    </nav>
  );
}
