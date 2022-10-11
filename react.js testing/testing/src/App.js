import { useState } from "react";
import './App.css'

function App() {

  const[Questions, setQuestions] = useState([])

  const DropdownOptions = [
    "Options", "..."
  ]

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

  return (
    <div className="App">

      <header className="App-header">
        <h1>forms</h1>
      </header>
  
      <div className="div-center">

        <button onClick={() => HandleAddQuestion()}>add quesiton</button>
        <button>test</button>

        {/* Map thru questions */}
        {Questions.map((data, i) => {
          return (
            <div className="div-quesiton">
              <button onClick={() => HandleDeleteQuestion(i)} >Delete question</button>
              <button onClick={() => HandleAddOption(i)}>Add option</button><br/>
              <h1>Title:</h1>
              <input value={data.title}
                     onChange={e => HandleChangeTitle(e, i)}
                     placeholder="Title"/>

              <h1>Options:</h1>

              {/* map thru options in questions */}
              {data.options.map((option, j) => {
                return (
                  <div className="div-options">
                    <ul>
                      <li>
                        <input value={option}
                               onChange={e => HandleChangeOption(e, i, j)}
                               placeholder={"Option " + parseInt(j+1)}/>
                        <button onClick={() => HandleDeleteOption(i, j)}>X</button>
                      </li>
                    </ul>
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
