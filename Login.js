import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
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
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderComponent() {
    if (this.state.loggedIn) {
      return (
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
      );
    } else {
      return <Login />;
    }
  }

  createAccount = () => {
    this.setState({ error: '', loading: true });
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
      .then(this.onLoginSuccess.bind(this));
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
  componentDidUpdate() {
    if (this.state.loggedIn) this.props.navigation.navigate('Main');
  }
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

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
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
    color: 'red'
  }
});

export default Login;
