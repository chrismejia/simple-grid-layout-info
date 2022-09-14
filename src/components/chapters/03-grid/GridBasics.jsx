import Divider from "../../helpers/Divider";
import DontRepeatYourself from "./sections/DontRepeatYourself";
import GridFirstDeclaration from "./sections/GridFirstDeclaration";
import IntroToRowsColumns from "./sections/IntroToRowsColumns";
import MindTheGap from "./sections/MindTheGap";
import PuttingItAllTogether from "./sections/PuttingItAllTogether";
import RowsColsAllSizes from "./sections/RowsColsAllSizes";
import WorkingWithColumns from "./sections/WorkingWithColumns";
import WorkingWithRows from "./sections/WorkingWithRows";

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
