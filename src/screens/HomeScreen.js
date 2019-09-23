import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome To Control Tower</Text>
        <Input
          label="Your Name"
          containerStyle={styles.input}
          placeholder="John Doe"
          leftIcon={{type: 'font-awesome', name: 'user'}}
        />
        <Input
          label="Your AMA number"
          containerStyle={styles.input}
          placeholder="000000000"
          leftIcon={{type: 'font-awesome', name: 'plane'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingTop: 90,
  },
});
