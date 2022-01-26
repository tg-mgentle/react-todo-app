/// <reference types="react-scripts" />
type addTodo = (name: string) => void;

interface TodoListProps {
  addTodo: addTodo;
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
}

type toggleIsDone = (id: number) => void;