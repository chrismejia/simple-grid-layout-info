export default function TwelveColumnGrid() {
  const labels = [];

  for (let i = 1; i <= 12; i++) {
    labels.push(i);
  }

  return (
    <article className="grid twelve-cols">
      {labels.map((num) => (
        <div>{num}</div>
      ))}
    </article>
  );
}
