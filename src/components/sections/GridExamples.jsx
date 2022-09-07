import ThreeColArticle from "../examples/ThreeColArticle";
import RecentPhotos from "../examples/RecentPhotos";

export default function GridExamples() {
  return (
    <>
      <h2>What Can You Build With The Grid?</h2>
      <p>Stuff like this article.</p>

      <ThreeColArticle />

      <p style={{ margin: "2rem 0" }}>Or like this photo collage.</p>

      <RecentPhotos />
    </>
  );
}
