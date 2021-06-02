import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, completeHandler, editHandler, deleteHandler }) => {
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <Todo
            key={todo.id}
            index={index}
            todo={todo}
            todoList={todoList}
            completeHandler={completeHandler}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
