import React, { PropTypes } from 'react';


export default class Counter {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }


  render() {
    const { increment, counter } = this.props;

    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
      </p>
    );
  }
}
