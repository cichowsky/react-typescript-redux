/* eslint-disable no-console */
import React, { Component } from 'react';

interface IMessageProps {
  author: string;
}

interface IMessageState {
  times: number;
}

class Message extends Component<IMessageProps, IMessageState> {
  constructor(props: IMessageProps) {
    super(props);

    this.state = { times: 0 };
  }

  /* second way to define state */
  // readonly state: IMessageState = {
  //   times: 5,
  // };

  componentDidUpdate(prevProps: IMessageProps, prevState: IMessageState) {
    console.log(prevProps, prevState);
  }

  render() {
    const { author } = this.props;
    const { times } = this.state;

    return (
      <div>
        <p>Author {author}</p>
        <p>Sent messages ({times})</p>
        <button
          type="button"
          onClick={() => this.setState((prevState) => ({ times: prevState.times + 1 }))}
        >
          Send message
        </button>
      </div>
    );
  }
}

export default Message;
