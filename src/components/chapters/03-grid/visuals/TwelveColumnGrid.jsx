export default function TwelveColumnGrid() {
  const labels = [];

  for (let i = 1; i <= 12; i++) {
    labels.push(i);
  }

  return (
    <article className="grid outer-border twelve-cols">
      {labels.map((num) => (
        <div className="filled" key={num}>
          {num}
        </div>
      ))}
    </article>
  );
}
