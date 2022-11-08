import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    e.target.className = "clicked";
    setTimeout(() => {
      e.target.className = null;
    }, 50);
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    e.target.className = "clicked";
    setTimeout(() => {
      e.target.className = null;
    }, 50);
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));

    e.target.className = "clicked";
    setTimeout(() => {
      e.target.className = null;
    }, 50);
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    e.target.className = "clicked";
    setTimeout(() => {
      e.target.className = null;
    }, 50);
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = 0;
    e.target.className = "clicked";
    setTimeout(() => {
      e.target.className = null;
    }, 50);
  }

  function resetResult(e) {
    e.preventDefault();
    // Add the code for the resetResult function
    setResult(0);
    e.target.className = "clicked";
    setTimeout(() => {
      e.target.className = null;
    }, 50);
  }

  return (
    <div className="App container">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {/* add the value of the current total */}
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>substract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
       <h4>Yohannes Desta</h4>
      </form>
    </div>
  );
}

export default App;
