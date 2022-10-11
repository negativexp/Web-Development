import { useState } from "react";
import { HandleAddQuestion, HandleChangeTitle, HandleChangeOption,
         HandleAddOption, HandleDeleteQuestion, HandleDeleteOption } from "./scripts/ManageQuestions"
import './App.css'

function App() {

  const[Questions, setQuestions] = useState([])

  function UpdateQuestions(data) {
    setQuestions(data)
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>forms</h1>
      </header>
  
      <div className="div-center">


        <button onClick={() => {console.log(Questions)}}>console log questions</button>
        <button onClick={() => {setQuestions(prev => [...prev, HandleAddQuestion()])}}>add quesiton</button>

        {/* Map thru questions */}
        {Questions.map((data, i) => {
          return (
            <div className="div-quesiton">
              <button onClick={() => UpdateQuestions(HandleDeleteQuestion(i, Questions))} >Delete question</button>
              <button onClick={() => UpdateQuestions(HandleAddOption(i, Questions))}>Add option</button><br/>
              <h1>Title:</h1>
              <input value={data.title}
                     onChange={e => UpdateQuestions(HandleChangeTitle(e, i, Questions))}
                     placeholder="Title"/>

              <h1>Options:</h1>

              {/* map thru options in questions */}
              {data.options.map((option, j) => {
                return (
                  <div className="div-options">
                    <ul>
                      <li>
                        <input value={option}
                               onChange={e => UpdateQuestions(HandleChangeOption(e, i, j, Questions))}
                               placeholder={"Option " + parseInt(j+1)}/>
                        <button onClick={() => UpdateQuestions(HandleDeleteOption(i, j, Questions))}>X</button>
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
