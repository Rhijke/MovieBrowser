import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchScreen from './screens/SearchScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import SavedMoviesScreen from './screens/SavedMoviesScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  CreateAccount: CreateAccountScreen
});

const MainStack = createStackNavigator(
  {
    SearchMovie: SearchScreen,
    MovieDetails: MovieDetailsScreen
  },
  {
    initialRouteName: 'SearchMovie',
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#9932CC'
      }
    }
  }
);

MainStack.navigationOptions = {
  tabBarIcon: () => <Ionicons name="md-search" size={25} />
};
const MainTabs = createBottomTabNavigator(
  {
    Search: MainStack,
    SavedMovies: SavedMoviesScreen
  },
  {
    tabBarOptions: {
      activeTintColor: '#9932CC'
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Login: AuthStack,
  Main: MainTabs
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

export class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
