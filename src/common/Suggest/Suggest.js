import React, { PureComponent } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import R from '../../assets/R';
import { HEIGHT, WIDTH } from '../../config';

export default class Suggest extends PureComponent {
  render() {
    return (
      <View style={styles.container} showButton={true}>
        <Swiper paginationStyle={{ position: 'absolute', bottom: HEIGHT(2) }} autoplay={false} autoplayDirection={true} autoplayTimeout={2.5} dotStyle={styles.dot} activeDotStyle={styles.dotActive}>
          {
              this.props.suggest.map((item) => (
                <View style={styles.item}>
                  <ImageBackground source={{ uri: item }} style={styles.image} imageStyle={styles.image2} />
                </View>
              ))
          }
        </Swiper>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: WIDTH(375),
    height: WIDTH(375 * 1440 / 1080),
    // marginTop: HEIGHT(10),
    // paddingLeft: WIDTH(5),
    backgroundColor: R.colors.white
  },
  item: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  image2: {
    resizeMode: 'contain',
  },
  dot: {
    backgroundColor: null,
    borderColor: R.colors.white,
    borderWidth: 1,
  },
  dotActive: {
    backgroundColor: R.colors.white,
  },
  // name:{
  //   color: R.colors.white
  // }
})
