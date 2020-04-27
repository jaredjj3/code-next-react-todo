import React, { Component } from 'react';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.onToggleClick = this.onToggleClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  onToggleClick(event) {
    this.props.onToggle(this.props.todo.id);
  }

  onRemoveClick(event) {
    this.props.onRemove(this.props.todo.id);
  }

  render() {
    const todo = this.props.todo;
    const text = todo.isComplete ? `${todo.text} (completed)` : todo.text;

    return (
      <li>
        <button onClick={this.onToggleClick}>
          toggle
        </button>
        <button onClick={this.onRemoveClick}>
          remove
        </button>
        <span>{text}</span>
      </li>
    );
  }
}