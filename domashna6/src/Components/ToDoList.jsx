import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoThings from "./ToDoThings";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [history, setHistory] = useState([]);

  const addTodo = (value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }
    setToDos([value, ...toDos]);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setToDos(toDos.map((item) => (item.id === todoId ? newValue : item)));
  };

  const checkTodo = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const deleteTodo = (deleteId) => {
    const deletedTodo = toDos.find((todo) => todo.id === deleteId);
    setHistory([deletedTodo, ...history]);

    setToDos(toDos.filter((todo) => todo.id !== deleteId));
  };

  return (
    <div>
      <ToDoForm handleAddTodo={addTodo} />
      <ToDoThings
        toDos={toDos}
        updateTodo={updateTodo}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />
      <div className="my-16 rounded-md">
        <h2 className="text-white text-center my-8 font-mono font-bold text-4xl">
          Things Done!
        </h2>
        {history.map((deletedTodo) => (
          <div
            className="flex mt-3 w-96 text-white border border-violet-600  rounded-md"
            key={deletedTodo.id}
          >
            <p className="h-8 ml-2 mt-1">{deletedTodo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
