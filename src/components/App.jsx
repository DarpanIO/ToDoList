import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [itemArray, setArray] = useState([]);
  function changeHandle(event) {
    setName(event.target.value);
    console.log("Changed");
  }
  function clickHandle(event) {
    setArray((oldArray) => [...oldArray, name]);
    setName("");
    // console.log(itemArray);
  }
  const newArray = itemArray.map((item) => <li>{item}</li>);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandle} type="text" value={name} />
        <button onClick={clickHandle}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{newArray}</ul>
      </div>
    </div>
  );
}

export default App;
