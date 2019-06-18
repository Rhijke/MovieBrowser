import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Constants from 'expo-constants';

export default class App extends React.Component {
  state = {
    search: '',
    pickerTitle: true,
    pickerValue: 'Title'
  };

  updateSearch = search => {
    this.setState({ search });
  };
  checkPicker = () => {
    if (this.state.pickerTitle) return 'Enter Movie Title';

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
          onValueChange={itemValue => this.changePicker(itemValue)}
          mode={'dialog'}
        >
          <Picker.Item label="Title" value="title" />
          <Picker.Item label="IMDB" value="imdb" />
        </Picker>
        <SearchBar
          placeholder={this.checkPicker()}
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <Text> {this.state.search}</Text>
        <Text> </Text>
      </View>
    );
    ncm;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
