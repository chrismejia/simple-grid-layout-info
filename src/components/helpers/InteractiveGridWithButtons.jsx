export default function InteractiveGridWithButtons({
  interactiveBtns,
  children,
}) {
  return (
    <article className="grid interactive example">
      <div className="column-controls">{interactiveBtns}</div>
      {children}
    </article>
  );
}
