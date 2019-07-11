import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from './Firebase';

// Login class
export class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loggedIn: false
  };
  componentDidMount() {
    console.disableYellowBox = true;
  }

  createAccount = () => {
    if (this.checkInput()) return;
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        return firebase
          .firestore()
          .collection('users')
          .doc(cred.user.uid)
          .set({
            savedMovies: []
          });
      })
      .then(() => this.onLoginSuccess.bind(this))
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
    if (this.checkInput()) return;
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
      loggedIn: true
    });
    this.props.handleLogin();
  };
  onLoginFailure = errorMessage => {
    this.setState({ error: errorMessage, loading: false });
  };
  checkInput = () => {
    if (this.state.password < 3 && this.state.email < 3) return true;
    return false;
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
                  onPress: () =>
                    this.setState({
                      error: ''
                    }),
                  style: 'cancel'
                },
                {
                  text: 'OK',
                  onPress: () =>
                    this.setState({
                      error: ''
                    })
                }
              ],
              { cancelable: false }
            )
          : null}
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
