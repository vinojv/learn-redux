import React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Connector } from 'redux/react';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';


// @connect(state => ({
//   counter: state.counter
// }))
export default class CounterApp {
  render() {

    //console.log(this.props);

    //const { counter, dispatch } = this.props;


    console.log(this.context);


    return (
      <Connector>
        {({ counter, dispatch }) =>
          <Counter counter={counter}
                   {...bindActionCreators(CounterActions, dispatch)} />
        }
      </Connector>
    );
  }
}
