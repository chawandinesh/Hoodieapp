import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HEIGHT, WIDTH, getFont } from '../../config';
import R from '../../assets/R';
import NavigationService from '../../routers/NavigationService';
import { Search } from '../../routers/screenNames';

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
            <Icon
              name="ios-chevron-back"
              size={WIDTH(30)}
              color={R.colors.black0}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>{this.props.header}</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => NavigationService.navigate(Search, { data: this.props.data })}
          >
            <Icon
              name="ios-search"
              size={WIDTH(30)}
              color={R.colors.color5}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: HEIGHT(70),
    width: WIDTH(375),
    alignItems: 'center',
    backgroundColor: R.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonView: {
    height: HEIGHT(70),
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
    width: WIDTH(260),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
