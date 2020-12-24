import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Modal, TouchableOpacity } from 'react-native';
import { images, colors } from 'assets';

export default class BaseAlert extends React.Component {
  state = {
    show: this.props.show || false,
  };

  static getDerivedStateFromProps(props, state) {
    return { show: props.show };
  }

  render() {
    let { show } = this.state;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={() => { console.log('onRequestClose') }}
      >
        <TouchableOpacity style={style.blackStyle} onPress={this.props.closeModal}>
          <StatusBar barStyle="light-content" backgroundColor={colors.black0} />
          <View style={style.body}>
            <View style={style.content}>
              <View style={style.headerView}>
                <Text style={style.headerText}>Thông báo</Text>
              </View>
              <Image source={images.circleCheck} style={style.circleCheck} />
              <Text style={style.message}>{this.props.message || 'Đã gửi thông báo khẩn'}</Text>
            </View>

          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
  
  closeModal = () => {
    this.setState({ show: false })
  }
}

const style = StyleSheet.create({
  blackStyle: {
    flex: 1,
    backgroundColor: colors.black40p,
    justifyContent: 'center'
  },
  body: {
    width: '80%',
    backgroundColor: colors.white100,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10
  },
  iconBackStyle: {
    // tintColor: colors.white100
    width: 25,
    height: 25
  },
  contentHeadStyle: {
    backgroundColor: colors.black40p,
    borderBottomWidth: 0
  },
  headerView: {
    borderBottomColor: colors.borderE,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  headerText: {
    color: colors.primaryColor,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  message: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black3,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 15,
    textAlign: 'center'
  },
  circleCheck: {
    alignSelf: 'center',
    marginVertical: 10,
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
});
