import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";

import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const onSubmit = (text) => {
    setTodoList([...todoList, { text: text, completed: false, id: uuid() }]);
  };

  const completeHandler = (index) => {
    const newTodos = [...todoList];
    newTodos[index].completed = !newTodos[index].completed;
    setTodoList(newTodos);
  };

  const editHandler = (todoId, text) => {
    const updatedTodos = [...todoList].map((todo) => {
      if (todo.id === todoId) {
        todo.text = text;
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };

  const deleteHandler = (todoId) => {
    setTodoList(todoList.filter((el) => el.id !== todoId));
  };

  useEffect(() => {
    const todoList = window.localStorage.getItem("todoList");
    if (todoList) setTodoList(JSON.parse(todoList));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App flex flex-col justify-center items-center">
      <Form onSubmit={onSubmit} />
      <TodoList
        todoList={todoList}
        completeHandler={completeHandler}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default App;