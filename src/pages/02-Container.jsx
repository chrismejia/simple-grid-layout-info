import ContainerPartOne from "../components/sections/container/ContainerPartOne";
import ContainerPartTwo from "../components/sections/container/ContainerPartTwo";
import FullWidthExContainer from "../components/sections/container/FullWidthExContainer";
import Page from "../components/helpers/Page";

export default function Container() {
  return (
    <Page>
      <ContainerPartOne />
      <FullWidthExContainer />
      <ContainerPartTwo />
    </Page>
  );
}
