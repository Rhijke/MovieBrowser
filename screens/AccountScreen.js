import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

export default class AccountScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Settings',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#9932CC'
    }
  };
  state = {
    loggedIn: true,
    error: ''
  };
  handleLogout = () => {
    this.props.navigation.navigate('Login');
  };
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logged out');
        this.handleLogout();
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <View>
        <Button
          buttonStyle={{ justifyContent: 'center' }}
          type="outline"
          title="Logout"
          onPress={this.logout}
        />
      </View>
    );
  }
}
