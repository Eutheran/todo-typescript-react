import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FunctionComponent<AddTodoFormProps> = ({
  addTodo,
}) => {
  //passing useState a string type
  const [newTodo, setNewTodo] = useState<string>("");

  //change event is imported from react, pass it the HTML input element
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addTodo(newTodo);
  };

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add To List
      </button>
    </form>
  );
};
