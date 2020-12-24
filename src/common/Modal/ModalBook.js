/* eslint-disable react/no-string-refs */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Modal from 'react-native-modalbox';
import {HEIGHT, WIDTH, getFont} from '../../config';
import R from '../../assets/R';

export default class ModalBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      note: '',
    };
  }

  showModal = () => this.refs.myModal.open();

  book = () => {
    if (
      this.state.name === '' ||
      this.state.phone === '' ||
      this.state.email === '' ||
      this.state.address === ''
    ) {
      Alert.alert('Notice', 'Please fill out the form');
    } else {
      Alert.alert(
        'Notice',
        'Schedule a successful consultation. We will contact and advise you later.',
      );
      this.refs.myModal.close();
      this.setState({name: '', phone: '', email: '', address: '', note: ''});
    }
  };

  render() {
    return (
      <Modal
        useNativeDriver={false}
        ref="myModal"
        swipeToClose={false}
        position="center"
        style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.label}>Name: *</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
          />
          <Text style={styles.label}>Phone number: *</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.textInput}
            value={this.state.phone}
            onChangeText={text => this.setState({phone: text})}
          />
          <Text style={styles.label}>Email: *</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.textInput}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          <Text style={styles.label}>Address: *</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.address}
            onChangeText={text => this.setState({address: text})}
          />
          <Text style={styles.label}>Note:</Text>
          <TextInput
            style={[
              styles.textInput,
              {minHeight: HEIGHT(90), textAlignVertical: 'top'},
            ]}
            value={this.state.note}
            onChangeText={text => this.setState({note: text})}
            multiline={true}
          />
          <TouchableOpacity style={styles.button} onPress={() => this.book()}>
            <Text style={styles.textBt}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH(300),
    height: HEIGHT(550),
    borderRadius: WIDTH(20),
    paddingHorizontal: WIDTH(12),
  },
  title: {
    alignSelf: 'center',
    fontSize: getFont(18),
    fontWeight: 'bold',
    width: WIDTH(270),
    textAlign: 'center',
    marginTop: HEIGHT(12),
    marginBottom: HEIGHT(20),
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: WIDTH(8),
    paddingVertical: WIDTH(5),
    borderRadius: WIDTH(8),
  },
  label: {
    marginTop: HEIGHT(8),
  },
  button: {
    backgroundColor: R.colors.color7,
    borderRadius: WIDTH(12),
    width: WIDTH(90),
    height: HEIGHT(40),
    alignSelf: 'center',
    marginTop: HEIGHT(30),
    justifyContent: 'center',
  },
  textBt: {
    textAlign: 'center',
    color: R.colors.white100,
    fontSize: getFont(18),
    fontWeight: 'bold',
  },
});
