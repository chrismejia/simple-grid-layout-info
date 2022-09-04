import ContainerPartOne from "./components/ContainerPartOne";
import ContainerPartTwo from "./components/ContainerPartTwo";
import Metadata from "./components/helpers/Metadata";
import HighlightedElement from "./components/helpers/HighlightedElement";
import TheGrid from "./components/TheGrid";
import OpenGraphLayout from "./components/helpers/OpenGraphLayout";

function App() {
  return (
    <main className="App">
      <Metadata />
      <ContainerPartOne />
      <HighlightedElement elementLabel={`<section className="container"/>`}>
        <div className="ex-container">
          <p>This is our container.</p>
        </div>
      </HighlightedElement>
      <ContainerPartTwo />
      <TheGrid />
      <OpenGraphLayout />
    </main>
  );
}

export default App;
