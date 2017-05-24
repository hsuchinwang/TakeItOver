'use strict'
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
export default class TabFourScreenOne extends React.Component {
  static navigationOptions = {
    title: '領土爭奪戰',
  }
  render(){
    return(
      <BackgroundImage url="Fire">
        <Text style={styles.text}>{ 'Tab Four Screen One' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabFourScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'pink',
            marginTop:20
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => {alert('123');} }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'white',
            marginTop:20
          }}>
          <Text>{'dispatch Action Go to next screen this tab'}</Text>
        </TouchableOpacity>
      </BackgroundImage>
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