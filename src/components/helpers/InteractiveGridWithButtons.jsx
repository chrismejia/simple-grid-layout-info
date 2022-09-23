export default function InteractiveGridWithButtons({
  interactiveButtons,
  gridExample,
}) {
  return (
    <article className="grid interactive example">
      <div className="column-controls">{interactiveButtons}</div>
      {gridExample}
    </article>
  );
}
