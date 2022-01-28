import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

export const TodoList = (props: TodoListProps) => {
  const { addTodo, removeTodo, todos, toggleIsDone } = props;

  return (
    <div className='flex items-center justify-center flex-col w-full'>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? <h5 className="flex justify-center items-center h-60 w-full text-center text-xl opacity-50 mt-4">No Todo's</h5>
      :
      <ul className='w-full overflow-y-auto overflow-x-hidden h-60 max-h-60 mt-4'>
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} toggleIsDone={toggleIsDone} removeTodo={removeTodo} />
        })}
      </ul>
      }
    </div>
  )
}