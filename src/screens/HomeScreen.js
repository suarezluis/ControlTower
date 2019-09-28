import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Video from 'react-native-video';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'black',
        }}>
        <Video
          repeat
          resizeMode="contain"
          source={require('../../assets/video/radar.mp4')} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
        <Text
          style={{
            color: 'white',
            // fontFamily: 'monospace',
            fontWeight: '800',
            fontSize: 40,
            marginTop: '5%',
          }}>
          Control Tower
        </Text>
        <Text
          style={{
            color: 'black',
            // fontFamily: 'sans-serif-condensed',
            fontWeight: '900',
            fontSize: 25,
            position: 'absolute',
            top: 200,
          }}>
          By Luis Suarez
        </Text>
        <View
          style={{
            width: '90%',
            padding: '5%',
            marginBottom: '5%',
            borderRadius: 10,
            backgroundColor: 'rgba(255,255,255,0.75)',
          }}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 120,
    right: 0,
  },
  input: {},
});
