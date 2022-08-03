import React, {useState, useEffect} from "react";

function App() {

  const [items, setItems] = useState([]);
  const testarr = [{id: 1, value: "a"}, {id: 2, value: "b"}];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items"));
    if (data) {
      setItems(data);
    }
  }, [])

   //updates items
  useEffect(() => {
    if (Array.isArray(items) && items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      localStorage.removeItem("items");
    }
  }, [items]);

  function addItem() {
    //check if textbox is empty
    var newItem = document.getElementById("itemInput").value;
    if (!newItem || /^\s*$/.test(newItem)) {
      alert("Enter an item!")
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldlist => [...oldlist, item]);
    document.getElementById("itemInput").value = null;
  }
  
  function deleteItem(id) {
    var newarr = items.filter(item => item.id !== id);
    setItems(newarr);
  }

  return (
    <div className="App">
      <div className="center-no-border">
        <h1>Add item</h1>
        <input type="text" id="itemInput"
        placeholder="enter an item..."/>
        <button onClick={() => addItem()}>Add</button>
      </div>

      <div className="center">
      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value}
            <button onClick={() => deleteItem(item.id)}>❌</button></li>
          )
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;
