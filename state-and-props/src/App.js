import React, {useState} from "react";
import "./App.css"
//Import components


function App() {

  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter(prev => prev + 1);
    setToggle(prev => !prev);
  }

  const resetCounter = () => {
    setCounter(prev => prev = 0);
  }

  return (
    <div className="App">

      <div className="title">
        <h1>Matyáš Schuller</h1>
        <h1>Student školy EDUCHEM</h1>
      </div>

      <div className="home">
        <h1>counter {counter}</h1>
        <h1 className={toggle ? "toggleOn" : "toggleOff"}>{toggle ? "On" : "Off"}</h1>
        <button onClick={incrementer}>Click</button>
        <button onClick={resetCounter}>Reset</button>
      </div>

    </div>
  );
}

export default App;
