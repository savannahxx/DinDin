import * as React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {Constants} from 'expo'
export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
           <TouchableOpacity onPress={()=>{this.props.navigation.toggleDrawer()}}>
                <Image style={styles.menuIcon} source={require('../assets/sidemenu.png')}/>
            </TouchableOpacity>
                <Text style={styles.title}> DinDin</Text>
                <Image style={styles.searchIcon} source={require('../assets/search.png')} />
                
            </View>
        )
    }

}



const styles = StyleSheet.create(
    {
        container:{
            height: 80,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: Constants.statusBarHeight,
            backgroundColor: '#fff',
        },

        title:{
            letterSpacing: 0.4,
            textAlign: 'left',
            color: '#353535',
            fontFamily: "Helvetica",
            fontSize: 17,
            fontWeight: '400',
            lineHeight: 23,
        },
        
        searchIcon:{
            margin:10,
            width: 18,
            height: 18,
        },
        menuIcon:{
            margin: 10,
            width: 15,
            height: 16,
        }
        
    }
)