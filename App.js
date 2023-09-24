import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) {
     e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  	// Add the code for the minus function 
  };
 
  function times(e) {
     e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
    // Add the code for the plus function 
  }; 
 
  function divide(e) {
     e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
    // Add the code for the divide function 
  };
 
  function resetInput(e) {
    e.preventDefault(); 
    inputRef.current.value = null
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault(); 
    resultRef.current.value = null;
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>
          {result}
          {/* add the value of the current total */} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
