import React, { useState, useEffect } from "react";
import "./App.css";
// importing Components
import Form from "./Components/Form/Form.js";
import TodoList from "./Components/TodoList/TodoList.js";

function App() {
  //create STATE
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  // RUN ONCE WHEN THE APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []); //empty array cos it only runs once

  // USE EFFECT - it runs only once when the component is first rendered.
  // Everytime our todos state changes run this function.
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions & Eventhandlers
  function filterHandler() {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //SAVE TO LOCAL
  function saveLocalTodos() {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  function getLocalTodos() {
    if(localStorage.getItem("todos") === null) {
       localStorage.setItem("todos", JSON.stringify([]));
    } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"))
        setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;

