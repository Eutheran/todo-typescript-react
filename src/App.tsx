import React, { useState } from "react";
import { ToDoListItem } from "./components/todo-list-item/todo-list-item.component";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "write app", complete: false },
];

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(initialTodos);

  //by specifying toggleTodo we no longer have
  //to declare what selectedTodo will follow
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if ((todo = selectedTodo)) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="container">
      {todos.map(todo => {
        return (
          <>
            <ToDoListItem todo={todo} toggleTodo={toggleTodo} />
          </>
        );
      })}
    </div>
  );
};

export default App;
