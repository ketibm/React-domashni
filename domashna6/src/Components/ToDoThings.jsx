import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const ToDoThings = ({ toDos, updateTodo, checkTodo, deleteTodo }) => {
  const [editInput, setEditInput] = useState({
    id: null,
    text: "",
  });

  const submitUpdate = (value) => {
    updateTodo(editInput.id, value);
    setEditInput({
      id: null,
      text: "",
    });
  };

  if (editInput.id)
    return <ToDoForm edit={editInput} handleAddTodo={submitUpdate} />;

  return toDos.map((toDo) => (
    <div
      key={toDo.id}
      className="flex mt-3 item-center w-96 h-10 text-white border outline-none border-violet-600 bg-violet-600 rounded-md"
    >
      {toDo.isChecked ? (
        <input
          value={toDo.text}
          className=" bg-emerald-600 pl-2 flex-1 outline-none rounded-md"
          type="text"
        />
      ) : (
        <input
          value={toDo.text}
          className=" bg-violet-600 pl-2 flex-1 outline-none"
          type="text"
        />
      )}
      <button onClick={() => checkTodo(toDo.id)} className="p-1">
        <CheckIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={() => setEditInput({ id: toDo.id, text: toDo.text })}
        className="p-1"
      >
        <PencilSquareIcon className="h-6 w-6 text-white" />
      </button>
      <button onClick={() => deleteTodo(toDo.id)} className="p-1">
        <TrashIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  ));
};

export default ToDoThings;
