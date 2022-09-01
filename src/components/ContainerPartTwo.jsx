export default function ContainerPartTwo() {
  return (
    <section className="container">
      <h3>Fixing the Container's Width</h3>
      <p>
        We have a container, but it's currently the full width of the page.
        Instead of setting the width directly on the{" "}
        <code className="inline">.container</code>, let's base the width of the{" "}
        <code className="inline">.container</code> on the current browser width.
      </p>
      <p>
        We can do this by defining some reusable variables for some widths and
        creating some media queries.
      </p>
    </section>
  );
}
