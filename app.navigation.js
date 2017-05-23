'use strict'
// React
import React from 'react';
import { AppRegistry } from 'react-native';
// Redux
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
// Navigation
import TabBarNavigation from './app/tabBar/views/TabBarNavigation'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Provider store={configureStore()}>
        <TabBarNavigation />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('TakeItOver', () => App);
