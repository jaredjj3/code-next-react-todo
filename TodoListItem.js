import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    const todo = this.props.todo;
    const text = todo.isComplete ? `${todo.text} (completed)` : todo.text;

    return (
      <li>
        <button 
          data-todo-id={todo.id}
          data-todo-action="TOGGLE"
        >
          toggle
        </button>
        <button 
          data-todo-id={todo.id}
          data-todo-action="REMOVE"
        >
          remove
        </button>
        <span>{text}</span>
      </li>
    );
  }
}