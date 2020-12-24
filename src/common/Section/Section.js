import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
// import i18n from '../../assets/languages/i18n';
import R from '../../assets/R';
import { HEIGHT, WIDTH, getFont } from '../../config';

Icon.loadFont();

Icon.loadFont();

export default class Section extends PureComponent {
  render() {
    // console.log(this.props.data.length);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.image}
          onPress={() => {
            this.props.navigation.navigate('MoreFood', {
              header: this.props.header,
              data: this.props.data,
            });
          }}
        >
          <View style={styles.item}>
            <ImageBackground source={this.props.image} style={styles.image} imageStyle={styles.image2}>
              <Text style={styles.headerText}>{this.props.header}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: R.colors.white,
    marginTop: HEIGHT(10),
    // borderWidth: 1,
    height: HEIGHT(200)
  },
  headerText: {
    // fontFamily: R.fonts.Roboto,
    fontSize: getFont(30),
    fontWeight: 'bold',
    color: R.colors.white,
    marginTop: HEIGHT(100),
    marginLeft: WIDTH(50)
  },
  image: {
    flex: 1,
  },
  image2: {
    resizeMode: 'cover',
    borderRadius: WIDTH(10)
  },
  item: {
    flex: 1,
    marginHorizontal: WIDTH(5),
  },
});
