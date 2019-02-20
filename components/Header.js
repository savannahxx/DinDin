import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Constants} from 'expo';

export default class Header extends React.component{
    render(){
        return(
            <View style={styles.container}>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FFFFFF",
        height: 48,
        margin: Constants.statusBarHeight
    }

})