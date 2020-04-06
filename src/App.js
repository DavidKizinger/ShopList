import React, { useState } from "react";
import "./App.css";
import ListDisplay from "./component/ListDisplay";
import InputText from "./component/InputText";

const App = () => {
  const [items, setItems] = useState(["orange", "apples", "wine"]);

  return (
    <div id="list-container">
      <ListDisplay
        items={items}
        handleClick={item => {
          setItems(items.slice().filter(i => i !== item));
        }}
      />
      <InputText
        handleSubmit={item => {
          setItems(items.concat(item));
        }}
      />
    </div>
  );
};

export default App;
