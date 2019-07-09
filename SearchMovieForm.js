import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Constants from 'expo-constants';
import { fetchMovies, getPlot } from './api';
import ScrollViewMovies from './ScrollViewMovies';

export default class SearchMovieForm extends React.Component {
  state = {
    search: '',
    pickerTitle: true,
    pickerValue: 'Title',
    results: []
  };

  updateSearch = search => {
    search ? this.setState({ search }) : null;
  };

  doneSearch = async () => {
    if (this.state.search) {
      let movies = await fetchMovies(this.state.search);
      this.setState(prevState => ({
        results: movies
      }));
    }
  };
  checkPicker = () => {
    if (this.state.pickerTitle) {
      return 'Enter Movie Title';
    }
    return 'Enter IMDB Number';
  };

  changePicker = itemValue => {
    this.setState(prevState => ({
      pickerTitle: !prevState.pickerTitle,
      pickerValue: itemValue,
      results: []
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.pickerValue}
          style={{ height: 50, width: 125 }}
          onValueChange={itemValue => {
            this.changePicker(itemValue);
            this.search.clear();
          }}
          mode={'dialog'}
        >
          <Picker.Item label="Title" value="title" />
          <Picker.Item label="IMDB" value="imdb" />
        </Picker>

        <SearchBar
          ref={search => (this.search = search)}
          placeholder={this.checkPicker()}
          onChangeText={this.updateSearch}
          value={this.state.search}
          onEndEditing={this.doneSearch}
        />
        {this.state.results.length > 0 ? (
          <ScrollViewMovies
            movies={this.state.results}
            onSelectMovie={this.props.handleSelectMovie}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
