import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import FastIamge from 'react-native-fast-image';
import AsyncStorage from '@react-native-community/async-storage';
import { firebaseApp } from '../../firebase/config';
import Header from '../../common/Header/HeaderNoIconRight';
import R from '../../assets/R';
import { WIDTH, HEIGHT } from '../../config';
import NavigationService from '../../routers/NavigationService';
import { Home, SignUp } from '../../routers/screenNames';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        NavigationService.navigate(Home);
        NavigationService.reset(Home);
        AsyncStorage.setItem('email', this.state.email);
      })
      .catch(() => {
        Alert.alert('Notice', 'The account or password is incorrect');
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Header header="Sign in" />
          <FastIamge
            source={R.images.badge}
            style={styles.logo}
            resizeMode={FastIamge.resizeMode.contain}
          />
          <TextInput
            autoCapitalize="none"
            value={this.state.email}
            placeholder="Email"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            autoCapitalize="none"
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity
            style={styles.buttonReg}
            onPress={() => NavigationService.navigate(SignUp)}
          >
            <Text style={styles.textReg}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.login()}
            >
              <Text style={styles.textLog}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: R.colors.color1
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
  },
  logo: {
    width: WIDTH(150),
    height: WIDTH(150),
    marginTop: HEIGHT(20)
  },
  buttonReg: {
    marginLeft: WIDTH(220),
    marginTop: HEIGHT(10)
  },
  textReg: {
    color: R.colors.blue400
  },
  textLog: {
    color: R.colors.white100
  }
});
