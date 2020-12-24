import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import NavigationService from '../../routers/NavigationService';
import { WIDTH, getFont } from '../../config';
import R from '../../assets/R';

Icon.loadFont();

Icon.loadFont();

export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => NavigationService.pop()}
          >
            <FastImage source={R.images.back} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>{this.props.header}</Text>
        <View style={styles.buttonView} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // height: HEIGHT(70),
    width: WIDTH(375),
    alignItems: 'center',
    backgroundColor: R.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: WIDTH(15)
  },
  buttonView: {
    // height: HEIGHT(70),
    width: WIDTH(50),
    justifyContent: 'center',
    // borderWidth: 1
  },
  button: {
    width: WIDTH(50),
    paddingLeft: WIDTH(7),
    // borderWidth: 1
  },
  headerText: {
    // fontFamily: R.fonts.Roboto,
    fontSize: getFont(20),
    // fontWeight: 'bold',
    color: R.colors.black0,
    width: WIDTH(200),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  icon: {
    width: WIDTH(25),
    height: WIDTH(25)
  },
});
