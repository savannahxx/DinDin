import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
import Splash from './components/Splash';

const rootStack = createStackNavigator({
  Splash: {screen: Splash},
  Home: {screen: HomeScreen},
},
{
  initalRouteName: 'Splash'
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
