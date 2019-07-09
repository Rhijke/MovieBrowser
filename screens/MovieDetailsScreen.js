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
        <View style={styles.top}>
          <Image
            source={{ uri: this.props.navigation.getParam('poster') }}
            style={{ width: 100, height: 175 }}
          />
          <View style={{ flexDirection: 'column', flexShrink: 1 }}>
            <Text style={styles.detailItem}>
              Released: {this.props.navigation.getParam('year')}
            </Text>
            <Text style={styles.detailItem}>
              Genre: {this.props.navigation.getParam('genre')}
            </Text>
            <Text style={styles.detailItem}>
              Rating: {this.props.navigation.getParam('rating')}
            </Text>
          </View>
        </View>
        <Text style={(styles.detailItem, { marginTop: 10 })}>
          {' '}
          {this.props.navigation.getParam('plot')}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  movie: {
    flex: 1,
    padding: 10,
    flexDirection: 'column'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10
  },
  movieTitle: {
    fontSize: 30,
    color: 'darkorchid',
    padding: 10,
    textAlign: 'center'
  },
  detailItem: {
    padding: 10,
    textAlign: 'left'
  }
});
