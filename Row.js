import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  movie: {
    padding: 20
  },
  title: {
    fontSize: 15,
    color: 'darkorchid'
  },
  description: {
    flexDirection: 'row'
  }
});

const Row = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.movie}
        onPress={() => props.onSelectMovie(props)}
      >
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

Row.propTypes = {
  title: PropTypes.string
};

export default Row;
