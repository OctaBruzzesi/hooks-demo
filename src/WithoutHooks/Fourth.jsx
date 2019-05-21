import React, {Component, Fragment } from 'react';
import Card from '../components/Card';
import TodosList from './Todos/TodosList';
import TodoForm from './Todos/TodoForm';

class Fourth extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
       .then(response => response.json())
       .then(json => this.setState({ todos: json }))
       .catch(e => console.log(e));
  }

  // Toggle Complete
  todoComplete = (id) => {
    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {

      if(todo.id - 1 === id) {
        todo.completed = !todo.completed
      }
      return todo;
    },console.log(this.state.todos)) });
  }

  // Delete Todo
  // deleteTodo = (id) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  // }

  // // Add Todo
  // addTodo = (title) => {
  //   axios.post('https://jsonplaceholder.typicode.com/todos', {
  //     title,
  //     completed: false
  //   })
  //     .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  // }
  render() {
      return (
        <Fragment>
          <Card>
            <div >
          <h3 style={styles.formTitles}>
            Todo's list
          </h3>
          { this.state.todos === undefined ? (
            <p> Loading ...</p>
          ) : (
            <TodosList todos={this.state.todos} completeTodo={this.todoComplete} deleteTodo={()=> console.log('nada')} />
          )}
          <div >
            <TodoForm addTodo={()=> console.log('nada')} />
          </div>
        </div>
          </Card>
        </Fragment>
      )
    
  }
}


    // const [todos, loading, setTodos] = useFetch();
    // const addTodo = title => {
    //   const newTodos = [...todos, { title }];
    //   setTodos(newTodos);
    // };
    // const completeTodo = index => {
    //   const newTodos = [...todos];
    //   newTodos[index].completed = !todos[index].completed;
    //   setTodos(newTodos);
    // };
    // const deleteTodo = index => {
    //   const newTodos = [...todos];
    //   newTodos.splice(index, 1);
    //   setTodos(newTodos);
    // };
  

const styles = {
    container: {
    },
    formTitles: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    cardStyle: {
      flex: 1,
    },
  };

export default Fourth;
