import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import AircraftScreen from '../screens/AircraftScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: AircraftScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
