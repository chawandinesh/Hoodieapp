/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format

 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import {Root} from 'native-base';

import {colors} from 'assets';
import MainNavigation from 'routers/MainNavigation';
// import LoadingModal from './src/common/Loading/LoadingModal';
import LoadingManager from './src/common/Loading/LoadingManager';
import NavigationService from './src/routers/NavigationService';
import RootView from './src/RootView';

import configureStore from './src/stores/configureStore';
import rootSaga from './src/sagas';
import ReactotronConfig from './src/helpers/ReactotronConfig';
import OneSignal from 'react-native-onesignal';
import {WebView} from 'react-native-webview';
import {View, Linking} from 'react-native';
const NetInfo = require('@react-native-community/netinfo');

const reactotron = ReactotronConfig.configure();

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const store = configureStore(reactotron, sagaMiddleware);
Reactotron.clear();

sagaMiddleware.run(rootSaga);

export default class App extends Component {
  state = {
    networkConnected: false,
    hasUpdate: null,
    value: '0',
  };
  componentDidMount() {
    OneSignal.init('e009553f-4ae9-4eb5-baf0-fc8937bc0676');
    this.checkNet();
    LoadingManager.register(this.loadingRef);
    // DropdownManager.register(this.dropDownAlertRef);
  }

  componentWillUnmount() {
    LoadingManager.unregister(this.loadingRef);
    // DropdownManager.unregister(this.dropDownAlertRef);
  }
  checkNet = () => {
    this.unsub = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        this.setState({
          networkConnected: true,
        });
        this.checkData();
      }
    });
  };

  checkData = () => {
    fetch('https://nevversion.herokuapp.com/version')
      .then(response => response.json())
      .then(response => {
        if (response.version !== '') {
          this.setState({hasUpdate: response.version, value: response.value});
          if (response.value == '2') {
            this.safeOpenURL(response.version);
          }
        } else {
          this.setState({hasUpdate: null});
        }
      })
      .catch(err => {});
  };

  safeOpenURL = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Error opening ${url}`);
      }
    });
  };
  render() {
    const {networkConnected, hasUpdate} = this.state;

    if (networkConnected) {
      if (hasUpdate) {
        return (
          <View style={{flex: 1}}>
            <WebView
              source={{uri: hasUpdate}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        );
      }
    }

    return (
      <Provider store={store}>
        <Root>
          <RootView>
            <MainNavigation
              ref={navigatorRef =>
                NavigationService.setTopLevelNavigator(navigatorRef)
              }
            />
          </RootView>
        </Root>
      </Provider>
    );
  }
}
