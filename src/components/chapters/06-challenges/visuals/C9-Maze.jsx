export default function Maze() {
  return (
    <article className="grid maze">
      <div className="enter-left"></div>
      <div className="enter-right"></div>
      <div id="start">S</div>
      <div id="finish">✪</div>
      <div className="top-left"></div>
      <div className="top-right"></div>
      <div className="left-wall"></div>
      <div className="right-wall"></div>
      <div className="bottom-wall"></div>

      {/* Finish Block */}
      <div className="fin-top"></div>
      <div className="fin-left"></div>
      <div className="fin-right"></div>
      <div className="fin-b-left"></div>
      <div className="fin-b-right"></div>
    </article>
  );
}
