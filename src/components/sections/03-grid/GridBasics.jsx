import Divider from "../../helpers/Divider";
import DontRepeatYourself from "./DontRepeatYourself";
import GridFirstDeclaration from "./GridFirstDeclaration";
import IntroToRowsColumns from "./IntroToRowsColumns";
import MindTheGap from "./MindTheGap";
import PuttingItAllTogether from "./PuttingItAllTogether";
import RowsColsAllSizes from "./RowsColsAllSizes";
import WorkingWithColumns from "./WorkingWithColumns";
import WorkingWithRows from "./WorkingWithRows";

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
