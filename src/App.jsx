import ContainerPartOne from "./components/ContainerPartOne";
import ContainerPartTwo from "./components/ContainerPartTwo";
import HighlightedElement from "./components/helpers/HighlightedElement";
import TheGrid from "./components/TheGrid";
import GridTemplating from "./components/GridTemplating";
import OpenGraphLayout from "./components/helpers/OpenGraphLayout";

function App() {
  return (
    <main className="App">
      <ContainerPartOne />
      <HighlightedElement elementLabel={`<section className="container"/>`}>
        <div className="ex-container">
          <p>This is our container.</p>
        </div>
      </HighlightedElement>
      <ContainerPartTwo />
      <TheGrid />
      <GridTemplating />
      <OpenGraphLayout />
    </main>
  );
}

export default App;
