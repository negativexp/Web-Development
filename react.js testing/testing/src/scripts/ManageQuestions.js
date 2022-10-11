import { useState } from "react";

function ManageQuestions() {

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
      alert("test func from manage questions")
    }
}