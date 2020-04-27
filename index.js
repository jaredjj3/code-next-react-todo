import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodoText: '',
      todos: [],
    };

    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
    this.handleTodoInputEnter = this.handleTodoInputEnter.bind(this);
    this.handleTodoListItemToggle = this.handleTodoListItemToggle.bind(this);
  }

  handleTodoInputChange(event) {
    this.setState({
      ...this.state,
      currentTodoText: event.target.value,
    });
  }

  handleTodoInputEnter(event) {
    // create TODO
    const todo = {
      index: this.state.todos.length,
      text: this.state.currentTodoText,
      isComplete: false,
    };

    // add todo to todos array, and reset the current text
    this.setState({
      ...this.state,
      currentTodoText: '',
      todos: [...this.state.todos, todo],
    });
  }

  handleTodoListItemToggle(index) {
    const todo = this.state.todos[index];
    if (!todo) {
      return;
    }

    todo.isComplete = !todo.isComplete;

    this.setState({
      ...this.state,
      todos: [...this.state.todos],
    });
  }

  render() {
    return (
      <div>
        <TodoInput 
          value={this.state.currentTodoText}
          onChange={this.handleTodoInputChange}
          onEnter={this.handleTodoInputEnter}
        />
        <TodoList
          todos={this.state.todos}
          onTodoListItemToggle={this.handleTodoListItemToggle}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
