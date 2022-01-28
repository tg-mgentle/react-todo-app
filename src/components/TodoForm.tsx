import { SyntheticEvent, useState } from 'react';

export const TodoForm = (props: TodoFormProps) => {
  const { addTodo } = props;
  const [name, setName] = useState('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (name) {
      addTodo(name);
      setName('');
    }
  }

  return (
      <form className='flex items-center justify-center mt-4' onSubmit={handleSubmit}>
          <input
            className='pl-4 py-1 rounded-full border-2 border-slate-800'
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            type="text"
            value={name} />
          <button className='px-8 py-1 ml-2 rounded-full bg-slate-800 text-white hover:bg-slate-600' onClick={handleSubmit}>Add Todo</button>
        </form>
  )
}