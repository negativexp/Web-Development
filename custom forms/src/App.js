import { useState } from 'react';
import './index.css';

function App() {

  const [questions, setQuestions] = useState([]);
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

  const HandleAddQuestion = () => {
    const old = [...questions,[]]
    setQuestions(old);
  }

  const HandleAddItem = () => {

  }

  const HandleChangeQuestion = (e, i) => {
    const inputData = [...questions]
    inputData[i] = e.target.value;
    setQuestions(inputData)
  }

  function test_func() {
    console.log(questions)
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

      <div>
        <h1>fix</h1>
        <button onClick={() => HandleAddQuestion()}>Create question</button>
        <button onClick={() => test_func()}>test</button>

        {questions.map((data, i) => {
          return (
            <div className="div-question">
              <h1>question: <input value={data.title} onChange={(e) => HandleChangeQuestion(e, i)} placeholder="Title"></input></h1>
              <button onClick={() => HandleAddItem()}>add option</button>

            </div>
          )
        })}

      </div>

    </div>
  );
}

export default App;
