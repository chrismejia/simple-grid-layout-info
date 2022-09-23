import InteractiveRowsCols from "../visuals/InteractiveRowsCols";

export default function WorkingWithRows() {
  return (
    <section className="container">
      <article className="text">
        <h4>Working with Rows</h4>
        <p>
          Creating rows works pretty much the same way, just using{" "}
          <code className="inline">grid-template-rows</code>.
        </p>
      </article>

      <InteractiveRowsCols rowOrCol={"row"} />
    </section>
  );
}
