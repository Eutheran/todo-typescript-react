import React from "react";
import { TodoListItem } from "../todo-list-item/todo-list-item.component";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoListContainer: React.FunctionComponent<TodoListProps> = ({
  todos,
  toggleTodo,
}) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};
