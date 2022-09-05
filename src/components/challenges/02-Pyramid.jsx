import "./challenges.css";

export default function Pyramid() {
  return (
    <fieldset className="grid pyramid challenge">
      <legend style={{ padding: ".5rem 0" }}>Pyramid.jsx</legend>
      <div className="width">5 WIDE</div>
      <div className="height">3 TALL</div>
      <div className="tip">tip</div>
      <div className="middle">middle</div>
      <div className="base">base</div>
    </fieldset>
  );
}
