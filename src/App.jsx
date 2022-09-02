import ContainerPartOne from "./components/ContainerPartOne";
import ContainerPartTwo from "./components/ContainerPartTwo";
import HighlightedElement from "./components/helpers/HighlightedElement";
import TheGrid from "./components/TheGrid";

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
      <TheGrid></TheGrid>
    </main>
  );
}

export default App;
