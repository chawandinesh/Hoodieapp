import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { HEIGHT } from '../../config';
import Header from '../../common/Header/HeaderNoIconRight';
import R from '../../assets/R';

export default class Video extends PureComponent {
  render() {
    let item = this.props.navigation.getParam('item');
    let html = `https://www.youtube.com/embed/${item.id}`;
    return (
      <View style={styles.container}>
        <Header header={item.title} />
        <View style={styles.webView}>
          <WebView allowsFullscreenVideo={true} source={{ uri: html }} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.color1
  },
  webView: {
    marginTop: HEIGHT(20),
    height: HEIGHT(250),
  },
});
