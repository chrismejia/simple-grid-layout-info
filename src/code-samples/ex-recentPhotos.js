export const recentPhotosJSX = `<article className="grid example picture-collage">
  <div className="lava">
    <img
      src="../examples/pexels-1.jpg"
      alt="Body of Water during Golden Hour"
    />
  </div>

  <div className="station">
    <img
      src="../examples/pexels-2.jpg"
      alt="City Buildings"
    />
  </div>

  <div className="photos-titling">
    <h3 className="centered-text">Recent Photos</h3>
  </div>

  <div className="model">
    <img
      src="../examples/pexels-3.jpg"
      alt="Hot Air Balloons"
    />
  </div>

  <div className="river-road">
    <img
      src="../examples/pexels-4.jpg"
      alt="Body of Water during Golden Hour"
    />
  </div>
</article>`;

export const recentPhotosCSS = `.picture-collage {
  display: grid;
  grid-template:
    "lava lava lava lava station station"
    "model model photos-titling photos-titling station station"
    "model model river-road river-road station station";

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 200px);
  background-color: moccasin;

  padding: 1.5rem;
  gap: 0.75rem;
  border-radius: 0.75rem;
}

.photos-titling {
  grid-area: photos-titling;

  display: grid;
  place-items: center;
}

.picture-collage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  grid-area: river-road;
}`;
