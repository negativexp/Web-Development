import { useState } from 'react';
import './index.css';

function App() {

  const [items, setItems] = useState([]);

  const HandleAdd = () => {
    const old = [...items,[]]
    setItems(old)
  }

  const HandleChange = (e, i) => {
    const inputData = [...items]
    inputData[i] = e.target.value;
    setItems(inputData)
  }

  const HandleDelete = (i) => {
    const deleteData = [...items]
    deleteData.splice(i,1)
    setItems(deleteData)
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>negativexp forms</h1>
      </header>

      <button onClick={() => HandleAdd()}>Add</button>

      {items.map((data, i) => {
        return (
          <div>
            <input value={data} onChange={e => HandleChange(e, i)}/>
            <button onClick={() => HandleDelete(i)}>x</button>
          </div>
        )
      })}

      <div>
        <h1>testy</h1>

        {items.map((data ,i) => {
          return (
            <div>
              <h2>{i} ; {data}</h2>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
