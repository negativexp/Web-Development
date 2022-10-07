import { useState } from 'react';
import './index.css';

function App() {

  const [items, setItems] = useState([]);
  const [question, setQuetions] = useState([]);

  const HandleAddItems = () => {

    var item = {
      _value: "",
    }
    setItems(prev => [...prev, item])

    // const old = [...items,[]]
    // setItems(old)
  }

  function _HandleAddItems() {
    var item = {
      _value: "",
    }
    setItems(prev => [...prev, item])
  }

  const HandleChangeItems = (e, i) => {
    const inputData = [...items]
    inputData[i] = e.target.value;
    setItems(inputData)
  }

  const HandleDeleteItems = (i) => {
    const deleteData = [...items]
    deleteData.splice(i,1)
    setItems(deleteData)
  }

  const HandleAddQuestions = () => {
    const old = [...question, []]
    console.log(old)
    setQuetions(old)
  }

  const HandleChangeQuestions = (e, i) => {
    const inputData = [...question]
    inputData[i] = e.target.value;
    setQuetions(inputData);
  }

  function test_func() {
    console.log(question)
    console.log(items)
  }


  return (
    <div className="App">

      <header className="App-header">
        <h1>negativexp forms</h1>
      </header>

      <button onClick={() => _HandleAddItems()}>Add items</button>
      <button onClick={() => HandleAddQuestions()}>add questions</button>

      {items.map((data, i) => {
        return (
          <div>
            <input value={data} onChange={e => HandleChangeItems(e, i)}/>
            <button onClick={() => HandleDeleteItems(i)}>x</button>
          </div>
        )
      })}

      <button onClick={() => test_func()}>test</button>

      <div>
        <h1>Items</h1>

        {items.map((data ,i) => {
          return (
            <div>
              <h2>{i} ; {data}</h2>
            </div>
          )
        })}

        <h1>Questions</h1>
        {question.map((data, i) => {
          return (
            <div>
              <h2>{i} ; {data}</h2>
              {items.map((data, i) => {
                return (
                  <div>
                    <label>{data}</label>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
