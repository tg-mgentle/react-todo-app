export const Todo = (props: TodoProps) => {
  const { todo, toggleIsDone, removeTodo } = props;
  
  return (
    <li key={todo.id} className='flex items-center w-full hover:bg-slate-400 px-6 py-3 border-b even:bg-slate-100'>
      <input className='accent-slate-800 hover:accent-slate-400 cursor-pointer pointer-events-auto' checked={todo.isDone} readOnly type="checkbox" onClick={() => toggleIsDone(todo.id)}/>
      <p className={`ml-2 w-full cursor-pointer ${todo.isDone ? 'line-through opacity-60' : null}`} onClick={() => toggleIsDone(todo.id)}>{todo.name}</p>
      <button className='rounded-full bg-slate-800 text-white text-xs px-4 py-1 hover:bg-slate-600 pointer-events' onClick={()=> removeTodo(todo.id)}>Remove</button>
    </li>
  )
}