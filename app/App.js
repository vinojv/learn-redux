import React from 'react';
import { createRedux } from 'redux';
import { provide, Provider } from 'redux/react';
import CounterApp from './containers/CounterApp';
import * as stores from './stores';


const redux = createRedux(stores);

//@provide(redux)
export default class App {
  render() {
    return (
      <Provider redux={redux}>
        {() =>
          <CounterApp />
        }
      </Provider>
    );
  }
}
