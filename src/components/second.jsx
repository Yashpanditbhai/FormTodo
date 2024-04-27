import React, { useReducer, useState } from "react";

// Define possible actions
const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

// This is like the brain of our to-do list
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  // We're creating our smart to-do list here
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  // Function to add a new to-do item
  const addTodo = () => {
    if (text.trim() !== "") {
      dispatch({ type: ACTIONS.ADD_TODO, payload: text });
      setText("");
    }
  };

  // Function to toggle the completion status of a to-do item
  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };

  // Function to delete a to-do item
  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-lg w-full mr-4"
          placeholder="Enter a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.text}
              </span>
            </div>
            <button
              className="text-red-500"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
