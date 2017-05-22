import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src/navigators/AppNavigator';
import configureStore from './src/store/configureStore';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={configureStore()}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TakeItOver', () => Root);
