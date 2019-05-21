import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

  class TodoForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        value: '',
      }
  
      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleInput (event)  {
      this.setState({ value: event.target.value });
  
    }
  
     handleSubmit(event)  {
      event.preventDefault();
      if (!this.state.value) return;
      this.props.addTodo(this.state.value);
    };
  
  render() {

    return (
      <div>
           <TextField
            label="...add Todo"
            value={this.state.value}
            onChange={this.handleInput}
          />
  
      <Button
        variant="outlined"
        color="secondary"
        style ={{marginTop: 15, marginLeft: 2}}
        onClick={this.handleSubmit}
      >
      Add
      </Button>
      </div>
    );
  }
}

export default TodoForm;