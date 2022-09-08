export default function RecentPhotos() {
  return (
    <div className="grid picture-collage">
      <div className="top-horiz">
        <img
          src="../examples/pexels-1.jpg"
          alt="Body of Water during Golden Hour"
        />
      </div>
      <div className="tall">
        <img src="../examples/pexels-2.jpg" alt="City Buildings" />
      </div>
      <div className="side-1">
        <img src="../examples/pexels-3.jpg" alt="Hot Air Balloons" />
      </div>
      <div className="photos-titling">
        <h3 className="centered-text">Recent Photos</h3>
      </div>
      <div className="side-2">
        <img
          src="../examples/pexels-4.jpg"
          alt="Body of Water during Golden Hour"
        />
      </div>
    </div>
  );
}
