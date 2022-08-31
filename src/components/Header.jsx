export default function Header() {
  return (
    <section className="container">
      <h1 className="title centered-text neon-effect">
        Build Layouts using CSS Grid
      </h1>
      <p>You want to build a layout for your pages, but you don't want to:</p>
      <ul>
        <li>install CSS frameworks, no matter how lightweight...</li>
        <li>don't want to spend the time to become a wizened CSS sage</li>
        <li>prefer simplicity, because simple = easy</li>
        <li>bottom text</li>
      </ul>
      <h2>Containers + Grid = Win</h2>
      <p>
        Let's start with the <code className="inline">container</code>.
      </p>
      <p>
        Our container is meant to act as a utility element that allow you to
        center content. Let's set one up.
      </p>

      <div className="code-wrapper">
        <div className="code-label">
          <p>container.css</p>
        </div>
        <div className="explanation">asdgf</div>
        <pre className="example-code">
          {`.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
}`}
        </pre>
      </div>
    </section>
  );
}
