import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitValueHandler = (e) => {
    e.preventDefault();
    if (!inputText) return;
    onSubmit(inputText)
    setInputText("");
  };
  return (
    <form className="p-10">
      <input
        className="p-2 border-2 border-gray-400 rounded rounded-r-none border-r-0"
        onChange={inputTextHandler}
        type="text"
        value={inputText}
      ></input>
      <button
        className="bg-white text-gray-400 font-black p-2 px-4 border-2 border-gray-400 rounded rounded-l-none"
        onClick={submitValueHandler}
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default Form;
