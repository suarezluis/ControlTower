import React from 'react';
import {
  Button,
  View,
  Text,
  StatusBar,
  Platform,
  PermissionsAndroid,
  SafeAreaView,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import Navigator from './src/navigator';

let Navigation = createAppContainer(Navigator);

import changeNavigationBarColor from 'react-native-navigation-bar-color';
export default class App extends React.Component {
  componentDidMount() {
    changeNavigationBarColor('black');
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }
  render() {
    return (
      <Provider style={{backgroundColor: 'black'}} store={store}>
        <SafeAreaView style={{backgroundColor: 'black'}}>
          <StatusBar backgroundColor="black" barStyle="light-content" />
        </SafeAreaView>
        <Navigation />
      </Provider>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
