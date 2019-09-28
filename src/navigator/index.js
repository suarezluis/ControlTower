import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import AircraftScreen from '../screens/AircraftScreen';
import TowerScreen from '../screens/TowerScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} type="font-awesome" name="home" />
        ),
      },
    },
    Aircraft: {
      screen: AircraftScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} type="font-awesome" name="rocket" />
        ),
      },
    },
    Tower: {
      screen: TowerScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} type="font-awesome" name="building" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'green',
      labelStyle: {
        // fontSize: 12,
      },
      style: {
        backgroundColor: 'black',
        borderTopColor: 'black',
      },
    },
  },
);

export default AppNavigator;
