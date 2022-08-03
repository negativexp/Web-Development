import React, {useState, useEffect} from 'react';
const {v4: uuidv4 } = require("uuid");

function App() {

  const [items, setItems] = useState([]);

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
    calculateTotal();
  }, [items]);

  function addItem() {
    var spentOn = document.getElementById("spentOnInput").value;
    var amount = document.getElementById("amountInput").value;

    //check if item is empty
    if (!spentOn || /^\s*$/.test(spentOn) || !amount || /^\s*$/.test(amount)) {
      document.getElementById("errorMsg").innerHTML = "❌";
      return
    }
    document.getElementById("errorMsg").innerHTML = "👍";

    var item = {
      id: uuidv4(),
      spentOn: spentOn,
      amount: amount
    }

    //add item
    setItems(prev => [...prev, item]);
  }

  function resetItems() {
    setItems([]);
  }

  function removeItem(id) {
    var newarr = items.filter(item => item.id != id);
    setItems(newarr);
  }

  function calculateTotal() {
    var x = 0;
    items.forEach(element => {
      x = x + parseInt(element.amount);
    });
    document.getElementById("total").innerHTML = "total: " + x;
  }

  function testFunc() {
    console.log(uuidv4())
  }


  return (
    <div className="App">
      <p id="errorMsg">👍</p>
      <input type="text" placeholder="spent on" id="spentOnInput"/>
      <input type="text" placeholder="amount" id="amountInput"/>
      <button onClick={() => {addItem()}}>Add</button>
      <button onClick={() => resetItems()}>Reset</button>
      <button onClick={() => testFunc()}>testfunc</button>
      <ul>
        {items.map(item => {return(
          <li key={item.id}>{item.spentOn} | {item.amount}
          <button onClick={() => removeItem(item.id)}>❌</button></li>
        )})}
      </ul>
      <p id="total">total:</p>
    </div>
  );
}

export default App;
