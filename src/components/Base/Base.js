import React, { Component } from 'react';
import { Message } from './components/Message';

class Base extends Component {
  onInputChange = event => this.props.setMessage(event.target.value);

  render() {
    console.log(this.props);
    return (
      <div>
        <input onChange={this.onInputChange} />
        <Message />
      </div>
    );
  }
}

export default Base;
