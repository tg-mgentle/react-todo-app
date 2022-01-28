import { useEffect, useState } from 'react';
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string) => {
    setTodos([...todos,
      {
        id: name.length * Math.floor(Math.random() * (5000 - 1 + 1)) + 1,
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

  const removeTodo = (id: number) =>{
    console.log(todos);
    setTodos([...todos.filter(t => t.id !== id)]);
  }

  return (
    <div className='relative top-28 flex items-center justify-center w-screen h-[50vh]'>
          <div className='pb-10 drop-shadow-md bg-white rounded-md w-1/4 overflow-hidden'>
      <header className='p-5 mb-3 bg-slate-800 w-full'>
        <h1 className='text-2xl text-white font-semibold'>React Todo App</h1>
      </header>
      <TodoList addTodo={addTodo} removeTodo={removeTodo} todos={todos} toggleIsDone={toggleIsDone}/>
    </div>
    </div>

  );
}

export default App;
