import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchScreen from './screens/SearchScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const AppNavigator = createStackNavigator(
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
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

export class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
