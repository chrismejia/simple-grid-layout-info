import Header from "./components/Header";
import ContainerIntro from "./components/ContainerIntro";

function App() {
  return (
    <main className="App">
      <Header />
      <ContainerIntro />

      <fieldset className="">
        <legend>
          <code className="inline">{`<section className="container"/>`}</code>
        </legend>
        <div style={{ margin: 0, backgroundColor: "#9b00a3" }}>p</div>
      </fieldset>
    </main>
  );
}

export default App;
