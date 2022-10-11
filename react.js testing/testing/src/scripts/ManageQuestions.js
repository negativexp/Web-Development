export function test_func(string) {
  return string + string
}

export const HandleAddQuestion = () => {
  var quesiton = {
    title: "",
    options: ["", ""]
  }
  return quesiton
}

export const HandleChangeTitle = (e, i, Questions) => {
  const inputData = [...Questions]
  inputData[i].title = e.target.value;
  return inputData
}

export const HandleChangeOption = (e, i, j, Questions) => {
  const inputData = [...Questions]
  inputData[i].options[j] = e.target.value;
  return inputData
}

export const HandleAddOption = (i, Questions) => {
  const old = [...Questions]
  const oldOpts = [...old[i].options, ""]
  old[i].options = oldOpts
  return old
}

export const HandleDeleteQuestion = (i, Questions) => {
  const deleteData = [...Questions]
  deleteData.splice(i, 1)
  return deleteData
}

export const HandleDeleteOption = (i, j, Questions) => {
  const deleteData = [...Questions]
  deleteData[i].options.splice(j, 1)
  return deleteData
}