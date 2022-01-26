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
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        type="text"
        value={name} />
      <button onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}