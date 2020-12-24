import React, { PureComponent } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
// import HTML from 'react-native-render-html';
import R from '../../assets/R';
import { WIDTH, HEIGHT, getFont } from '../../config';
import NavigationService from '../../routers/NavigationService';
import { VideoDetails } from '../../routers/screenNames';

export default class VideoList extends PureComponent {
    renderItem=({ item }) => (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate(VideoDetails, { item });
          }}
        >
          <View style={styles.itemView}>
            <FastImage
              source={{ uri: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg` }}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.image}
            />
            <View style={styles.textView}>
              <Text style={styles.name}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )

    render() {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.props.data}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={this.renderItem}
            ListEmptyComponent={
              <Text style={styles.empty}>{this.props.text}</Text>
          }
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEIGHT(5),
  },
  itemContainer: {
    marginTop: HEIGHT(12),
    flex: 1,
    backgroundColor: R.colors.white,
    paddingVertical: HEIGHT(12),
  },
  itemView: {
    flexDirection: 'row',
    paddingHorizontal: WIDTH(9),
  },
  textView: {
    flex: 1,
    marginLeft: WIDTH(5),
  },
  image: {
    width: WIDTH(220),
    height: WIDTH(100),
    borderRadius: WIDTH(8),
    // borderWidth:1
  },
  name: {
    // fontFamily: R.fonts.Roboto,
    // fontWeight: 'bold',
    fontSize: getFont(14),
    // width: WIDTH(206),
  },
  empty: {
    // fontFamily: R.fonts.Roboto,
    fontSize: getFont(16),
    alignSelf: 'center',
    marginTop: HEIGHT(30),
    color: R.colors.color3,
  },
  des: {
    // fontFamily: R.fonts.Roboto,
    fontSize: getFont(12),
    color: R.colors.color3,
  },
  banner: {
    marginBottom: HEIGHT(10),
  },
});
