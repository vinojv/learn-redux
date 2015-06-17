import React from 'react';
import { createRedux } from 'redux';
import { provide } from 'redux/react';
import CounterApp from './containers/CounterApp';
import * as stores from './stores';


@provide(createRedux(stores))
export default class App {
  render() {
    return (
      <CounterApp />
    );
  }
}
