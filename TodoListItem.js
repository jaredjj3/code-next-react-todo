import React, { Component } from "react";

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  onCheckboxChange(event) {
    this.props.onToggle(this.props.todo.id);
  }

  onRemoveClick(event) {
    this.props.onRemove(this.props.todo.id);
  }

  render() {
    const id = `todo-id-${this.props.todo.id}`;
    const baseClassName = 'list-group-item d-flex justify-content-between align-items-center';
    const className = this.props.todo.isComplete
      ? baseClassName + ' list-group-item-success'
      : baseClassName;

    return (
      <li className={className}>
        <div class="form-check form-check-inline">
          <input
            id={id}
            className="form-check-input"
            type="checkbox"
            checked={this.props.todo.isComplete}
            onChange={this.onCheckboxChange}
          />
          <label for={id} className="form-check-label">
            {this.props.todo.text}
          </label>
        </div>
        <button
          className="btn btn-danger btn-sm"
          onClick={this.onRemoveClick}
        >
          remove
        </button>
      </li>
    );
  }
}
