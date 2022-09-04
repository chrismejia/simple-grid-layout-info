export default function TwelveColumnGrid() {
  return (
    <article className="grid twelve-cols">
      {Array(12).map((_, idx) => (
        <div key={idx}>{idx + 1}asd</div>
      ))}
    </article>
  );
}
