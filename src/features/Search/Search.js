import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import SearchCommon from '../../common/Search/Search';
import SearchList from './SearchList';
import R from '../../assets/R';
import { WIDTH } from '../../config';
import NavigationService from '../../routers/NavigationService';
import { Total } from '../Data';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
    this.data = this.props.navigation.getParam('data');
  }

  searching = text => {
    let re = new RegExp(text, 'i');
    let result = Total.filter(item => (item.name.search(re) !== -1));
    this.setState({ result });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => NavigationService.pop()}
          >
            <FastImage source={R.images.back} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
          </TouchableOpacity>
          <SearchCommon func={this.searching} />
        </View>
        <SearchList
          data={this.state.result}
          text="Not found"
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.color1
  },
  searchView: {
    backgroundColor: R.colors.white100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: WIDTH(50),
    paddingLeft: WIDTH(7),
  },
  icon: {
    width: WIDTH(25),
    height: WIDTH(25)
  },
})
