import React, { PureComponent } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import R from '../../assets/R';
import { WIDTH, HEIGHT, getFont } from '../../config';
import { Details } from '../../routers/screenNames';
import NavigationService from '../../routers/NavigationService';

export default class OrderList extends PureComponent {
  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          NavigationService.navigate(Details, { item });
        }}
      >
        <View style={styles.itemView}>
          <FastImage
            source={{ uri: item.image[0] }}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.image}
          />
          <View style={styles.textView}>
            <Text style={styles.brandItem} numberOfLines={1}>{item.brand}</Text>
            <Text style={styles.nameItem} numberOfLines={1}>{item.name.replace(`${item.brand} `, '')}</Text>
            <Text style={styles.gender} numberOfLines={1}>{`Fabric: ${item.articleAttributes.Fabric}`}</Text>
            <Text style={styles.gender}>{`Manufacturer: ${item.manufacturer}`}</Text>
            <Text style={styles.gender} numberOfLines={1}>{`Country of origin: ${item.countryOfOrigin}`}</Text>
            <Text style={styles.price} numberOfLines={1}>{`$${item.price}`}</Text>
            <View style={styles.delButton} onPress={() => this.props.removeItem(item)}>
              <Text style={styles.delText}>Being transported</Text>
            </View>
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
    marginBottom: HEIGHT(12),
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
    // height: WIDTH(90),
    marginLeft: WIDTH(8),
  },
  image: {
    width: WIDTH(120),
    height: WIDTH(120 * 1440 / 1080),
    // borderRadius: WIDTH(8),
    // borderWidth: 1
  },
  name: {
    // fontFamily: R.fonts.Roboto,
    fontWeight: 'bold',
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
  brandItem: {
    // width: WIDTH(375 / 2 - 2),
    // paddingHorizontal: WIDTH(7),
    paddingTop: WIDTH(5),
    fontWeight: 'bold',
    fontSize: getFont(15)

  },
  nameItem: {
    // width: WIDTH(375 / 2 - 2),
    // paddingHorizontal: WIDTH(7),
    fontSize: getFont(12),
    color: R.colors.black0
  },
  price: {
    fontWeight: 'bold',
    fontSize: getFont(15),
    position: 'absolute',
    bottom: WIDTH(3),
    right: WIDTH(20)
  },
  gender: {
    fontSize: getFont(12),
    color: R.colors.color3,
    marginTop: WIDTH(5)
  },
  delButton: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: WIDTH(8),
    width: WIDTH(140),
    borderColor: 'red',
    bottom: WIDTH(3)
  },
  delText: {
    textAlign: 'center',
    color: 'red',
    textAlignVertical: 'center'
  }
});
