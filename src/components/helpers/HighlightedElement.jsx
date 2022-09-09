export default function HighlightedElement({ elementLabel, children }) {
  return (
    <fieldset className="highlighted-element example">
      <legend>
        <code className="inline">{elementLabel}</code>
      </legend>
      {children}
    </fieldset>
  );
}
