import React from 'react';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }

    if (this.props.value) {
      this.setState({
        ...this.state,
        error: ''
      });
      this.props.onEnter(event);
    } else {
      this.setState({
        ...this.state,
        error: 'should not have a blank todo'
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          onKeyPress={this.handleKeyPress}
        />
        <span>
          {this.state.error}
        </span>
      </div>
    );
  }
}
