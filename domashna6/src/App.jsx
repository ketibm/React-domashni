import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-950 to-violet-600 h-screen w-screen relative flex flex-col items-center pt-12">
      <div className="bg-indigo-950 absolute overflow-auto flex flex-col w-6/12 h-5/6 items-center rounded-md">
        <Header />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
