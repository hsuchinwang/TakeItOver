'use strict'
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';

export default class TabOneScreenFour extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      visible: false,
      title:'國家歷史',
      headerLeft: (
        <Ionicons.Button name="ios-menu" color="#185ffe" style={{marginLeft:13}}backgroundColor="#eeeef2" onPress={() => navigation.navigate('DrawerOpen')}>
        </Ionicons.Button>
      ),
      drawerLabel: '國家歷史',
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name={'md-cloudy-night'}
          size={Platform == 'ios' ? 26 : 20}
          style={{ color: tintColor }}
        />
      ),
    }
  };

  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text style={styles.text}>{ 'Tab One Screen Three' }</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});