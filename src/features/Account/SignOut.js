import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FastIamge from 'react-native-fast-image';
import {firebaseApp} from '../../firebase/config';
import Header from '../../common/Header/HeaderNoIconRight';
import {WIDTH, HEIGHT, getFont} from '../../config';
import R from '../../assets/R';
import NavigationService from '../../routers/NavigationService';
import {SignIn, Home} from '../../routers/screenNames';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Empty',
    };
  }

  componentWillMount = async () => {
    let email = await AsyncStorage.getItem('email');
    if (email) this.setState({email});
  };

  signOut = () => {
    if (this.state.email === 'Empty') {
      NavigationService.navigate(SignIn);
    } else {
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          NavigationService.navigate(Home);
          NavigationService.reset(Home);
          AsyncStorage.setItem('email', 'Empty');
        })
        .catch(() => {
          Alert.alert('Notice', 'Error');
        });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <Header header="Account" />
          <FastIamge
            source={R.images.account}
            style={styles.logo}
            resizeMode={FastIamge.resizeMode.contain}
          />
          <Text style={styles.email}>
            {'Email: '}
            <Text style={styles.value}>{this.state.email}</Text>
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.signOut()}>
            <Text style={styles.textLog}>
              {this.state.email === 'Empty' ? 'Sign In' : 'Sign Out'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: R.colors.color1,
  },
  textInput: {
    borderBottomWidth: 1,
    width: WIDTH(270),
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  button: {
    backgroundColor: R.colors.color7,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HEIGHT(50),
  },
  logo: {
    width: WIDTH(300),
    height: WIDTH(150),
    marginTop: HEIGHT(20),
    borderRadius: WIDTH(10),
    marginBottom: 40,
  },
  buttonReg: {
    marginLeft: WIDTH(220),
    marginTop: HEIGHT(10),
  },
  textReg: {
    color: R.colors.blue400,
  },
  textLog: {
    color: R.colors.white100,
    fontSize: getFont(19),
  },
  email: {
    color: R.colors.grey600,
    fontSize: getFont(19),
    marginTop: HEIGHT(60),
  },
  value: {
    color: 'red',
  },
});
