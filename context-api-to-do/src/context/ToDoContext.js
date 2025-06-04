import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [{ id: 1, todo: "Todo message", completed: "false" }],
  addTodo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
