import React, { Component } from "react";
import { render } from "react-dom";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    // This state functions as the central storage for
    // the rest of the components. Data flows from this
    // component "downwards" to the child components.
    this.state = {
      reactDevName: "Jared",
      todos: []
    };

    // In React class components, we bind each event handler to
    // the instance. That way, when the event handler is called,
    // the 'this' variable is pointing to this instance. If we
    // skipped this step, then the 'this' variable would be
    // undefined.
    this.onTodoInputEnter = this.onTodoInputEnter.bind(this);
    this.onTodoListItemToggle = this.onTodoListItemToggle.bind(this);
    this.onTodoListItemRemove = this.onTodoListItemRemove.bind(this);

    // React does not need to know about the next ID.
    // We leave it outside of the state so that React
    // does not try to re-render when it changes.
    this.nextId = 0;
  }

  /**
   * Create a todo, and then push it onto a new todos array.
   */
  onTodoInputEnter(todoInputValue) {
    const todo = {
      id: this.nextId++,
      text: todoInputValue,
      isComplete: false
    };

    this.state.todos.push(todo);

    this.setState({ ...this.state });
  }

  /**
   * Given a todo id, toggle the isComplete property. If no
   * todo matches the given id, do nothing.
   */
  onTodoListItemToggle(id) {
    const todo = this.state.todos.find(todo => todo.id === id);
    if (!todo) {
      return;
    }

    todo.isComplete = !todo.isComplete;

    this.setState({ ...this.state });
  }

  /**
   * Given a todo id, remove all todos that match that id.
   */
  onTodoListItemRemove(id) {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.reactDevName}'s Todos</h1>
        <TodoInput onEnter={this.onTodoInputEnter} />

        <br />

        <TodoList
          todos={this.state.todos}
          onTodoListItemToggle={this.onTodoListItemToggle}
          onTodoListItemRemove={this.onTodoListItemRemove}
        />

        <br />

        <pre className="alert alert-warning">
          this.state = {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
