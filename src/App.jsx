import SiteHeader from "./components/chapters/01-SiteHeader";
import ContainerPartOne from "./components/chapters/02-ContainerPartOne";
import ContainerPartTwo from "./components/chapters/03-ContainerPartTwo";
import GridBasics from "./components/chapters/GridBasics";
import GridTemplating from "./components/chapters/GridTemplating";
import GridExamples from "./components/chapters/GridExamples";
import LayoutChallenges from "./components/chapters/LayoutChallenges";
import OpenGraphLayout from "./components/helpers/OpenGraphLayout";
import HighlightedElement from "./components/helpers/HighlightedElement";

export default function App() {
  return (
    <main className="App">
      <SiteHeader />
      <GridExamples />
      <ContainerPartOne />
      <HighlightedElement elementLabel={`<section className="container">`}>
        <div className="ex-container">
          <p>
            This is our container. It currently extends the full width of your
            browser window.
          </p>
        </div>
      </HighlightedElement>
      <ContainerPartTwo />
      <GridBasics />
      <GridTemplating />
      <LayoutChallenges />
      {/* <OpenGraphLayout /> */}
    </main>
  );
}
