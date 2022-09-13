import StyledLink from "./StyledLink";

export default function Footnote({ refLabel }) {
  const refLink = `#ref-${refLabel}`;
  return (
    <span>
      <StyledLink isFootnote={true} linkText={refLabel} linkURL={refLink} />
    </span>
  );
}
