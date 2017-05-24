'use strict'
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TabThreeScreenOne extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const key = {
      a: '123',
      b: '222',
    }
    //const isInfo = state.params.mode === 'info';
    //const {user} = state.params;
    return {
      //title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      title: '尋寶獵人',
      headerRight: (
      <Icon.Button name="qrcode" color="#000" backgroundColor="#eeeef2" onPress={() => navigation.navigate('TabThreeScreenTwo', {name: 'Bill'})}>
      </Icon.Button>
      ),
    };
  };
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Three Screen One' }</Text>

        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabThreeScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow'
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={
            () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} })
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'deeppink',
            marginTop:20
          }}>
          <Text>{'jump to tab one'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
