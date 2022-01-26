import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

export const TodoList = (props: TodoListProps) => {
  const { addTodo, todos, toggleIsDone } = props;

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} toggleIsDone={toggleIsDone} />
        })}
      </ul>
    </>
  )
}