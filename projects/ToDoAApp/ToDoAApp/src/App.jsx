import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoName from "./components/TodoName";
import TodoAdd from "./components/TodoAdd";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {

  return (
    <>
      <center>
        <TodoName></TodoName>
        <TodoAdd></TodoAdd>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </center>
    </>
  );
}

export default App;
