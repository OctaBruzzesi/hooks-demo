import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <div>
         <TextField
          label="...add Todo"
          value={value}
          onChange={event => setValue(event.target.value)}
        />

    <Button
      variant="outlined"
      color="secondary"
      style ={{marginTop: 15, marginLeft: 2}}
      onClick={(event) => {
        handleSubmit(event);
      }}
    >
    Add
    </Button>
    </div>
  );
};
export default TodoForm;