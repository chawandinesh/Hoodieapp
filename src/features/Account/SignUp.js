import React, {Component} from 'react';
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
import {firebaseApp} from '../../firebase/config';
import Header from '../../common/Header/HeaderNoIconRight';
import {WIDTH, HEIGHT} from '../../config';
import R from '../../assets/R';
import {SignIn} from '../../routers/screenNames';
import NavigationService from '../../routers/NavigationService';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
    };
  }

  register = () => {
    if (
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.password2 === ''
    ) {
      Alert.alert('Please enter full details');
    } else if (this.state.password !== this.state.password2) {
      Alert.alert("Those passwords didn't match. Try again.");
    } else if (this.state.password.length < 8) {
      Alert.alert('Use 8 characters or more for your password');
    } else {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          Alert.alert(
            'Notice',
            `Register success \n${this.state.email}`,
            [
              {
                text: 'OK',
                onPress: () => NavigationService.navigate(SignIn),
              },
            ],
            {cancelable: false},
          );
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
          <Header header="Sign up" navigation={this.props.navigation} />
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
            onChangeText={email => this.setState({email})}
          />
          <TextInput
            autoCapitalize="none"
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={password => this.setState({password})}
          />
          <TextInput
            autoCapitalize="none"
            value={this.state.password2}
            placeholder="Confirm password"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={password2 => this.setState({password2})}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.register()}>
              <Text style={styles.textLog}>Sign Up</Text>
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
  },
  logo: {
    width: WIDTH(150),
    height: WIDTH(150),
    marginTop: HEIGHT(20),
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
  },
});
