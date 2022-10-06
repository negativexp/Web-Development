import './index.css';

function App() {

  function test_button() {
    console.log(document.getElementById("description-input").value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>negativexp forms</h1>
      <p>Name: <input type="text" id="name-input"/></p>
      <p>Description: <textarea type="text" id="description-input"/></p>
      

      <button onClick={() => {test_button()}}>test button</button>
      </header>
    </div>
  );
}

export default App;
