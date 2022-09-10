export const recentPhotosJSX = `<article className="grid example picture-collage">
  <div className="lava">
    <img
      src="../examples/pexels-1.jpg"
      alt="Flowing lava"
    />
  </div>

  <div className="station">
    <img
      src="../examples/pexels-2.jpg"
      alt="Train station"
    />
  </div>

  <div className="photos-titling">
    <h3 className="centered-text">Recent Photos</h3>
  </div>

  <div className="model">
    <img
      src="../examples/pexels-3.jpg"
      alt="Model in sunglasses"
    />
  </div>

  <div className="river-road">
    <img
      src="../examples/pexels-4.jpg"
      alt="Winding road by river"
    />
  </div>
</article>`;

export const recentPhotosCSS = `.picture-collage {
  grid-template:
    "lava  lava  lava    lava    station station"
    "model model titling titling station station"
    "model model road    road    station station";

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 200px);
  background-color: moccasin;

  padding: 1.5rem;
  gap: 0.75rem;
  border-radius: 0.75rem;
}

.picture-collage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Area assignments */

.photos-titling {
  grid-area: titling;

  display: grid;
  place-items: center;
}

.photos-titling h3 {
  font-family: "Playfair Display", serif;
  color: black;
  margin: 0;
}

.lava {
  grid-area: lava;
}

.station {
  grid-area: station;
}

.model {
  grid-area: model;
}

.river-road {
  grid-area: river;
}`;
