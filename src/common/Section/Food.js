import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import R from '../../assets/R';
import { WIDTH, getFont, HEIGHT } from '../../config';

export default class Food extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Details', { item: this.props.item }) }}>
          <View style={styles.itemView}>
            <FastImage style={styles.image} source={{ uri: this.props.item.image || 'https://newsroom.aaa.com/wp-content/uploads/2019/09/best-time-book-travel-holidays.jpg' }} resizeMode={FastImage.resizeMode.stretch} />
            <Text style={styles.name} numberOfLines={3}>{this.props.item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginRight: WIDTH(10)
  },
  itemView: {
  },
  image: {
    width: WIDTH(160),
    height: WIDTH(100),
    borderRadius: WIDTH(8)
  },
  name: {
    marginTop: HEIGHT(5),
    width: WIDTH(160),
    // fontFamily: R.fonts.Roboto,
    fontSize: getFont(14),
    // fontWeight: 'bold'
  }
})
