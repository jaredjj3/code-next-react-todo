import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const data = event.target.dataset;
    if (!data.hasOwnProperty('todoIndex')) {
      return;
    }
    
    const index = parseInt(data.todoIndex, 10);
    if (Number.isNaN(index)) {
      return;
    }

    this.props.onTodoListItemToggle(index);
  }

  render() {
    return (
      <ul onClick={this.handleClick}>
        {this.props.todos.map((todo) => <TodoListItem todo={todo} />)}
      </ul>
    );
  }
}
