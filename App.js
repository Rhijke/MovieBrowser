import React from 'react';
import { StyleSheet, Text, View, Picker, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Constants from 'expo-constants';
import { fetchMovies } from './api';
import ScrollViewMovies from './ScrollViewMovies';

export default class App extends React.Component {
  state = {
    search: '',
    pickerTitle: true,
    pickerValue: 'Title',
    results: []
  };

  updateSearch = search => {
    this.setState({ search });
  };

  doneSearch = async () => {
    let movie = await fetchMovies(this.state.search);
    this.setState(prevState => ({
      results: movie
    }));
    // setTimeout(() => console.log(this.state.results), 1000);
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
      pickerValue: itemValue
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
          <ScrollViewMovies movies={this.state.results} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
