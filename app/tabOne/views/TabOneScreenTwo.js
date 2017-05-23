'use strict'
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
export default class TabOneScreenTwo extends React.Component {
  static navigationOptions = {
    title:'工作坊',
    drawerLabel: '工作坊',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={'ios-eye'}
        size={Platform == 'ios' ? 26 : 20}
        style={{ color: tintColor }}
      />
    ),
  };
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab One Screen Two' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'purple',
            marginTop:20
          }}>
          <Text>{'Go back a screen this tab'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
