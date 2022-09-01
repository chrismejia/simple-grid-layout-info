import Header from "./components/Header";
import ContainerPartOne from "./components/ContainerPartOne";
import ContainerPartTwo from "./components/ContainerPartTwo";
import HighlightedElement from "./components/helpers/HighlightedElement";

function App() {
  return (
    <main className="App">
      <Header />
      <ContainerPartOne />

      <HighlightedElement elementLabel={`<section className="container"/>`}>
        <div className="ex-container">
          <p>This is our container.</p>
        </div>
      </HighlightedElement>

      <ContainerPartTwo />
    </main>
  );
}

export default App;
