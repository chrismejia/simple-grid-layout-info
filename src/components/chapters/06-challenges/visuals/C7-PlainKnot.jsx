export default function PlainKnot() {
  // function TopEdge() {
  //   return (
  //     <>
  //       <div className="filled knot-3-wide">3 Wide</div>
  //       <div className="h-blank">
  //         <span>1 Wide</span>
  //         <span>2 Tall</span>
  //       </div>
  //       <div className="filled knot-3-wide">3 Wide</div>
  //     </>
  //   );
  // }

  // function TopSquareMiddle() {
  //   return (
  //     <>
  //       <div className="filled">1</div>
  //       <div>1</div>
  //       <div className="filled">1</div>

  //       <div className="filled">1</div>
  //       <div>1</div>
  //       <div className="filled">1</div>
  //     </>
  //   );
  // }

  // function KnotFullWidth() {
  //   return <div className="filled knot-full">7 Wide</div>;
  // }

  // function CentralSection() {
  //   return (
  //     <>
  //       <div className="v-blank">
  //         <span>2 Wide</span>
  //         <span>1 Tall</span>
  //       </div>
  //       <div className="filled">1</div>
  //       <div>1</div>
  //       <div className="filled">1</div>
  //       <div className="v-blank">
  //         <span>2 Wide</span>
  //         <span>1 Tall</span>
  //       </div>
  //     </>
  //   );
  // }

  // function BottomSquareMiddle() {
  //   return (
  //     <>
  //       <div className="filled">1</div>
  //       <div>1</div>
  //       <div className="filled">1</div>
  //       <div className="h-blank">
  //         <span>1 Wide</span>
  //         <span>2 Tall</span>
  //       </div>
  //       <div className="filled">1</div>
  //       <div>1</div>
  //       <div className="filled">1</div>
  //     </>
  //   );
  // }

  // function BottomEdge() {
  //   return (
  //     <>
  //       <div className="filled knot-3-wide">3 Wide</div>
  //       <div className="filled knot-3-wide">3 Wide</div>
  //     </>
  //   );
  // }

  function TopEdge() {
    return (
      <>
        <div className="filled knot-3-wide"></div>
        <div className="h-blank"></div>
        <div className="filled knot-3-wide"></div>
      </>
    );
  }

  function TopSquareMiddle() {
    return (
      <>
        <div className="filled"></div>
        <div></div>
        <div className="filled"></div>

        <div className="filled"></div>
        <div></div>
        <div className="filled"></div>
      </>
    );
  }

  function KnotFullWidth() {
    return <div className="filled knot-full"></div>;
  }

  function CentralSection() {
    return (
      <>
        <div className="v-blank"></div>
        <div className="filled"></div>
        <div></div>
        <div className="filled"></div>
        <div className="v-blank"></div>
      </>
    );
  }

  function BottomSquareMiddle() {
    return (
      <>
        <div className="filled"></div>
        <div></div>
        <div className="filled"></div>
        <div className="h-blank"></div>
        <div className="filled"></div>
        <div></div>
        <div className="filled"></div>
      </>
    );
  }

  function BottomEdge() {
    return (
      <>
        <div className="filled knot-3-wide"></div>
        <div className="filled knot-3-wide"></div>
      </>
    );
  }

  return (
    <article className="grid square-knot">
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
      <BottomSquareMiddle />
      {/* row 2 */}
      {/* row 3 */}
      <BottomEdge />
    </article>
  );
}
