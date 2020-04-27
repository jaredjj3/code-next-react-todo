import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) =>  (
          <TodoListItem
            key={todo.index}
            todo={todo}
            onToggle={this.props.onTodoListItemToggle}
            onRemove={this.props.onTodoListItemRemove}
          />
        ))}
      </ul>
    );
  }
}
