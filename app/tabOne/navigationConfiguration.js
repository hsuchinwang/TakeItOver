'use strict'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
// Screens
import TabOneScreenOne from './views/TabOneScreenOne';
import TabOneScreenTwo from './views/TabOneScreenTwo';
import TabOneScreenThree from './views/TabOneScreenThree';
import TabOneScreenFour from './views/TabOneScreenFour';

const tabOneDrawerOne = StackNavigator({
  TabOneScreenOne: { screen: TabOneScreenOne },
});

const tabOneDrawerTwo = StackNavigator({
  TabOneScreenTwo: { screen: TabOneScreenTwo },
});

const tabOneDrawerThree = StackNavigator({
  TabOneScreenThree: { screen: TabOneScreenThree },
});

const tabOneDrawerFour = StackNavigator({
  TabOneScreenFour: { screen: TabOneScreenFour },
});

const routeConfiguration = {
  TabOneDrawerOne: { screen: tabOneDrawerOne },
  TabOneDrawerTwo: { screen: tabOneDrawerTwo },
  TabOneDrawerThree: { screen: tabOneDrawerThree },
  TabOneDrawerFour: { screen: tabOneDrawerFour },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'TabOneDrawerOne',
}
export const NavigatorTabOne = DrawerNavigator(routeConfiguration, stackNavigatorConfiguration);