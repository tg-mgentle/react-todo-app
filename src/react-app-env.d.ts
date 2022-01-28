/// <reference types="react-scripts" />
type addTodo = (name: string) => void;
type removeTodo = (id: number) => void;

interface TodoListProps {
  addTodo: addTodo;
  removeTodo: removeTodo;
  todos: Todo[];
  toggleIsDone: toggleIsDone
}

interface Todo {
  id: number;
  isDone: boolean;
  name: string;
}

interface TodoFormProps {
  addTodo: addTodo;
}

interface TodoProps {
  todo: Todo;
  toggleIsDone: toggleIsDone;
  removeTodo: removeTodo;
}

type toggleIsDone = (id: number) => void;