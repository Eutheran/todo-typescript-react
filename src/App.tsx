import React, { useState } from "react";
import { TodoListContainer } from "./components/todo-list-container/todo-list-container.component";

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

  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <>
      <TodoListContainer
        todos={todos}
        toggleTodo={toggleTodo}
        addTodo={addTodo}
      />
    </>
  );
};

export default App;
