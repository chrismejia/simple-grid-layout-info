/**************************************
 * Both for ContainerPartOne.jsx
 *************************************/
export const full_width_container_jsx = `import "./styles/container.css"

export default function App() {
  return (
    <section className="container">
      <p>
        This is our container. It
        currently extends the full
        width of your browser window.
      </p>
    </section>
  )
}`;

export const full_width_container_css = `.container {
  /* 0 top-bottom margin */
  /* auto set equal left-right margin */
  margin: 0 auto;

  /* to help visualize */
  background-color: #9600a3;
  height: 100px;
}`;
