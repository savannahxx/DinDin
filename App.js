import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
import Splash from './components/Splash';

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
      //<Splash/>
      <AppContainer/>
    );
  }

}
