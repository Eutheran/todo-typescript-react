import React from "react";
import { TodoListItem } from "../todo-list-item/todo-list-item.component";
import { AddTodoForm } from "../add-todo-form/add-todo-form.component";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  addTodo: AddTodo;
}

export const TodoListContainer: React.FunctionComponent<TodoListProps> = ({
  todos,
  toggleTodo,
  addTodo,
}) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
      <AddTodoForm addTodo={addTodo} />
    </ul>
  );
};
