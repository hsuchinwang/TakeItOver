'use strict'

import { StackNavigator, DrawerNavigator } from 'react-navigation'

// Screens
import TabOneScreenOne from './views/TabOneScreenOne'
import TabOneScreenTwo from './views/TabOneScreenTwo'

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'screen',
  mode:'card',
  initialRouteName: 'TabOneScreenOne',
}

export const NavigatorTabOne = DrawerNavigator(routeConfiguration, stackNavigatorConfiguration);
//export const NavigatorTabOne = StackNavigator(routeConfiguration, stackNavigatorConfiguration);