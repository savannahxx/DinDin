import React from 'react';
import {View, StyleSheet} from 'react-native';
import Splash from './Splash';

import {Constants} from 'expo';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "DinDin",
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
       
    }
})