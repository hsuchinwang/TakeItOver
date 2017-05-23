'use strict'
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
export default class TabTwoScreenOne extends React.Component {
static navigationOptions = ({ navigation, tintColor }) => {
  const {state, setParams} = navigation;
  //const isInfo = state.params.mode === 'info';
  //const {user} = state.params;
  return {
    //title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
    title: '九宮格解謎',
    /*headerRight: (
    <Icon.Button name="qrcode" backgroundColor="#3b5998" onPress={() => alert('123')}>
    </Icon.Button>
    ),*/
  };
};
  render(){
    return(
      <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View title="1" style={styles.row1}>
            <View title="1" onPress={ () => {alert('A');} } style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
          </View>
          <View title="1" style={styles.row1}>
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
          </View>
          <View title="1" style={styles.row1}>
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
          </View>
          <View title="1" style={styles.row1}>
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
          </View>
          <View title="1" style={styles.row1}>
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
          </View>
          <View title="1" style={styles.row1}>
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
          </View>
          <View title="1" style={styles.row1}>
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
            <View title="1" style={styles.row1Item} />
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabTwoScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'blue',
            marginTop:20
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  contentContainer: {
    paddingVertical: 1,
  },
  row1: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'nowrap',
  },
  row1Item: {
    flexShrink:1,
    width: '100%',
    height:50,
    margin: 0.5,
    backgroundColor: 'red',
  }
});