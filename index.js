import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.nextId = 0;

    this.state = {
      currentTodoText: '',
      todos: [],
    };

    this.onTodoInputChange = this.onTodoInputChange.bind(this);
    this.onTodoInputEnter = this.onTodoInputEnter.bind(this);
    this.onTodoListItemToggle = this.onTodoListItemToggle.bind(this);
    this.onTodoListItemRemove = this.onTodoListItemRemove.bind(this);
  }

  onTodoInputChange(event) {
    this.setState({
      ...this.state,
      currentTodoText: event.target.value,
    });
  }

  onTodoInputEnter(event) {
    const todo = {
      id: this.nextId++,
      text: this.state.currentTodoText,
      isComplete: false,
    };

    this.setState({
      ...this.state,
      currentTodoText: '',
      todos: [...this.state.todos, todo],
    });
  }

  onTodoListItemToggle(id) {
    const todo = this.state.todos.find((todo) => todo.id === id);
    if (!todo) {
      return;
    }

    todo.isComplete = !todo.isComplete;

    this.setState({ ...this.state });
  }

  onTodoListItemRemove(id) {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  render() {
    return (
      <div>
        <TodoInput 
          value={this.state.currentTodoText}
          onChange={this.onTodoInputChange}
          onEnter={this.onTodoInputEnter}
        />
        <TodoList
          todos={this.state.todos}
          onTodoListItemToggle={this.onTodoListItemToggle}
          onTodoListItemRemove={this.onTodoListItemRemove}
        />
        <div>
          {JSON.stringify(this.state.todos)}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
