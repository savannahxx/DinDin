import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {StyleSheet} from 'react-native';
import { Constants, MapView, Permissions, Location, LinearGradient } from 'expo';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { DestinationButton } from './DestinationButton';
import { TouchableHighlight,Dimensions,Image, TextInput} from 'react-native'; // Button Darken
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
export default class DateTimePickerTester extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false, 
      chosenDate: '09:00', 
      region: null,
      locationResultCity: null,
      locationResultStreet: null,
      locationResultRegion: null,
      locationResultPostal: null,
      locationResultName: null,
      newLocation: null,
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

    let locationResult = await Location.reverseGeocodeAsync({latitude: location.coords.latitude, longitude: location.coords.longitude});
    locationResultCity = locationResult[0].city;
    locationResultStreet = locationResult[0].street;
    locationResultRegion = locationResult[0].region;
    locationResultPostal = locationResult[0].postalCode;
    locationResultName = locationResult[0].name;

    let newLocation = locationResultName + ' ' + locationResultCity + ' ' + locationResultRegion;
    this.setState({
      region: region, 
      locationResultCity: locationResultCity,
      locationResultStreet: locationResultStreet,
      locationResultRegion: locationResultRegion,
      locationResultPostal: locationResultPostal,
      locationResultName: locationResultName,
      newLocation: newLocation,
    })
    
    
  }
  getNewLocation = async (newLocation) => {
    let newloc = await Location.geocodeAsync({address: newLocation});

    newLocationLat = newloc[0].latitude;
    newLocationLongitude = newloc[0].longitude;
    let region = {
      latitude: newLocationLat,
      longitude: newLocationLongitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    }

   this.setState({
      region: region, 
      
      newLocation: newLocation,
    })
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
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
            <Image style={styles.backarrow} source={require('../assets/back.png')}/>
        </TouchableOpacity>
            <Text style={styles.title}> DinDin</Text>  
       </View>
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
        <View style={styles.locContainer}>
            <Text style={styles.dinnerLoc}>Choose a location</Text>
            <View style={styles.contentLocContainer}>
              <View style={styles.leftCol}>
                <TouchableOpacity>
                  <Image style={styles.location} source={require('../assets/location.png')} onPress={this._getLocationAsync}/>
                </TouchableOpacity>
              </View>
              <View style={styles.centerCol}>
                  <TextInput style={{fontFamily: 'Helvetica', fontSize: 18, color:'#545454'}}
                    onChangeText={(newLocation) => this.setState({newLocation})}
                    value={this.state.newLocation} />
              </View>
              <View style={styles.rightCol}>
              <TouchableOpacity>
                <Ionicons name="md-arrow-round-forward" color="#000000" size={25} style={{alignSelf: 'center'}} onPress={this.getNewLocation}/>
              </TouchableOpacity>
              </View>
            </View>
        </View>
        <MapView 
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={{flex: 1}}
        />
        
        <View>
          <TouchableHighlight 
            underlaycolor={'rgb(55,190,255)'} 
            style={styles.button} 
            onPress={()=> this.props.navigation.navigate('SendInvites')}>
            <LinearGradient 
              start={[0,1]}
              end={[0.53, 0.4]}
              colors={[ '#0F8CFF', '#1AB9FF',]} 
              style={styles.button}>
                <Text style={styles.inviteText}>Send Invitations</Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  
  container:{
      flex: 1,
      backgroundColor: "#FFFFFF",
  },
  contentContainer:{
      
      height: 180,
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
    fontSize: 60,
    fontWeight: '400',
    lineHeight: 59,
    textAlign: 'center',
    paddingBottom: 150,
  },
  button: { 
    width: '100%', 
    height: hp('7.1964'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset:{  width: -3,  height: 59,  },
    shadowColor: 'rgba(5,36,121,0.05)',

  },
  title:{
    letterSpacing: 0.4,
    textAlign: 'center',
    color: '#353535',
    fontFamily: "Helvetica",
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 23,
    paddingLeft: 130,
},
  inviteText: {
      color: "#ffffff",
      fontFamily: "Helvetica",
      fontSize: hp('2%'),
      fontWeight: '400',
      // lineHeight: 19,
      textAlign: 'center',
  },
  locContainer: {
        zIndex: 9,
        position: 'absolute',
        
        width: (WIDTH-40),
        height: 84,
        top: 250,
        left: 20,
        borderRadius: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    contentLocContainer: {
        flexDirection: 'row',
    },
    leftCol: {
        flex: 1,
        alignItems: 'center',
    },
    centerCol: {
        flex: 4,
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed'
    },
    dinnerLoc: {
        marginTop: 20,
        marginBottom: 10,
        color: '#545454',
        fontFamily: "Helvetica",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 19,
        textAlign: 'center',
    },
    location: {
        width: 15,
        height: 20,
    },
    backarrow:{
      margin: 10,
      width: 20,
      height: 15,
    }
})