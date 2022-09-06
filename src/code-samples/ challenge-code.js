export const regularKnotJSX = `export default function RegularKnot() {
  function TopEdge() {
    return (
      <>
        <div className="filled knot-3-wide">3</div>
        <div className="h-blank">
          <span>1 wide</span>
          <span>2 tall</span>
        </div>
        <div className="filled knot-3-wide">3</div>
      </>
    );
  }

  function TopSquareMiddle() {
    return (
      <>
        <div className="filled">1</div>
        <div>1</div>
        <div className="filled">1</div>

        <div className="filled">1</div>
        <div>1</div>
        <div className="filled">1</div>
      </>
    );
  }

  function KnotFullWidth() {
    return <div className="filled knot-full">7 wide</div>;
  }

  function CentralSection() {
    return (
      <>
        <div className="v-blank">
          <span>2 wide</span>
          <span>1 tall</span>
        </div>
        <div className="filled">1</div>
        <div>1</div>
        <div className="filled">1</div>
        <div className="v-blank">
          <span>2 wide</span>
          <span>1 tall</span>
        </div>
      </>
    );
  }

  function BottomSquareMiddle() {
    return (
      <>
        <div className="filled">1</div>
        <div>1</div>
        <div className="filled">1</div>
        <div className="h-blank">
          <span>1 wide</span>
          <span>2 tall</span>
        </div>
        <div className="filled">1</div>
        <div>1</div>
        <div className="filled">1</div>
      </>
    );
  }

  function BottomEdge() {
    return (
      <>
        <div className="filled knot-3-wide">3</div>
        <div className="filled knot-3-wide">3</div>
      </>
    );
  }

  return (
    <section className="grid square-knot">
      {/* row 1 */}
      <TopEdge />

      {/* row 2 */}
      <TopSquareMiddle />

      {/* row 3 */}
      <KnotFullWidth />

      {/* row 4 */}
      <CentralSection />

      {/* row 5 */}
      <KnotFullWidth />

      {/* row 6 */}
      <BottomSquareMiddle />

      {/* row 7 */}
      <BottomEdge />
    </section>
  );
}`;

export const regularKnotCSS = `.grid {
  display: grid;
}

.square-knot {
  grid-template-columns: repeat(7, 125px);
  grid-template-rows: repeat(7, 125px);
  column-gap: 0;
}

.filled {
  background-color: var(--vivid)
}

/* Universal blank spaces */

.h-blank {
  grid-column: span 1;
  grid-row: span 2;
}

.v-blank {
  grid-column: span 2;
  grid-row: span 1;
}

/* Unstyled Knot Segments */

.knot-3-wide {
  grid-column: span 3;
}

.knot-full {
  grid-column: span 7;
}`;
