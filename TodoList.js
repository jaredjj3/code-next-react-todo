import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const data = event.target.dataset;
    if (!data.hasOwnProperty('todoId')) {
      return;
    }
    if (!data.hasOwnProperty('todoAction')) {
      return;
    }
    
    const id = parseInt(data.todoId, 10);
    if (Number.isNaN(id)) {
      return;
    }

    switch(data.todoAction) {
      case 'TOGGLE':
        this.props.onTodoListItemToggle(id);
        break;
      case 'REMOVE':
        this.props.onTodoListItemRemove(id);
        break;
      default:
        console.error(`${data.todoAction} not handled`);
    }
  }

  render() {
    return (
      <ul onClick={this.onClick}>
        {this.props.todos.map((todo) => <TodoListItem key={todo.index} todo={todo} />)}
      </ul>
    );
  }
}
