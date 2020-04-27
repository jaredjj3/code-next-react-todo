import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Updates the state value to match the value in the
   * input. When React performs a re-render, it won't
   * 'undo' the change that was just made.
   */
  onChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value
    });
  }

  /**
   * Determines if a user pressed enter and validates
   * the input before calling the onEnter prop.
   */
  onKeyPress(event) {
    if (event.key !== "Enter") {
      return;
    }

    this.props.onEnter(this.state.value);

    this.setState({
      ...this.state,
      value: ""
    });
  }

  componentDidMount() {
    if (this.props.initialValue) {
      this.setState({
        ...this.state,
        value: this.props.initialValue
      });
    }
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="What do you need to do?"
        value={this.state.value}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}
