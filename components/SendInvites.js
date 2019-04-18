import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Constants, LinearGradient} from 'expo'; // Linea
import { TouchableHighlight, TouchableOpacity } from 'react-native'; // Button Darken
import { Localization } from 'expo-localization'; // Used for Localization Languages

export default class Splash extends React.Component {

    
    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Image style={styles.backarrow} source={require('../assets/back.png')}/>
                    </TouchableOpacity>
                        <Text style={styles.title}> DinDin</Text>  
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
    backarrow:{
        margin: 10,
        width: 20,
        height: 15,
    },

    
})

