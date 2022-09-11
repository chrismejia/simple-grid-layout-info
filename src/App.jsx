import SiteHeader from "./components/chapters/01-SiteHeader";
import GridExamples from "./components/chapters/02-GridExamples";
import ContainerPartOne from "./components/chapters/03-ContainerPartOne";
import ContainerPartTwo from "./components/chapters/04-ContainerPartTwo";
import GridBasics from "./components/chapters/05-GridBasics";
import GridTemplating from "./components/chapters/GridTemplating";
import HighlightedElement from "./components/helpers/HighlightedElement";
import LayoutChallenges from "./components/chapters/LayoutChallenges";
import OpenGraphLayout from "./components/helpers/OpenGraphLayout";
import SiteFooter from "./components/helpers/SiteFooter";

export default function App() {
  return (
    <main className="App">
      <SiteHeader />
      <GridExamples />
      <ContainerPartOne />
      <HighlightedElement elementLabel={`<section className="container">`}>
        <div className="ex-container centered-text">
          <p>This is our container.</p>
          <p>It currently extends the full width of your browser window.</p>
        </div>
      </HighlightedElement>
      <ContainerPartTwo />
      <GridBasics />
      <GridTemplating />
      <LayoutChallenges />
      {/* <OpenGraphLayout /> */}
      <SiteFooter />
    </main>
  );
}
