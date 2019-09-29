import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
          current: {...success.coords, timestamp: new Date(success.timestamp)},
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
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>Aircraft</Text>

        <View style={styles.gpsData}>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Latitude: </Text>
            <Text style={styles.fieldValue}>
              {this.state.current.latitude
                ? this.state.current.latitude
                : 'Unknown'}
            </Text>
          </View>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Longitude: </Text>
            <Text style={styles.fieldValue}>
              {this.state.current.latitude
                ? this.state.current.longitude
                : 'Unknown'}
            </Text>
          </View>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Speed: </Text>
            <Text style={styles.fieldValue}>
              {Math.round(this.state.current.speed * 2.23694 * 100) / 100} MpH
            </Text>
          </View>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Altitude:</Text>
            <Text style={styles.fieldValue}>{this.state.current.altitude}</Text>
          </View>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Vertical Speed: </Text>
          </View>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>GPS Accuracy:</Text>
            <Text style={styles.fieldValue}>{this.state.current.accuracy}</Text>
          </View>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Altitude Accuracy:</Text>
            <Text style={styles.fieldValue}>
              {this.state.current.altitudeAccuracy}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderColor: 'green',
            borderWidth: 2,
            padding: 7,
          }}>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Previous Transmission Time: </Text>
            <Text style={styles.fieldValue}>
              {this.state.last.timestamp
                ? this.state.last.timestamp.toString().slice(0, 24)
                : 'Unknown'}
            </Text>
          </View>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Transmission Time: </Text>
            <Text style={styles.fieldValue}>
              {this.state.current.timestamp.toString().slice(0, 24)}
            </Text>
          </View>
          <View style={styles.infoField}>
            <Text style={styles.fieldTitle}>Transmission Status: </Text>
            <Text style={styles.fieldValue}>OK</Text>
          </View>
        </View>
        <Text style={{color: 'green', fontSize: 20}}>TRANSMITTING</Text>
        <View style={{width: '50%'}}>
          <Button title="START"></Button>
        </View>
        <View style={{width: '50%'}}>
          <Button title="STOP"></Button>
        </View>
        {/* {Object.keys(this.state.current).map((current, index) => {
          return (
            <View key={index} style={{alignItems: 'center'}}>
              <Text style={{color: 'orange'}}>{current}</Text>
              <Text style={{color: 'red'}}>{this.state.current[current]}</Text>
              </View>
              );
        })} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  gpsData: {
    borderColor: 'green',
    borderWidth: 2,
    padding: 7,
    width: '80%',
  },
  infoField: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  fieldTitle: {
    color: 'white',
  },
  fieldValue: {
    flex: 1,
    color: 'pink',
    flexWrap: 'wrap',
    textAlign: 'right',
  },
});
