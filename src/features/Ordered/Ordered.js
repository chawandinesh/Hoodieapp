import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../common/Header/HeaderNoIconRight';
import OrderList from '../Search/OrderList';
import { HEIGHT } from '../../config';
import R from '../../assets/R';
import i18n from '../../assets/languages/i18n';

class Ordered extends PureComponent {
  render() {
    return (
      <View style={styles.conatiner}>
        <View style={styles.headerView}>
          <Header header="Ordered" />
        </View>
        <OrderList data={this.props.orderList} text={i18n.t('EMPTY')} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: R.colors.color1
  },
  headerView: {
    marginBottom: HEIGHT(5)
  }
})
const mapStateToProps = (state) => ({
  orderList: state.userReducers.orderList
})
export default connect(mapStateToProps)(Ordered);
