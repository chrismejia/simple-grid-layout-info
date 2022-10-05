export const tiledFloor_jsx = `export default function TiledFloor() {
  return (
    <article className="tiled-floor">
      <Tile />
      <Tile />
      {/* 34 more Tiles... */}
    </article>
    );
  }`;

export const tiledFloor_css = `.tiled-floor {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);

  /* These dimensions are inherited by the child, the <Tile />. */
  height: 560px;
  width: 560px;
}`;
