import SingleChallenge from "../../../helpers/SingleChallenge";
import PlainTarget from "../visuals/PlainTarget";

export default function TargetChallenge() {
  const text = "Build a square target.";
  const num = 4;
  const fileName = "Target.jsx";

  return (
    <SingleChallenge
      challengeBlurb={text}
      challengeNum={num}
      challengeFileLabel={fileName}
    >
      <PlainTarget />
    </SingleChallenge>
  );
}
