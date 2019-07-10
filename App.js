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
import AccountScreen from './screens/AccountScreen';

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

const SavedMoviesStack = createStackNavigator({
  _SavedMovies: SavedMoviesScreen,
  MovieDetails: MovieDetailsScreen
});
const SettingsStack = createStackNavigator({
  Settings: AccountScreen
});
const MainTabs = createBottomTabNavigator(
  {
    Search: MainStack,
    SavedMovies: SavedMoviesStack,
    Account: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Search') {
          iconName = 'md-search';
        } else if (routeName === 'SavedMovies') {
          iconName = `md-bookmark`;
        } else if (routeName === 'Account') {
          iconName = 'md-settings';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'darkorchid',
      inactiveTintColor: 'gray'
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
