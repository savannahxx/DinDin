import React from 'react';
import {View, StyleSheet} from 'react-native';
import Splash from './Splash';
import { Image } from 'react-native';
import {Constants} from 'expo';
import { 
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    } from 'react-native-responsive-screen';
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "DinDin",
        headerLeft: (
            <Image source={require('../assets/sidemenu.png')}/>
        )
    };

    render(){
        return(
            <View style={styles.container}>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor: "black",
       
    },

    iconLeft: {
        height: hp('2.4%'),
        width: wp('2.25%'),
        resizeMode: "contain",
        paddingLeft: 8,
    }
})