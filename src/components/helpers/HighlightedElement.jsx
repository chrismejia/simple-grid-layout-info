export default function HighlightedElement({ elementLabel, children }) {
  return (
    <fieldset className="example-wrapper">
      <legend>
        <code className="inline">{elementLabel}</code>
      </legend>
      {children}
    </fieldset>
  );
}
