import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Header from '../../common/Header/HeaderNoIconRight';
import CartList from '../Search/CartList';
import R from '../../assets/R';
import { getFont, WIDTH, HEIGHT, popupOk } from '../../config';
import ModalAddress from '../../common/Modal/ModalAddress';
import { LoadingComponent } from '../../common/Loading/LoadingComponent';
import { deleteCart, addOrderList } from '../../actions';
import { Home } from '../../routers/screenNames';
import NavigationService from '../../routers/NavigationService';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      isLoading: false,
      hide: false,
      modal: false,
      hoTen: '',
      sdt: '',
      diaChi: '',
      ghiChu: '',
    }
  }

  setModal = value => {
    this.setState({ modal: value });
  };

  turnoffModel = () => {
    this.setState({ modal: false });
  };

  onConfirm = async () => {
    if (this.state.hoTen === '') {
      popupOk('Notification', 'Please enter your full name!');
    } else if (this.state.sdt === '') {
      popupOk('Notification', 'Please enter the phone number!');
    } else if (this.state.diaChi === '') {
      popupOk('Notification', 'Please enter your address!');
    } else {
      this.submitOrder();
    }
  };

  onValueChange = (text, index) => {
    switch (index) {
      case 0:
        this.setState({ hoTen: text });
        break;
      case 1:
        this.setState({ sdt: text });
        break;
      case 2:
        this.setState({ diaChi: text });
        break;
      case 3:
        this.setState({ ghiChu: text });
        break;
      default:
        break;
    }
  };

  submitOrder = () => {
    clearTimeout(this.timeout);
    this.turnoffModel();
    this.setState({ isLoading: true });
    this.timeout = setTimeout(() => {
      this.setState({ modalShow: true, isLoading: false });
      this.props.addOrderList(this.props.cart);
      this.props.deleteCart();
    }, 1000);
  };

  render() {
    let subtotal = 0;
    this.props.cart.forEach((item) => {
      subtotal += parseFloat(item.price);
      return 0;
    })
    return (
      <View style={styles.container}>
        <Header header="Cart" />
        <View style={{ flex: 1 }}>
          <CartList data={this.props.cart} text="Empty" />
        </View>
        <View style={styles.totalView}>
          <View>
            <Text style={styles.totalText}>
              {`Total (${this.props.cart.length} items): `}
            </Text>
            <Text style={styles.totalValue}>{`$${Math.round(subtotal * 100) / 100}`}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (this.props.cart.length === 0) popupOk('Notification', 'The cart is empty!');
              else this.setModal(true)
            }}
          >
            <Text style={styles.orderText}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
        {this.state.isLoading && <LoadingComponent />}
        <ModalAddress
          modalVisible={this.state.modal}
          turnoffModel={this.turnoffModel}
          onPress={this.onConfirm}
          onValueChange={this.onValueChange}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalShow}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <FastImage style={styles.success} source={R.images.order} resizeMode={FastImage.resizeMode.contain} />
              <Text style={styles.textSuccess}>Order Success. Products will be shipped to you as soon as possible. Please check the product carefully before making payment to the delivery staff!</Text>
              <TouchableOpacity
                style={styles.successButton}
                onPress={() => {
                  this.setState({ modalShow: false }); NavigationService.navigate(Home);
                }}
              >
                <Text style={{ color: R.colors.white100 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.color1
  },
  totalView: {
    paddingVertical: WIDTH(18),
    backgroundColor: R.colors.color11,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  totalText: {
    fontSize: getFont(16),
  },
  totalValue: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: getFont(16),

  },
  button: {
    backgroundColor: R.colors.color18,
    width: WIDTH(200),
    height: WIDTH(35),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WIDTH(8)
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.black50p
  },
  modalView: {
    width: WIDTH(320),
    height: WIDTH(450),
    backgroundColor: R.colors.white100,
    borderRadius: WIDTH(18),
    paddingVertical: WIDTH(20)
  },
  success: {
    width: WIDTH(180),
    height: WIDTH(180),
    alignSelf: 'center'
  },
  textSuccess: {
    width: WIDTH(250),
    fontSize: getFont(20),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: WIDTH(25)
  },
  successButtonView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: HEIGHT(30)
    // borderWidth: 1
  },
  successButton: {
    // borderWidth:1,
    width: WIDTH(140),
    height: WIDTH(40),
    borderRadius: WIDTH(8),
    backgroundColor: R.colors.color6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: HEIGHT(30)
  },
  successButtonText: {
    textAlign: 'center',
    fontSize: getFont(18),
    color: R.colors.white100
  },
  orderText: {
    fontSize: getFont(18),
    color: R.colors.white100,
    fontWeight: 'bold'
  }
})

const mapStateToProps = state => ({
  cart: state.userReducers.cart,
});
export default connect(mapStateToProps, { deleteCart, addOrderList })(
  Cart
);
