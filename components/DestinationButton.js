import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
export const DestinationButton = function(props) {
    return (
        <TouchableOpacity onPress={() => {}} style={styles.container}>
            <Text style={styles.dinnerLoc}>Choose a location</Text>
            <View style={styles.contentContainer}>
            <View style={styles.leftCol}>
            <Image style={styles.location} source={require('../assets/location.png')}/>
            </View>
            <View style={styles.centerCol}>
                <Text style={{fontFamily: 'Helvetica', fontSize: 22, color:'#545454'}}>
                    {this.props.propname}
                </Text>
            </View>
            <View style={styles.rightCol}>
                <Ionicons name="md-car" color="#000000" size={25} style={{alignSelf: 'center'}} />
            </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
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
    contentContainer: {
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
        opacity: 0.4,
        color: '#545454',
        fontFamily: "Helvetica",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 19,
        textAlign: 'center',
    },
    location: {
        width: 9,
        height: 14,
    }
})