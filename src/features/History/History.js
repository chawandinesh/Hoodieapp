import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../common/Header/HeaderNoIconRight';
import SearchList from '../Search/SearchList';
import { HEIGHT } from '../../config';
import R from '../../assets/R';
import i18n from '../../assets/languages/i18n';

class History extends PureComponent {
  render() {
    return (
      <View style={styles.conatiner}>
        <View style={styles.headerView}>
          <Header header="Viewed" />
        </View>
        <SearchList data={this.props.history} text={i18n.t('EMPTY')} />
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
  history: state.userReducers.history
})
export default connect(mapStateToProps)(History);
