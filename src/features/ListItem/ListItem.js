/* eslint-disable react/no-string-refs */
import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../common/Header/HeaderCart';
import SearchList from '../Search/SearchList';
import R from '../../assets/R';
import i18n from '../../assets/languages/i18n';

export default class ListItem extends PureComponent {
  render() {
    let title = this.props.navigation.getParam('title');
    let data = this.props.navigation.getParam('data');
    return (
      <View style={styles.conatiner}>
        <Header header={title} />
        <SearchList data={data} text={i18n.t('NOT_FOUND')} />
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
    // marginBottom: HEIGHT(5)
  }
})
