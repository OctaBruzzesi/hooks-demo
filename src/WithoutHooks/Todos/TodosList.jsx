import React, { Component } from 'react';
import List from '@material-ui/core/List';

import Todo from './Todo';

 class TodosList extends Component {
  render() {
    const { todos, completeTodo } = this.props;
    return (
      <List
      style={{maxHeight: 200, overflow: 'auto'}}
      >
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
      </List>
    );
  }
}

export default (TodosList)