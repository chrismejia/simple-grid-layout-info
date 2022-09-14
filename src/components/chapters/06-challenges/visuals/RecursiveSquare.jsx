export default function RecursiveSquare({ children }) {
  return (
    <article className="grid recursive-square example">
      <div className="filled"></div>
      <div className="filled"></div>
      <div className="filled"></div>

      <div className="grid">{children}</div>
    </article>
  );
}
