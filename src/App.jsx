import UseEffect from "./hooks/UseEffect";
import UseState from "./hooks/UseState";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h2> useState Hook </h2> <UseState />
        <br />
        <h2> useEffect Hook </h2> <UseEffect />
      </div>{" "}
    </>
  );
}

export default App;
