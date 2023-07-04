import { useState } from "react";

function LearningUseState() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };
  return (
    <>
      <h1>{age}</h1>
      <button onClick={increaseAge}>Increase Age</button>
    </>
  );
}
export default LearningUseState;
