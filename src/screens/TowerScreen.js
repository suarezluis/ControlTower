import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';
import geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Icon} from 'react-native-elements';

export default class TowerScreen extends React.Component {
  state = {
    mapType: 'satellite',
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
    pilot: {latitude: 37.33131185, longitude: -122.03075659},
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
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            mapType={this.state.mapType}
            style={styles.map}
            region={{
              latitude: this.state.pilot.latitude,
              longitude: this.state.pilot.longitude,
              latitudeDelta:
                (this.state.pilot.latitude - this.state.current.latitude) * 3,
              longitudeDelta:
                (this.state.pilot.longitude - this.state.current.longitude) * 3,
            }}>
            <Marker
              coordinate={{
                latitude: this.state.current.latitude,
                longitude: this.state.current.longitude,
              }}
              title={'Aircraft'}
              description={'This is the aircraft'}
              icon={require('../../assets/image/plane.png')}
              rotation={this.state.current.heading - 45}
            />
            <Marker
              coordinate={{
                latitude: this.state.pilot.latitude,
                longitude: this.state.pilot.longitude,
              }}
              icon={require('../../assets/image/pilot.png')}
              title={'Pilot'}
              description={'This is the aircraft'}

              // rotation={this.state.current.heading - 45}
            />
          </MapView>
        </View>
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
          <View style={styles.infoField}>
            <Text></Text>
            <Text
              style={{
                color: 'white',
                textShadowColor: 'red',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 2,
              }}>
              By Luis Suarez
            </Text>
          </View>
        </View>
        {this.state.mapType == 'satellite' ? (
          <Button
            title={'Map'}
            onPress={() => this.setState({mapType: 'standard'})}></Button>
        ) : (
          <Button
            title={'Satellite'}
            onPress={() => this.setState({mapType: 'satellite'})}></Button>
        )}
        <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    height: '50%',
    width: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    alignContent: 'center',

    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    alignSelf: 'center',
  },
  gpsData: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 7,
    width: '90%',
    height: '50%',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
  infoField: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  fieldTitle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 2,
    borderRadius: 5,
  },
  fieldValue: {
    color: 'red',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 2,
    borderRadius: 5,
  },
});
