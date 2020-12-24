/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import R from '../../assets/R';
import { WIDTH, getFont, popupOk } from '../../config';
import { updateFavorite, updateHistory, addItem } from '../../actions';
import NavigationService from '../../routers/NavigationService';
import { Cart, Favorite, Search } from '../../routers/screenNames';
import Suggest from '../../common/Suggest/Suggest';

class Details extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.navigation.getParam('item');
    this.state = {
      modalShow: false
    }
  }

  changeFavorite = findResult => {
    this.props.updateFavorite(findResult, this.item);
  };

  componentDidMount() {
    this.props.updateHistory(this.item);
  }

  renderSpe=({ item }) => (
    <View style={{ flex: 1, marginHorizontal: WIDTH(12), borderBottomWidth: 1, borderBottomColor: R.colors.color16 }}>
      <Text style={styles.keySpe}>{item.key}</Text>
      <Text style={styles.valSpe}>{item.value}</Text>
    </View>
  )

  render() {
    let findResult = this.props.favorite.findIndex(it => it.id === this.item.id) !== -1;
    let findBag = this.props.cart.findIndex(it => it.id === this.item.id) !== -1;
    let art = Object.keys(this.item.articleAttributes).map((key) => ({
      key,
      value: this.item.articleAttributes[key]
    }));
    // console.log(art);
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => NavigationService.pop()}>
            <FastImage source={R.images.back} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{this.item.brand}</Text>
          <TouchableOpacity onPress={() => NavigationService.navigate(Search)}>
            <FastImage source={R.images.search} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate(Favorite)}>
            <FastImage source={R.images.favorite} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate(Cart)}>
            <View style={styles.bagNumView}>
              <Text style={styles.bagNum}>{this.props.cart.length}</Text>
            </View>
            <FastImage source={R.images.bag} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Suggest suggest={this.item.image} />
          <Text style={styles.name}>{this.item.name}</Text>
          <Text style={styles.price}>{`$${this.item.price}`}</Text>
          <View style={styles.hr} />
          {this.item.attributes.map((it) => (
            <View>
              <Text style={styles.titAttri}>{it.attributeName}</Text>
              <Text style={styles.valAttri}>{it.value}</Text>
            </View>
          ))}
          <View style={[styles.hr, { marginTop: WIDTH(10) }]} />
          <Text style={styles.titAttri}>Specifications</Text>
          <FlatList data={art} numColumns={2} renderItem={this.renderSpe} contentContainerStyle={{ }} />
          <View style={[styles.hr, { marginTop: WIDTH(10) }]} />
          <Text style={styles.titAttri}>Manufacturer</Text>
          <Text style={styles.valAttri}>{this.item.manufacturer}</Text>
          <Text style={styles.titAttri}>Country of origin</Text>
          <Text style={[styles.valAttri, { marginBottom: WIDTH(8) }]}>{this.item.countryOfOrigin}</Text>
        </ScrollView>
        <View style={styles.sortFilterView}>
          <TouchableOpacity style={styles.sortButton} onPress={() => this.changeFavorite(findResult)}>
            <AntDesign
              name={findResult === true ? 'star' : 'staro'}
              size={WIDTH(19)}
              color={R.colors.color18}
            />
            <Text style={styles.sortText}>WISHLIST</Text>
          </TouchableOpacity>
          {findBag ? (
            <TouchableOpacity style={[styles.sortButton, { width: WIDTH(200), backgroundColor: R.colors.color18, borderColor: R.colors.color18 }]} onPress={() => NavigationService.navigate(Cart)}>
              <FastImage source={R.images.whitebag} resizeMode={FastImage.resizeMode.contain} style={styles.sortIcon} />
              <Text style={[styles.sortText, { color: R.colors.white100 }]}>GO TO BAG</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.sortButton, { width: WIDTH(200), backgroundColor: R.colors.color18, borderColor: R.colors.color18 }]} onPress={() => { this.props.addItem(this.item); popupOk('Notification', 'Add to the bag successfully!'); }}>
              <FastImage source={R.images.whitebag} resizeMode={FastImage.resizeMode.contain} style={styles.sortIcon} />
              <Text style={[styles.sortText, { color: R.colors.white100 }]}>ADD TO BAG</Text>
            </TouchableOpacity>)}

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    paddingVertical: WIDTH(15),
    paddingLeft: WIDTH(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: WIDTH(18)
  },
  icon: {
    width: WIDTH(25),
    height: WIDTH(25)
  },
  headerText: {
    fontSize: getFont(16),
    fontWeight: 'bold',
    width: WIDTH(200)
  },
  bagNumView: {
    position: 'absolute',
    backgroundColor: R.colors.color18,
    width: WIDTH(18),
    height: WIDTH(18),
    borderRadius: WIDTH(9),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    left: WIDTH(18),
    top: WIDTH(-5)
  },
  bagNum: {
    color: R.colors.white100,
    fontSize: getFont(13)
  },
  name: {
    paddingHorizontal: WIDTH(12),
    marginTop: WIDTH(10),
    fontSize: getFont(16)
  },
  price: {
    fontWeight: 'bold',
    fontSize: getFont(18),
    paddingHorizontal: WIDTH(12),
    marginBottom: WIDTH(10),
  },
  hr: {
    height: WIDTH(8),
    backgroundColor: R.colors.color19
  },
  titAttri: {
    fontWeight: 'bold',
    fontSize: getFont(18),
    paddingHorizontal: WIDTH(12),
    marginTop: WIDTH(10),
    color: R.colors.color21
  },
  valAttri: {
    fontSize: getFont(14),
    paddingHorizontal: WIDTH(12),
    color: R.colors.color21
    // marginBottom: WIDTH(10),
  },
  keySpe: {
    color: R.colors.color20,
    fontSize: getFont(13)
  },
  valSpe: {
    color: R.colors.color21,
    fontSize: getFont(14)
  },
  sortFilterView: {
    backgroundColor: R.colors.white100,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: R.colors.color16,
    borderTopWidth: 1,
    paddingHorizontal: WIDTH(12),
    paddingVertical: WIDTH(8),
    justifyContent: 'space-between',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH(140),
    height: WIDTH(42),
    borderWidth: 1,
    borderRadius: WIDTH(8),
    borderColor: R.colors.color20
  },
  sortIcon: {
    width: WIDTH(18),
    height: WIDTH(18)
  },
  sortText: {
    fontWeight: 'bold',
    color: R.colors.color15,
    fontSize: getFont(16),
    marginLeft: WIDTH(4)
  },
});

const mapStateToProps = state => ({
  favorite: state.userReducers.favorite,
  history: state.userReducers.history,
  cart: state.userReducers.cart,
});
export default connect(mapStateToProps, { updateFavorite, updateHistory, addItem })(
  Details,
);
