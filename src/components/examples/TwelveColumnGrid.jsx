export default function TwelveColumnGrid() {
  const labels = [];

  for (let i = 1; i <= 12; i++) {
    labels.push(i);
  }

  return (
    <article className="grid outer-border twelve-cols generic-ex">
      {labels.map((num) => (
        <div key={num}>{num}</div>
      ))}
    </article>
  );
}
