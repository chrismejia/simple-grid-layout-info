import Divider from "../../helpers/Divider";
import DontRepeatYourself from "./examples/DontRepeatYourself";
import GridFirstDeclaration from "./examples/GridFirstDeclaration";
import IntroToRowsColumns from "./examples/IntroToRowsColumns";
import MindTheGap from "./examples/MindTheGap";
import PuttingItAllTogether from "./examples/PuttingItAllTogether";
import RowsColsAllSizes from "./examples/RowsColsAllSizes";
import WorkingWithColumns from "./examples/WorkingWithColumns";
import WorkingWithRows from "./examples/WorkingWithRows";

export default function GridBasics() {
  return (
    <>
      <GridFirstDeclaration />
      <IntroToRowsColumns />
      <WorkingWithColumns />
      <WorkingWithRows />
      <PuttingItAllTogether />
      <RowsColsAllSizes />

      <MindTheGap />
      <DontRepeatYourself />

      <h4>Start Here, End There (declaring spans)</h4>
    </>
  );
}
