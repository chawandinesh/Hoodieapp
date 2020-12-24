import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { HEIGHT, WIDTH, getFont } from '../../config';
import R from '../../assets/R';
import NavigationService from '../../routers/NavigationService';
import { Cart } from '../../routers/screenNames';

Ionicons.loadFont();

class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => NavigationService.pop()}
        >
          <Ionicons
            name="ios-chevron-back"
            size={WIDTH(30)}
            color={R.colors.black0}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{this.props.header}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => NavigationService.navigate(Cart)}
        >
          <View style={styles.numberView}>
            <Text style={styles.number}>{this.props.cart.length}</Text>
          </View>
          <FastImage source={R.images.cart} resizeMode={FastImage.resizeMode.contain} style={styles.iconCart} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // height: HEIGHT(70),
    paddingVertical: WIDTH(20),
    width: WIDTH(375),
    alignItems: 'center',
    backgroundColor: R.colors.white100,
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
    fontSize: getFont(20),
    color: R.colors.black0,
    width: WIDTH(260),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  numberView: {
    position: 'absolute',
    backgroundColor: R.colors.color13,
    width: WIDTH(20),
    height: WIDTH(20),
    borderRadius: WIDTH(10),
    zIndex: 1,
    left: WIDTH(25),
    top: WIDTH(-10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: R.colors.white100,
    fontSize: getFont(12)
  },
  iconCart: {
    width: WIDTH(32),
    height: WIDTH(32),
  },
});

const mapStateToProps = state => ({
  cart: state.userReducers.cart,
});
export default connect(mapStateToProps)(Header);
