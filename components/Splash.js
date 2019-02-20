import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Constants, LinearGradient} from 'expo';
import { TouchableHighlight } from 'react-native';
import { Localization } from 'expo-localization';
import i18n from 'i18n-js';
const en = {
  title: 'DinDin',
  subtitle: 'connecting food lovers',
};
const ar = {
  foo: 'الدين الدين',
  bar: 'توصيل عشاق الطعام',
};

i18n.fallbacks = true;
i18n.translations = { ar, en };
i18n.locale = Localization.locale;
export default class Splash extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image style={styles.image} source={require('../assets/Illustration.png')}/>
                    <Text style={styles.title}> {i18n.t('title')}</Text>
                    <Text style={styles.connecting}>{i18n.t('subtitle')}</Text>
                </View>

                <View>
                    <TouchableHighlight underlaycolor={'rgb(55,190,255)'} style={styles.button} onPress={this.handlePress}>
                        <LinearGradient 
                            start={[0,1]}
                            end={[0.53, 0.4]}
                            colors={[ '#0F8CFF', '#1AB9FF',]} 
                            style={styles.button}>
                            <Text style={styles.startedText}>Get Started</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>

            </View>
        );

    }

    handlePress = () => {
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    contentContainer:{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },

    image:{
        width: 275,
        height: 259,
        //resizeMode: 'cover',
    },

    title:{
        marginTop: 70,
        // width: 88,
        // height: 39,
        color: "#353535",
        fontFamily: "Helvetica",
        fontSize: 29,
        fontWeight: "400",
        lineHeight: 39,
        textAlign: 'center',
    },

    connecting:{
        // width: 300,
        // height: 18,
        opacity: 0.5,
        fontFamily: "Helvetica",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 19,
        textAlign: 'center',
    },

    button: { 
        width: '100%', 
        height: 60,
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset:{  width: -3,  height: 59,  },
        shadowColor: 'rgba(5,36,121,0.05)',

    },

    startedText: {
        color: "#ffffff",
        fontFamily: "Helvetica",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 19,
        textAlign: 'center',
    }
    
})