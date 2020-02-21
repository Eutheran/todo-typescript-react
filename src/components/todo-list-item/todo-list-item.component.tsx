import React from "react";
import "./todo-list-item.component.css";

//interfaces gives composition of what to expect
//types declared from type definition file are brought in and aliased here
interface TodoListeItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

//destructuring what is passed in for easy access to items
export const TodoListItem: React.FunctionComponent<TodoListeItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
