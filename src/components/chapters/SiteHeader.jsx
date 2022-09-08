import Divider from "../helpers/Divider";

export default function SiteHeader() {
  return (
    <section className="container">
      <h1 className="title centered-text neon-effect">
        Build Layouts Using CSS Grid
      </h1>
      <p>You want to build a layout for your pages, but you don't want to:</p>

      <ul>
        <li>install CSS frameworks, no matter how lightweight</li>
        <li>don't want to spend the time to become a wizened CSS sage</li>
        <li>prefer simplicity, because simple = easy</li>
        <li>bottom text</li>
      </ul>

      <fieldset className="goal">
        <legend>The Goal</legend>
        <b>
          Build a container that holds a grid to build layouts using rows,
          columns, and more.
        </b>
      </fieldset>
      <Divider />
    </section>
  );
}
