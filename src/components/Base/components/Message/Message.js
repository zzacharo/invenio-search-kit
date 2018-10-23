import React, { Component } from 'react';

class Message extends Component {
  render() {
    let { message } = this.props;
    return <div>{message}</div>;
  }
}

export default Message;
