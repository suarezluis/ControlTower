import React from 'react';
import {View, Text, nav} from 'react-native';
import {Button} from 'react-native-elements';
import geolocation from '@react-native-community/geolocation';
export default class AircraftScreen extends React.Component {
  state = {
    last: {
      accuracy: 0,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0,
      latitude: 0,
      longitude: 0,
      speed: 0,
      timestamp: 0,
    },
    current: {
      accuracy: 0,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0,
      latitude: 0,
      longitude: 0,
      speed: 0,
      timestamp: 0,
    },
  };
  componentDidMount() {
    // Geolocation.getCurrentPosition(position => console.log(position));
    geolocation.watchPosition(
      success => {
        console.log(success);
        let last = this.state.current;
        this.setState({
          current: {...success.coords, timestamp: success.timestamp},
          last,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, distanceFilter: 1},
    );
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Aircraft Screen</Text>

        <View>
          <Text style={{color: 'white'}}>
            Latitude:{' '}
            {this.state.current.latitude
              ? this.state.current.latitude
              : 'Unknown'}
          </Text>
          <Text style={{color: 'white'}}>
            Longitude:{' '}
            {this.state.current.latitude
              ? this.state.current.longitude
              : 'Unknown'}
          </Text>
          <Text style={{color: 'white'}}>
            Speed: {this.state.current.speed}
          </Text>
          <Text style={{color: 'white'}}>
            Altitude: {this.state.current.altitude}
          </Text>
          <Text style={{color: 'white'}}>Vertical Speed: </Text>
        </View>

        <View>
          <Text style={{color: 'white'}}>
            GPS Accuracy: {this.state.current.accuracy}
          </Text>
          <Text style={{color: 'white'}}>
            Altitude Accuracy: {this.state.current.altitudeAccuracy}
          </Text>
          <Text style={{color: 'white'}}>
            Previous Transmission Time: {this.state.last.timestamp}
          </Text>
          <Text style={{color: 'white'}}>
            Transmission Time: {this.state.current.timestamp}
          </Text>
        </View>
        <View style={{width: '50%'}}>
          <Button title="START"></Button>
          <Button title="STOP"></Button>
        </View>
      </View>
    );
  }
}
