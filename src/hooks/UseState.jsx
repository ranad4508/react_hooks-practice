import { useState } from "react";
const UseState = () => {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const [themes, setThemes] = useState("Red");
  const count = state.count;
  const theme = state.theme;

  function incrementCount() {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  }

  function decrementCount() {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    });
    setThemes("Green");
  }

  return (
    <>
      <div>
        <button onClick={decrementCount}> - </button> <span> {themes} </span>{" "}
        <span> {count} </span> <span> {theme} </span>{" "}
        <button onClick={incrementCount}> + </button>{" "}
      </div>{" "}
    </>
  );
};

export default UseState;
