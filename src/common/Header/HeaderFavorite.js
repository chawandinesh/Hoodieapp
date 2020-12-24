import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { HEIGHT, WIDTH, getFont } from '../../config';
import R from '../../assets/R';
import NavigationService from '../../routers/NavigationService';

Icon.loadFont();

export default class HeaderFavorite extends PureComponent {
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
            onPress={() => this.props.changeFavorite(this.props.findResult)}
          >
            <AntDesign
              name={
                this.props.findResult === true ? 'star' : 'staro'
              }
              size={WIDTH(30)}
              color={R.colors.orange800}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: HEIGHT(65),
    width: WIDTH(375),
    alignItems: 'center',
    backgroundColor: R.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonView: {
    height: HEIGHT(65),
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
