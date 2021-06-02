import React, {useState} from "react";
import { TrashIcon, PencilAltIcon, SaveIcon } from "@heroicons/react/outline";

const Todo = ({ index, todo, completeHandler, editHandler, deleteHandler }) => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const onSave = (todoId) => {
    editHandler(todoId, editingText)
    setTodoEditing(null);
    setEditingText("");
  };

  return (
    <li className="w-max p-2 flex">
      {todoEditing !== todo.id ? (
        <label className={`px-4 ${todo.completed ? "line-through" : ""}`} htmlFor={todo.id}>
          {todo.text}
        </label>
      ) : (
        <input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText}></input>
      )}

      <input
        className="inline-block px-4"
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        onChange={() => completeHandler(index)}
      ></input>

      {todoEditing !== todo.id ? (
        <button className="text-white font-bold px-4 rounded opacity-50" onClick={() => setTodoEditing(todo.id)}>
          <PencilAltIcon className="h-5 w-5 text-blue-500" />
        </button>
      ) : (
        <button className="text-white font-bold px-4 rounded opacity-50" onClick={() => onSave(todo.id)}>
          <SaveIcon className="h-5 w-5 text-blue-500" />
        </button>
      )}

      <button className="text-white font-bold rounded opacity-50" onClick={() => deleteHandler(todo.id)}>
        <TrashIcon className="h-5 w-5 text-blue-500" />
      </button>
    </li>
  );
};

export default Todo;
