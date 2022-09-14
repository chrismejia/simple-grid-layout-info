import GridBasics from "./components/chapters/03-grid/GridBasics";
// import GridTemplating from "./components/chapters/GridTemplating";
// import LayoutChallenges from "./components/chapters/LayoutChallenges";
// import OpenGraphLayout from "./components/helpers/OpenGraphLayout";
import SiteFooter from "./components/helpers/SiteFooter";

export default function App() {
  return (
    <main>
      <ContainerPartOne />

      <ContainerPartTwo />
      <GridBasics />
      {/* <GridTemplating /> */}
      {/* <LayoutChallenges /> */}
      {/* <OpenGraphLayout /> */}
      <SiteFooter />
    </main>
  );
}
