import React from 'react';
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
