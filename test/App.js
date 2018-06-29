import React from 'react';
import { StyleSheet, Text, View ,  YellowBox } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import Routes from './src/Routes';

YellowBox.ignoreWarnings(['Setting a timer','Failed child context type','Failed prop type',
'Warning: isMounted(...) is deprecated','Module RCT']);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});