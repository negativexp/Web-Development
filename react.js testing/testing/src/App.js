import { useState } from "react";
import './App.css'

function App() {

  const[Questions, setQuestions] = useState([])

  const HandleAddQuestion = () => {
    var quesiton = {
      title: "",
      options: ["", ""]
    }
    
    setQuestions(prev => [...prev, quesiton])
  }

  const HandleChangeTitle = (e, i) => {
    const inputData = [...Questions]
    inputData[i].title = e.target.value;
    setQuestions(inputData) 
  }

  const HandleChangeOption = (e, i, j) => {
    const inputData = [...Questions]
    inputData[i].options[j] = e.target.value;
    setQuestions(inputData)
  }

  const HandleAddOption = (i) => {
    const old = [...Questions]
    const oldOpts = [...old[i].options, ""]
    old[i].options = oldOpts
    setQuestions(old)
  }

  const HandleDeleteQuestion = (i) => {
    const deleteData = [...Questions]
    deleteData.splice(i, 1)
    setQuestions(deleteData)
  }

  const HandleDeleteOption = (i, j) => {
    const deleteData = [...Questions]
    deleteData[i].options.splice(j, 1)
    setQuestions(deleteData)
  }

  function test_func() {
    console.log(Questions)
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>forms</h1>
      </header>
  
      <div>
        <button onClick={() => HandleAddQuestion()}>add quesiton</button>
        <button onClick={() => test_func()}>test</button>
        {Questions.map((data, i) => {
          return (
            <div className="div-quesiton">
              <h1>title: <input value={data.title} onChange={e => HandleChangeTitle(e, i)}/></h1>
              <button onClick={() => HandleDeleteQuestion(i)}>Delete question</button>
              <button onClick={() => HandleAddOption(i)}>Add Option</button>
              {data.options.map((option, j) => {
                return (
                  <ul>
                    <li>{j+1}
                      <input value={option} onChange={e => HandleChangeOption(e, i, j)}/>
                      <button onClick={() => HandleDeleteOption(i, j)}>X</button>
                    </li>
                  </ul>
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
