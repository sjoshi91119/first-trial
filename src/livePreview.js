import { useState } from "react";

function LivePreview() {
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={inputChange}
        placeholder="Write text here"
      ></input>
      <p>{inputValue}</p>
    </>
  );
}
export default LivePreview;
