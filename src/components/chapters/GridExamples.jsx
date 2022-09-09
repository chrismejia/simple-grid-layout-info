import ThreeColArticle from "../examples/ThreeColArticle";
import RecentPhotos from "../examples/RecentPhotos";
import SuperCentered from "../examples/SuperCentered";

export default function GridExamples() {
  return (
    <section className="container">
      <h2>What Can You Build With The Grid?</h2>
      <p>Stuff like this article.</p>
      <ThreeColArticle />
      <p>Or like this photo collage.</p>
      <RecentPhotos />
      <p>
        Or finally learn to <b>TRULY</b> center something, once and for all,{" "}
        <b>IN JUST ONE LINE.</b>
      </p>
      <SuperCentered />
    </section>
  );
}
