import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HEIGHT, WIDTH, getFont } from '../../config';
import R from '../../assets/R';

Icon.loadFont();

Icon.loadFont();

export default class HeaderNoIcon extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.props.header}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: HEIGHT(70),
    width: WIDTH(375),
    alignItems: 'center',
    backgroundColor: R.colors.color6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    // fontFamily: R.fonts.Roboto,
    fontSize: getFont(20),
    fontWeight: 'bold',
    color: R.colors.white100,
    width: WIDTH(200),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
