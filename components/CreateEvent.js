import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {StyleSheet} from 'react-native';
import { Constants, MapView, Permissions, Location } from 'expo';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { DestinationButton } from './DestinationButton'
export default class DateTimePickerTester extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false, 
      chosenDate: '09:00', 
      region: null,
    };

    this._getLocationAsync();
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if(status !== 'granted')
        console.log('Permission to access location was declined');
    
    let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true});
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    }
    this.setState({region: region})
  }
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('HH:mm')
    })
  }
  
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,
      
    })
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.button} onPress={this.showPicker}>
            <Text style={styles.timeText}>{this.state.chosenDate}</Text>
          </TouchableOpacity>
          
          <DateTimePicker
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            mode={'time'}
            timePickerModeAndroid={'spinner'}
            is24Hour={false}
          />
        </View>
        <DestinationButton/>
        <MapView 
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={{flex: 1}}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: "#FFFFFF",
  },
  contentContainer:{
      
      height: 260,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
  },
  button:{
    width: 179,
    height: 56,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 15,
    
  },
  timeText:{
    fontFamily: "Helvetica",
    fontSize: 44,
    fontWeight: '400',
    lineHeight: 59,
    textAlign: 'center',
  }
})