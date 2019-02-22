import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
import Splash from './components/Splash';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3VfFOvQraAMjX3za8JFsuSbi49S-png8",
  authDomain: "dindin-74318.firebaseapp.com",
  databaseURL: "https://dindin-74318.firebaseio.com",
  projectId: "dindin-74318",
  storageBucket: "dindin-74318.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const rootStack = createStackNavigator({
  Splash: {screen: Splash},
  Home: {screen: HomeScreen},
},
{
  initalRouteName: 'Splash',
  title: 'DinDin',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#353535',
      fontFamily: "Helvetica",
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 23,
      textAlign: 'center',
    },
  },
}
) 

const AppContainer = createAppContainer(rootStack)
export default class App extends React.Component {

  render() {
    return(
      <AppContainer/>
    );
  }

}
