import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Login'
  });
  login = () => {
    this.props.navigation.navigate('Main');
  };
  createAccount = (email, password) => {
    this.props.navigation.push('CreateAccount', email, password);
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
          onPress={this.login}
        />
        <Button
          buttonStyle={styles.createButton}
          title="Create an account"
          onPress={this.createAccount}
        />
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
  }
});
