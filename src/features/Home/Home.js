/* eslint-disable react/no-string-refs */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet, Text, Modal, TouchableWithoutFeedback
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { HEIGHT, WIDTH, getFont } from '../../config';
import R from '../../assets/R';
import NavigationService from '../../routers/NavigationService';
import { Search, Favorite, History, SignOut, Details, Cart, Ordered } from '../../routers/screenNames';
import { Total } from '../Data';
import { getStorage } from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Total,
      datasort: Total,
      modalShow: false,
      sort: false,
      sortLatest: true,
      sortHightToLow: false,
      sortLowToHight: false,
      filter: false,
      attriInd: 0,
      attriFilter: [
        {
          Boys: false,
          Girls: false,
          Men: false,
          Women: false
        },
        {
          under20: false,
          under40: false,
          under60: false,
          under80: false,
          over80: false,
        },
        {
          Campus: false,
          flying: false,
          free: false,
          gap: false,
          hm: false,
          here: false,
          hrx: false,
          puma: false,
          road: false,
          sweet: false,
        }
      ]
    }
    const get = async () => {
      try {
        let storage = await AsyncStorage.getItem('state');
        if (storage === null) {
          this.props.getStorage([], [], [], []);
          return 0;
        } else {
          let sto = JSON.parse(storage);
          this.props.getStorage(sto.favorite, sto.history, sto.cart, sto.orderList);
          return 0;
        }
      } catch (e) {
        Alert.alert(e);
        return 0;
      }
    };
    get();
  }

  renderItem =({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => NavigationService.navigate(Details, { item })}
    >
      <FastImage
        source={{ uri: item.image[0] }}
        style={styles.imageItem}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.brandItem} numberOfLines={1}>{item.brand}</Text>
      <Text style={styles.nameItem} numberOfLines={1}>{item.name.replace(`${item.brand} `, '')}</Text>
      <Text style={styles.price} numberOfLines={2}>{`$${item.price}`}</Text>
    </TouchableOpacity>
  );

  ListHeaderComponent=() => (
    <View style={styles.banner}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.bannerText1}>Free Delivery</Text>
        <Text style={styles.bannerText2}>On first order</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.bannerText1}>Refund 111%</Text>
        <Text style={styles.bannerText2}>If counterfeiting is found</Text>
      </View>
    </View>
  )

  sortLatest=() => {
    this.setState({ datasort: this.state.data, sort: false, sortLatest: true, sortHightToLow: false, sortLowToHight: false });
    this.refs.flat.scrollToOffset({ offset: 0 });
  }

  sortHightToLow=() => {
    let datasort = [...this.state.data];
    datasort.sort((a, b) => (b.price - a.price));
    this.setState({ datasort, sort: false, sortLatest: false, sortHightToLow: true, sortLowToHight: false });
    this.refs.flat.scrollToOffset({ offset: 0 });
  }

  sortLowToHight=() => {
    let datasort = [...this.state.data];
    datasort.sort((a, b) => (a.price - b.price));
    this.refs.flat.scrollToOffset({ offset: 0 });
    this.setState({ datasort, sort: false, sortLatest: false, sortHightToLow: false, sortLowToHight: true });
  }

  renderAttribute=(at) => {
    switch (at) {
      case 0:
        return (
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[0].Boys = !pre.attriFilter[0].Boys;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[0].Boys ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[0].Boys ? 'bold' : 'normal' }}>Boys</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[0].Girls = !pre.attriFilter[0].Girls;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[0].Girls ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[0].Girls ? 'bold' : 'normal' }}>Girls</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[0].Men = !pre.attriFilter[0].Men;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[0].Men ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[0].Men ? 'bold' : 'normal' }}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[0].Women = !pre.attriFilter[0].Women;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[0].Women ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[0].Women ? 'bold' : 'normal' }}>Women</Text>
            </TouchableOpacity>
          </View>
        );
      case 1:
        return (
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[1].under20 = !pre.attriFilter[1].under20;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[1].under20 ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[1].under20 ? 'bold' : 'normal' }}>Under $20</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[1].under40 = !pre.attriFilter[1].under40;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[1].under40 ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[1].under40 ? 'bold' : 'normal' }}>$20 to $40</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[1].under60 = !pre.attriFilter[1].under60;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[1].under60 ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[1].under60 ? 'bold' : 'normal' }}>$40 to $60</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[1].under80 = !pre.attriFilter[1].under80;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[1].under80 ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[1].under80 ? 'bold' : 'normal' }}>$60 to $80</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[1].over80 = !pre.attriFilter[1].over80;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[1].over80 ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[1].over80 ? 'bold' : 'normal' }}>Over $80</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].Campus = !pre.attriFilter[2].Campus;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].Campus ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].Campus ? 'bold' : 'normal' }}>Campus Sutra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].flying = !pre.attriFilter[2].flying;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].flying ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].flying ? 'bold' : 'normal' }}>Flying Machine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].free = !pre.attriFilter[2].free;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].free ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].free ? 'bold' : 'normal' }}>Free Authority</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].gap = !pre.attriFilter[2].gap;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].gap ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].gap ? 'bold' : 'normal' }}>GAP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].hm = !pre.attriFilter[2].hm;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].hm ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].hm ? 'bold' : 'normal' }}>H&M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].here = !pre.attriFilter[2].here;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].here ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].here ? 'bold' : 'normal' }}>HERE&NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].hrx = !pre.attriFilter[2].hrx;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].hrx ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].hrx ? 'bold' : 'normal' }}>HRX by Hrithik Roshan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].puma = !pre.attriFilter[2].puma;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].puma ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].puma ? 'bold' : 'normal' }}>Puma</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].road = !pre.attriFilter[2].road;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].road ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].road ? 'bold' : 'normal' }}>Roadster</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attribute}
              onPress={() => this.setState((pre) => {
                pre.attriFilter[2].sweet = !pre.attriFilter[2].sweet;
                return pre;
              })}
            >
              <Ionicons name="checkmark-sharp" size={15} color={this.state.attriFilter[2].sweet ? R.colors.black0 : R.colors.color16} />
              <Text style={{ marginLeft: WIDTH(5), fontWeight: this.state.attriFilter[2].sweet ? 'bold' : 'normal' }}>SWEET ANGEL</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  }

  _filter=() => {
    let data = [...Total];
    let att = this.state.attriFilter;
    if (att[0].Boys !== false || att[0].Girls !== false || att[0].Men !== false || att[0].Women !== false) {
      data = data.filter((it) => att[0][it.gender] === true)
    }
    if (att[1].under20 !== false || att[1].under40 !== false || att[1].under60 !== false || att[1].under80 !== false || att[1].over80 !== false) {
      data = data.filter((it) => {
        if (att[1].under20 === true) {
          if (it.price < 20) return true;
        }
        if (att[1].under40 === true) {
          if (it.price < 40 && it.price >= 20) return true;
        }
        if (att[1].under60 === true) {
          if (it.price < 60 && it.price >= 40) return true;
        }
        if (att[1].under80 === true) {
          if (it.price < 80 && it.price >= 60) return true;
        }
        if (att[1].over80 === true) {
          if (it.price >= 80) return true;
        }
        return false;
      })
    }
    if (att[2].Campus === true || att[2].flying === true || att[2].free === true || att[2].gap === true || att[2].hm === true || att[2].here === true || att[2].hrx === true || att[2].puma === true || att[2].road === true || att[2].sweet === true) {
      data = data.filter((it) => {
        if (att[2].Campus === true) {
          if (it.brand === 'Campus Sutra') return true;
        }
        if (att[2].flying === true) {
          if (it.brand === 'Flying Machine') return true;
        }
        if (att[2].free === true) {
          if (it.brand === 'Free Authority') return true;
        }
        if (att[2].gap === true) {
          if (it.brand === 'GAP') return true;
        }
        if (att[2].hm === true) {
          if (it.brand === 'H&M') return true;
        }
        if (att[2].here === true) {
          if (it.brand === 'HERE&NOW') return true;
        }
        if (att[2].hrx === true) {
          if (it.brand === 'HRX by Hrithik Roshan') return true;
        }
        if (att[2].puma === true) {
          if (it.brand === 'Puma') return true;
        }
        if (att[2].road === true) {
          if (it.brand === 'Roadster') return true;
        }
        if (att[2].sweet === true) {
          if (it.brand === 'SWEET ANGEL') return true;
        }
        return false;
      })
    }
    this.refs.flat.scrollToOffset({ offset: 0 });
    this.setState({ data, datasort: data, filter: false, sortLatest: true, sortHightToLow: false, sortLowToHight: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.setState({ modalShow: true })}>
            <FastImage source={R.images.menu} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Hoodies</Text>
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
        <FlatList ref="flat" ListHeaderComponent={this.ListHeaderComponent} data={this.state.datasort} renderItem={this.renderItem} keyExtractor={(item) => item.id} numColumns={2} contentContainerStyle={{ paddingBottom: WIDTH(40) }} />
        <View style={styles.sortFilterView}>
          <TouchableOpacity style={styles.sortButton} onPress={() => this.setState({ sort: true })}>
            <FastImage source={R.images.sort} resizeMode={FastImage.resizeMode.contain} style={styles.sortIcon} />
            <Text style={styles.sortText}>SORT</Text>
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity style={styles.sortButton} onPress={() => this.setState({ filter: true })}>
            <FastImage source={R.images.filter} resizeMode={FastImage.resizeMode.contain} style={styles.sortIcon} />
            <Text style={styles.sortText}>FILTER</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalShow}
        >
          <TouchableWithoutFeedback onPress={() => this.setState({ modalShow: false })}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.drawerView}>
                  <FastImage
                    style={styles.drawerIcon}
                    resizeMode={FastImage.resizeMode.contain}
                    source={R.images.banner}
                  />
                  <TouchableOpacity style={styles.buttonFavorite} onPress={() => { NavigationService.navigate(Ordered); this.setState({ modalShow: false }) }}>
                    <FastImage source={R.images.transform} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
                    <Text style={styles.buttonTextFav}>Ordered</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonFavorite} onPress={() => { NavigationService.navigate(History); this.setState({ modalShow: false }) }}>
                    <FastImage source={R.images.viewed} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
                    <Text style={styles.buttonTextFav}>Viewed</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonFavorite} onPress={() => { NavigationService.navigate(SignOut); this.setState({ modalShow: false }) }}>
                    <FastImage source={R.images.account} resizeMode={FastImage.resizeMode.contain} style={styles.icon} />
                    <Text style={styles.buttonTextFav}>Account</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.sort}
        >
          <TouchableWithoutFeedback onPress={() => this.setState({ sort: false })}>
            <View style={styles.modalSort}>
              <TouchableWithoutFeedback>
                <View style={styles.sortView}>
                  <Text style={styles.sortBy}>SORT BY</Text>
                  <TouchableOpacity style={styles.hightLowButton} onPress={this.sortLatest}>
                    <FastImage source={R.images.latest} resizeMode={FastImage.resizeMode.contain} style={styles.hightLowIcon} />
                    <Text style={[styles.hightLowText, { fontWeight: this.state.sortLatest ? 'bold' : 'normal' }]}>Latest</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.hightLowButton} onPress={this.sortHightToLow}>
                    <FastImage source={R.images.hightLow} resizeMode={FastImage.resizeMode.contain} style={styles.hightLowIcon} />
                    <Text style={[styles.hightLowText, { fontWeight: this.state.sortHightToLow ? 'bold' : 'normal' }]}>Price: Hight to Low</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.hightLowButton} onPress={this.sortLowToHight}>
                    <FastImage source={R.images.lowHight} resizeMode={FastImage.resizeMode.contain} style={styles.hightLowIcon} />
                    <Text style={[styles.hightLowText, { fontWeight: this.state.sortLowToHight ? 'bold' : 'normal' }]}>Price: Low to Hight</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.filter}
        >
          <View style={styles.modalFilter}>
            <Text style={styles.filters}>FILTERS</Text>
            <View style={styles.filterView}>
              <View style={styles.attributeView}>
                <TouchableOpacity style={[styles.attributeButton, { backgroundColor: this.state.attriInd === 0 ? R.colors.white100 : R.colors.color17 }]} onPress={() => this.setState({ attriInd: 0 })}>
                  <Text style={{ fontSize: getFont(16), fontWeight: this.state.attriInd === 0 ? 'bold' : 'normal' }}>Gender</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.attributeButton, { backgroundColor: this.state.attriInd === 1 ? R.colors.white100 : R.colors.color17 }]} onPress={() => this.setState({ attriInd: 1 })}>
                  <Text style={{ fontSize: getFont(16), fontWeight: this.state.attriInd === 1 ? 'bold' : 'normal' }}>Price</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.attributeButton, { backgroundColor: this.state.attriInd === 2 ? R.colors.white100 : R.colors.color17 }]} onPress={() => this.setState({ attriInd: 2 })}>
                  <Text style={{ fontSize: getFont(16), fontWeight: this.state.attriInd === 2 ? 'bold' : 'normal' }}>Brand</Text>
                </TouchableOpacity>
              </View>
              {this.renderAttribute(this.state.attriInd)}
            </View>
            <View style={[styles.closeFilterView, { flexDirection: 'column' }]}>
              <TouchableOpacity style={styles.sortButton} onPress={() => this._filter()}>
                <Text style={styles.sortText}>APPLY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  banner: {
    height: WIDTH(70),
    backgroundColor: R.colors.color14,
    flexDirection: 'row'
  },
  item: {
    borderWidth: 1,
    borderColor: R.colors.color1
  },
  imageItem: {
    width: WIDTH(375 / 2 - 2),
    height: WIDTH(185.5 * 1440 / 1080),
    // borderWidth: 1
  },
  brandItem: {
    width: WIDTH(375 / 2 - 2),
    paddingHorizontal: WIDTH(7),
    paddingTop: WIDTH(5),
    fontWeight: 'bold',
    fontSize: getFont(15)

  },
  nameItem: {
    width: WIDTH(375 / 2 - 2),
    paddingHorizontal: WIDTH(7),
    fontSize: getFont(12),
    color: R.colors.color3
  },
  price: {
    fontWeight: 'bold',
    fontSize: getFont(15),
    paddingHorizontal: WIDTH(7),
    paddingBottom: WIDTH(8)
  },
  sortFilterView: {
    backgroundColor: R.colors.white100,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: R.colors.color16,
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH(374 / 2),
    height: WIDTH(42)
  },
  sortIcon: {
    width: WIDTH(15),
    height: WIDTH(15)
  },
  sortText: {
    fontWeight: 'bold',
    color: R.colors.color15,
    fontSize: getFont(16),
    marginLeft: WIDTH(4)
  },
  hr: {
    width: 1,
    height: WIDTH(15),
    backgroundColor: R.colors.color16
  },
  modalSort: {
    flex: 1,
    backgroundColor: R.colors.black50p,
    justifyContent: 'flex-end'
  },
  sortView: {
    backgroundColor: R.colors.white100,
    paddingBottom: HEIGHT(50)
  },
  sortBy: {
    borderBottomWidth: 1,
    alignSelf: 'center',
    width: WIDTH(340),
    fontWeight: 'bold',
    fontSize: getFont(16),
    color: R.colors.color15,
    paddingVertical: WIDTH(8),
    borderBottomColor: R.colors.color16,
    marginBottom: WIDTH(10)
  },
  hightLowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH(25),
    paddingVertical: WIDTH(8)
  },
  hightLowIcon: {
    width: WIDTH(20),
    height: WIDTH(20)
  },
  hightLowText: {
    color: R.colors.color15,
    marginLeft: WIDTH(10)
  },
  modalFilter: {
    flex: 1,
    backgroundColor: R.colors.white100
  },
  filters: {
    borderBottomWidth: 1,
    alignSelf: 'center',
    width: WIDTH(375),
    fontWeight: 'bold',
    fontSize: getFont(16),
    color: R.colors.color15,
    paddingTop: WIDTH(10),
    borderBottomColor: R.colors.color16,
    paddingBottom: WIDTH(20),
    paddingHorizontal: WIDTH(15)
  },
  closeFilterView: {
    backgroundColor: R.colors.white100,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: R.colors.color16,
    borderTopWidth: 1,
  },
  filterView: {
    flex: 1,
    flexDirection: 'row'
  },
  attributeView: {
    backgroundColor: R.colors.color17,
    width: WIDTH(130)
  },
  attributeButton: {
    borderBottomWidth: 1,
    borderBottomColor: R.colors.color16,
    paddingHorizontal: WIDTH(10),
    height: WIDTH(50),
    justifyContent: 'center'
  },
  attribute: {
    borderBottomWidth: 1,
    borderBottomColor: R.colors.color16,
    flexDirection: 'row',
    width: WIDTH(220),
    alignSelf: 'center',
    alignItems: 'center',
    height: WIDTH(50),
  },
  bannerText1: {
    color: R.colors.white100,
    fontSize: getFont(16),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bannerText2: {
    color: R.colors.white100,
    fontSize: getFont(14),
    textAlign: 'center'
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
  modalContainer: {
    flex: 1,
    backgroundColor: R.colors.black50p,
    flexDirection: 'row'
  },
  drawerView: {
    backgroundColor: R.colors.white100,
    width: WIDTH(250)
  },
  drawerIcon: {
    width: WIDTH(250),
    height: WIDTH(250 * 496 / 1080),
  },
  buttonFavorite: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: WIDTH(15),
    paddingVertical: HEIGHT(10)
  },
  buttonTextFav: {
    fontSize: getFont(18),
    marginLeft: WIDTH(12),
    color: R.colors.black0,
  },

})

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  cart: state.userReducers.cart,
});
export default connect(mapStateToProps, { getStorage })(Home);
