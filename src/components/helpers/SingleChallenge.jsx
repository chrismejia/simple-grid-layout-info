import HighlightedElement from "./HighlightedElement";

export default function SingleChallenge({
  challengeText,
  challengeNum,
  challengeFileLabel,
  challengeComponent,
}) {
  const ExampleComponent = challengeComponent;
  return (
    <>
      <div className="grid single-challenge">
        <ol start={challengeNum ? challengeNum : ""}>
          <li>{challengeText}</li>
        </ol>
        <HighlightedElement elementLabel={challengeFileLabel}>
          <ExampleComponent />
        </HighlightedElement>
      </div>
    </>
  );
}
