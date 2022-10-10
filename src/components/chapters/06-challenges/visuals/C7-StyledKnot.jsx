export default function StyledKnot() {
  return (
    <article className="grid styled-knot">
      {/* row 1 */}
      <div className="filled tl-curve" />
      <div className="filled" />
      <div className="filled tr-curve" />
      <div className="h-blank" />
      <div className="filled tl-curve" />
      <div className="filled" />
      <div className="filled tr-curve" />

      {/* row 2 */}
      <div className="filled" />
      <div />
      <div className="filled t-to-black" />
      <div className="filled v-overlap t-to-black" />
      <div />
      <div className="filled" />

      {/* row 3 */}
      <div className="filled bl-curve" />
      <div className="filled h-overlap l-to-black" />
      <div className="filled r-to-black" />
      <div className="filled br-curve" />

      {/* row 4 */}
      <div className="v-blank" />
      <div className="v-overlap b-to-black" />
      <div />
      <div className="v-blank" />

      {/* row 5 */}
      <div className="filled tl-curve" />
      <div className="filled l-to-black" />
      <div className="filled h-overlap r-to-black" />
      <div className="filled tr-curve" />

      {/* row 6 */}
      <div className="filled" />
      <div />
      <div className="h-blank" />
      <div className="filled b-to-black" />
      <div />
      <div className="filled" />

      {/* row 7 */}
      <div className="filled bl-curve" />
      <div className="filled" />
      <div className="filled br-curve" />
      <div className="filled bl-curve" />
      <div className="filled" />
      <div className="filled br-curve" />
    </article>
  );
}
