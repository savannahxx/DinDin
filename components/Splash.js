import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Constants, LinearGradient} from 'expo'; // Linea
import { TouchableHighlight } from 'react-native'; // Button Darken
import { Localization } from 'expo-localization'; // Used for Localization Languages
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import i18n from 'i18n-js'; // Used for Localization Languages
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
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image style={styles.image} source={require('../assets/Illustration.png')}/>
                    <Text style={styles.title}> {i18n.t('title')}</Text>
                    <Text style={styles.connecting}>{i18n.t('subtitle')}</Text>
                </View>

                <View>
                    <TouchableHighlight 
                        underlaycolor={'rgb(55,190,255)'} 
                        style={styles.button} 
                        onPress={()=> this.props.navigation.navigate('Home')}>
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
        //flex: .5,
        width: wp('73.33%'),
        height: hp('38.83%'),
        //width: 275,
        //height: 259,
        resizeMode: 'contain',
    },

    title:{
        marginTop: 70,
        // width: 88,
        // height: 39,
        color: "#353535",
        fontFamily: "Helvetica",
        fontSize: hp('4%'),
        fontWeight: "400",
        //lineHeight: 39,
        textAlign: 'center',
    },

    connecting:{
        // width: 300,
        // height: 18,
        opacity: 0.5,
        fontFamily: "Helvetica",
        fontSize: hp('1.8%'),
        fontWeight: "400",
        // lineHeight: 19,
        textAlign: 'center',
    },

    button: { 
        width: '100%', 
        height: hp('7.1964'),
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset:{  width: -3,  height: 59,  },
        shadowColor: 'rgba(5,36,121,0.05)',

    },

    startedText: {
        color: "#ffffff",
        fontFamily: "Helvetica",
        fontSize: hp('2%'),
        fontWeight: '400',
        // lineHeight: 19,
        textAlign: 'center',
    }
    
})