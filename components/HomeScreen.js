import React from 'react';
import {View, StyleSheet} from 'react-native';
import Splash from './Splash';
import { Image } from 'react-native';
import {Constants} from 'expo';
import { 
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    } from 'react-native-responsive-screen';
import Header from './Header';
import DateScrollBar from './DateScrollBar';
export default class HomeScreen extends React.Component {

    render(){
        return(
            
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
       
    },

    
})