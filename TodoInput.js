import React from 'react';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value,
    })
  }

  /**
   * Determines if a user pressed enter and validates
   * the input before calling the onEnter prop.
   */
  onKeyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }

    this.props.onEnter(this.state.value);

    this.setState({
      ...this.state,
      value: '',
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}
