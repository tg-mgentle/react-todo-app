export const Todo = (props: TodoProps) => {
  const { todo, toggleIsDone } = props;

  return (
    <li key={todo.id} className={todo.isDone ? 'done' : ''} onClick={() => toggleIsDone(todo.id)}>
      <input checked={todo.isDone} readOnly type="checkbox" />
      {todo.name}
    </li>
  )
}