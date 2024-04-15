import React, { useState } from "react";

const ToDoForm = ({ handleAddTodo, edit }) => {
  const [inputText, setInputText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleAddTodo({ id: Math.random(Math.floor * 1000), text: inputText });
    setInputText("");
  };

  return (
    <form>
      {edit ? (
        <div className="flex mt-2 w-96 text-white border border-violet-600 rounded-md">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="bg-indigo-950 ml-2 flex-1 outline-none rounded-md"
            type="text"
            placeholder={edit.text}
          />
          <button
            type="submit"
            onClick={(e) => handleClick(e)}
            className="bg-violet-600 w-20 p-2 outline-none"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="flex mt-1 w-96 text-white border outline-none border-violet-600 rounded-md">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="bg-indigo-950 ml-2 flex-1 outline-none"
            type="text"
            placeholder="What is the task today?"
          />
          <button
            type="submit"
            onClick={(e) => handleClick(e)}
            className="bg-violet-600 p-2 outline-none"
          >
            Add Task
          </button>
        </div>
      )}
    </form>
  );
};

export default ToDoForm;
