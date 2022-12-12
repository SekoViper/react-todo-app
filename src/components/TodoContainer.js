import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

   handleChange = (id) => {
     this.setState((prevState) => ({
       todos: prevState.todos.map((todo) => {
         if (todo.id === id) {
           return {
             ...todo,
             completed: !todo.completed,
           };
         }
         return todo;
       }),
     }));
   };

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    const { todos } = this.state;
    todos.push(newTodo);
    this.setState(({ todos }) => todos);
    const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
  };

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
    this.addTodoItem();
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
