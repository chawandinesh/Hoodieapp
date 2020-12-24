// Thành công, may mắn, hạnh phúc.
import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

// import OneSignal from 'react-native-onesignal';
import AsyncStorageUtils from 'helpers/AsyncStorageUtils';
import { connect } from 'react-redux';
import StoreRatingModal from './common/StoreRating/StoreRatingModal';
import R from './assets/R';
// import { OneSignalKey } from './config/Setting';

class RootView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeNotif: 3,
    };
  }

  componentWillUnmount() {}

  onReceived = () => {
    this.props.fetchThongBao({
      token: this.props.Account.token,
      content: this.props.Account.MaSV,
    });
  };

  onOpened = async ({ notification }) => {
    // if (notification.payload.additionalData.type === 1) {
    //   clearTimeout(this.timeout)
    //   this.timeout = setTimeout(() => {
    //     NavigationService.reset('NotiScreen')
    //   }, 2000);
    // }
    // if (notification.payload.additionalData.type === 0) {
    //   let mData = notification.payload.additionalData;
    //   let avatar = images.logoMain;
    //   if (mData.anhDaiDien !== undefined && mData.anhDaiDien.length > 0) {
    //     avatar = { uri: mData.anhDaiDien }
    //   }
    //   clearTimeout(this.timeout)
    //   this.timeout = setTimeout(() => {
    //     NavigationService.reset('Chat', {
    //       item: {
    //         participant: {
    //           _id: mData.idNguoiGui,
    //           hoTen: notification.payload.title,
    //           soDienThoai: mData.soDienThoai === undefined ? '' : mData.soDienThoai,
    //           anhDaiDien: avatar
    //         },
    //         name: mData.conversationName,
    //         fromScreen: true
    //       },
    //       refreshData: () => { }
    //     })
    //   }, 2000);
    // }
  };

  onIds = (device) => {
    // AsyncStorageUtils.save(AsyncStorageUtils.KEY.SAVE_TOKEN_NOTI, device.userId)
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.containertTop} />
        <SafeAreaView style={styles.containerBottom}>
          {this.props.children}
          <StoreRatingModal />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containertTop: {
    flex: 0,
    backgroundColor: R.colors.white,
  },
  containerBottom: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
});
function mapStateToProps(state) {
  return {
    Account: state.userReducers.data,
  };
}

export default connect(mapStateToProps, {})(RootView);
