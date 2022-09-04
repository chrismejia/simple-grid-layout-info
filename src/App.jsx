import ContainerPartOne from "./components/ContainerPartOne";
import ContainerPartTwo from "./components/ContainerPartTwo";
import Helmet from "./components/helpers/Helmet";
import HighlightedElement from "./components/helpers/HighlightedElement";
import TheGrid from "./components/TheGrid";
import OpenGraphLayout from "./components/helpers/OpenGraphLayout";

function App() {
  return (
    <main className="App">
      <Helmet />
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
