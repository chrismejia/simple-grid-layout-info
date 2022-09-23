export default function InteractiveGridWithButtons({ children, gridExample }) {
  return (
    <article className="grid interactive example">
      <div className="column-controls">{children}</div>
      {gridExample}
    </article>
  );
}
