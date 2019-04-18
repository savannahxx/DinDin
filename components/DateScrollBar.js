import React, { Component, Dimensions } from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  AppRegistry,
  TouchableOpacity,
} from 'react-native';

const rows = [
  { name: 1, date: 'January' },
  { name: 2, date: 'February' },
  { name: 3, date: 'March' },
  { name: 4, date: 'April' },
  { name: 5, date: 'May' },
  { name: 6, date: 'June' },
  { name: 7, date: 'July' },
  { name: 8, date: 'August' },
  { name: 9, date: 'September' },
  { name: 10, date: 'October' },
  { name: 11, date: 'November' },
  { name: 12, date: 'December' },
];

const extractKey = ({ name }) => name;

export default class DateScrollBar extends Component {
  renderItem = ({ item }) => {
    return (
      <View style = {styles.dateOverallWrapper}>

          <View>
            <Text> {item.date}</Text>
          </View>
          
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        horizontal={true}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
  },
  dateOverallWrapper:{
    margin: 20,
    flexDirection: 'row',
    height: 40,
    /*
    boxShadow: 10,
    overflow: true,
    shadowOffset:{ width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  */
  },
});
