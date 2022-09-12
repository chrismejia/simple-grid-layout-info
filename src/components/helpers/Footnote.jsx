import StyledLink from "./StyledLink";

export default function Footnote({ refLabel, refLink }) {
  return (
    <span>
      {" "}
      <StyledLink isFootnote={true} linkText={refLabel} linkUrl={refLink} />
    </span>
  );
}
