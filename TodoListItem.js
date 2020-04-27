import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <li
        key={todo.index}
        data-todo-index={todo.index}
      >
        {todo.isComplete ? `${todo.text} (completed)` : todo.text}
      </li>
    );
  }
}