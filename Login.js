import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCM7nqiP7fIsuEAbTe13_DyD3Rb9NveJX0',
  authDomain: 'moviebrowser-bec79.firebaseapp.com',
  databaseURL: 'https://moviebrowser-bec79.firebaseio.com',
  projectId: 'moviebrowser-bec79',
  storageBucket: 'moviebrowser-bec79.appspot.com',
  messagingSenderId: '268555326444',
  appId: '1:268555326444:web:be549131c3d837c3'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login class
export class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loggedIn: false
  };

  createAccount = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          this.onLoginFailure.bind(this)('Weak password!');
        } else {
          this.onLoginFailure.bind(this)(errorMessage);
        }
      });
  };
  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        this.onLoginFailure.bind(this)(errorMessage);
      });
  };
  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      loggedIn: true
    });
  };
  onLoginFailure = errorMessage => {
    this.setState({ error: errorMessage, loading: false });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <Button
          buttonStyle={styles.loginButton}
          title="Login"
          onPress={this.login.bind(this)}
        />
        <Button
          buttonStyle={styles.createButton}
          title="Create an account"
          onPress={this.createAccount.bind(this)}
        />
        {this.state.error
          ? Alert.alert(
              'Error',
              `${this.state.error}`,
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel'
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
              ],
              { cancelable: false }
            )
          : null}
        {this.state.loggedIn ? (
          <Button onPress={this.props.handleLogin} title="You can login now." />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomColor: 'darkorchid',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  loginButton: {
    backgroundColor: '#9932CC',
    margin: 10
  },
  createButton: {
    backgroundColor: '#9932CC',
    margin: 10
  },
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red',
    margin: 10
  }
});

export default Login;
