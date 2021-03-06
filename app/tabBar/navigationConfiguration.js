'use strict'
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation';
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation';
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation';
import TabFourNavigation from '../tabFour/views/TabFourNavigation';

const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
  TabFourNavigation : { screen: TabFourNavigation },
}

const tabBarConfiguration = {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#fff' : '#fff',
    labelStyle: {
        fontSize: Platform.OS === 'ios' ? 12 : 12,
        color: '#eff0f4',
    },
    showIcon: true,
    scrollEnabled: false,
    swipeEnabled: false,
    style: {
      backgroundColor: '#339e85',
    },
    indicatorStyle: {
      backgroundColor: '#fff',
    }
  }
}

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)

