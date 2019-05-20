import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';


const Todo = ({ index, todo, completeTodo, deleteTodo }) => (
  <div style={styles.ContainerStyle}>
    <ListItem>
    <p style ={{ textDecorationLine: todo.completed ? 'line-through': 'none'}}>
    {todo.title}
    </p>
    </ListItem>

    <Button
    variant="outlined"
    color="secondary"
      onClick={() => {
        completeTodo(index);
      }}
    >
    Complete
    </Button>
  </div>
);

/*<Button
    variant="outlined"
      onClick={() => {
        completeTodo(index);
      }}
    >
    Complete
    </Button>
    */

const styles = {
  ContainerStyle: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitleStyle: {
    flex: 1,
    fontSize: 20,
  },
  decoration: {
    textDecorationLine: 'line-through',
  },
  buttonStyle: {
    padding: 5,
  },
};

export default Todo;