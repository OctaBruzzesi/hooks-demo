import React, { Component } from 'react';
import List from '@material-ui/core/List';

import Todo from './Todo';

 class TodosList extends Component {
  render() {
    const { todos, completeTodo, deleteTodo } = this.props;
    return (
      <List
      style={{maxHeight: 200, overflow: 'auto'}}
      >
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
      </List>
    );
  }
}

export default (TodosList)