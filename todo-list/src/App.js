import React, { useState } from 'react';
import './App.css';

function App() {

  //state hook
  const [newItem, SetNewItem] = useState("");
  const [items, setItems] = useState([]);

  //helper functions
  function addItem() {

    if(!newItem || /^\s*$/.test(newItem)) {
      alert("enter an item!")
      SetNewItem("");
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      checked: null
    };

    setItems(oldList => [...oldList, item]);
    SetNewItem("");
  }

  function deleteItem(id) {
    const newarr = items.filter(item => item.id !== id);
    setItems(newarr);
  }

  function itemChange(item) {
    item.checked = !item.checked;
  }

  function getItemInfo(item) {
    console.log(item);
  }

  return (
    <div className="App">
      <h1>todo list app</h1>

      <input type="text"
        placeholder="add item..."
        value={newItem}
        onChange={e => SetNewItem(e.target.value)}/>

      <button onClick={() => addItem()}>add</button>
      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value}
            <input type="checkbox" onChange={() => itemChange(item)} checked={item.checked}/>
            <button onClick={() => deleteItem(item.id)}>❌</button>
            <button onClick={() => getItemInfo(item)}>❕</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
