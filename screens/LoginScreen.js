import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Login from '../Login';

export default class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Login'
  });
  handleLogin = movie => {
    this.props.navigation.navigate('Search');
  };

  render() {
    return <Login handleLogin={this.handleLogin} />;
  }
}
