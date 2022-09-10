export default function RecentPhotos() {
  return (
    <article className="grid example picture-collage">
      <div className="lava">
        <img
          src="../examples/pexels-1.jpg"
          alt="Body of Water during Golden Hour"
        />
      </div>
      <div className="station">
        <img src="../examples/pexels-2.jpg" alt="City Buildings" />
      </div>
      <div className="photos-titling">
        <h3 className="centered-text">Recent Photos</h3>
      </div>
      <div className="model">
        <img src="../examples/pexels-3.jpg" alt="Hot Air Balloons" />
      </div>
      <div className="river-road">
        <img
          src="../examples/pexels-4.jpg"
          alt="Body of Water during Golden Hour"
        />
      </div>
    </article>
  );
}
