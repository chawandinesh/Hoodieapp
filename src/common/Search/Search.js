import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import i18n from '../../assets/languages/i18n';
import R from '../../assets/R';
import { HEIGHT, WIDTH, getFont } from '../../config';

Icon.loadFont();

Icon.loadFont();

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="md-search" size={WIDTH(20)} color="#3E4152FF" />
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          placeholder={i18n.t('SEARCH')}
          onChangeText={(text) => {
            this.setState({ text });
            this.props.func(text);
          }}
        />

        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => {
            this.setState({ text: '' });
            this.props.func('');
          }}
        >
          <Icon
            name="ios-close-circle-outline"
            size={WIDTH(15)}
            color={this.state.text === '' ? 'transparent' : '#3E4152FF'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH(15),
    backgroundColor: R.colors.color1,
    borderRadius: WIDTH(10),
    marginRight: WIDTH(15),
    marginVertical: HEIGHT(10),
  },
  textInput: {
    // fontFamily: R.fonts.Roboto,
    fontSize: getFont(16),
    padding: WIDTH(0),
    height: HEIGHT(40),
    width: WIDTH(223),
    marginHorizontal: WIDTH(8),
  },
});
