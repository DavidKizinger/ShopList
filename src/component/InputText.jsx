import React from "react";
import { useState } from "react";

function InputText(props) {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.handleSubmit(value);
        setValue("");
      }}
    >
      <input
        type="text"
        placeholder="Write text..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default InputText;
