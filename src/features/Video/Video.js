import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../common/Header/HeaderNoIconRight';
import VideoList from '../Search/VideoList';
import { HEIGHT } from '../../config';
import R from '../../assets/R';
import i18n from '../../assets/languages/i18n';
import { Video } from '../Data';

export default class VideoScreen extends PureComponent {
  render() {
    return (
      <View style={styles.conatiner}>
        <View style={styles.headerView}>
          <Header header="Video" />
        </View>
        <VideoList data={Video} text={i18n.t('EMPTY')} />
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
