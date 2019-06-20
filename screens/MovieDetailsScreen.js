import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title')
  });
  render() {
    return (
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>
          {this.props.navigation.getParam('title')}
        </Text>
        <Image
          source={{ uri: this.props.navigation.getParam('poster') }}
          style={{ width: 100, height: 175 }}
        />
        <Text> {this.props.navigation.getParam('plot')}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  movie: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  movieTitle: {
    fontSize: 20,
    color: 'darkorchid',
    padding: 20
  }
});
