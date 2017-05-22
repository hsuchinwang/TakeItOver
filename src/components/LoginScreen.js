import React, { PropTypes } from 'react';
import { Button, StyleSheet, Text, View , ScrollView, TouchableOpacity} from 'react-native';

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
/*
const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Take it over9000
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"
    />
  </View>
);*/

const LoginScreen = ({ navigation }) => (
  <View>
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View title="1" style={styles.row1}>
      <TouchableOpacity onPress={ () => {alert('A');} }>
        <View title="1" onPress={ () => {alert('A');} } style={styles.row1Item} />
      </TouchableOpacity>
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
  </View>
);

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

export default LoginScreen;
