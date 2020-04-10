import React, { useState } from "react";

function Input() {
  const [color, setColor] = useState("000000");

  document.bgColor = color;
  let randomColor = Math.floor(Math.random() * 99999) + 100000;
  return (
    <>
      <p>Your color code is {"#" + color} </p>
      <button onClick={() => setColor(randomColor)} className="btn">
        Change color
      </button>
    </>
  );
}

export default Input;
