import HighlightedElement from "../../helpers/HighlightedElement";

export default function FullWidthExContainer() {
  return (
    <HighlightedElement elementLabel={`<section className="container">`}>
      <div className="ex-container centered-text">
        <p>This is our container.</p>
        <p>It currently extends the full width of your browser window.</p>
      </div>
    </HighlightedElement>
  );
}
