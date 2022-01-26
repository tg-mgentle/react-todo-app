import { useState } from 'react';
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string) => {
    setTodos([...todos,
      {
        id: todos.length,
        isDone: false,
        name: name
      }]);
  }

  const toggleIsDone = (id: number) => {
    const todo = todos.find(t => t.id === id);

    if (todo) {
      todos[todos.indexOf(todo)].isDone = !todo.isDone;

      setTodos([...todos]);
    }
  }

  return (
    <div>
      <header>
        <h1>React Todo App</h1>
      </header>

      <TodoList addTodo={addTodo} todos={todos} toggleIsDone={toggleIsDone}/>
    </div>
  );
}

export default App;
