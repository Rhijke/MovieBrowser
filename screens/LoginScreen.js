import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Login from '../Login';

export default class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Login'
  });

  render() {
    return <Login navigation={this.props} />;
  }
}
