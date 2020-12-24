// @flow
import React, { Component } from 'react';
import {
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { WIDTH, HEIGHT, getFont } from '../../config';
import R from '../../assets/R';

type Props = {
  modalVisible: boolean,
  turnoffModel: Function,
};

type State = {};

class ModalAndress extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { modalVisible, turnoffModel, onValueChange, onPress } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => turnoffModel()}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.opacity}
          onPressOut={() => turnoffModel()}
        />
        <View style={styles.container}>
          <Text style={styles.nullText}>Information</Text>
          <Text style={styles.textDefault}>Name: *</Text>
          <TextInput
            placeholder="Name"
            onChangeText={text => onValueChange && onValueChange(text, 0)}
            style={styles.textInput}
          />
          <Text style={styles.textDefault}>Phone: *</Text>
          <TextInput
            placeholder="Phone"
            onChangeText={text => onValueChange && onValueChange(text, 1)}
            style={styles.textInput}
          />
          <Text style={styles.textDefault}>Address: *</Text>
          <TextInput
            placeholder="Address"
            onChangeText={text => onValueChange && onValueChange(text, 2)}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.but} onPress={() => onPress()}>
            <Text style={styles.textbut}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default ModalAndress;
const styles = StyleSheet.create({
  textbut: {
    fontSize: getFont(20),
    fontFamily: R.fonts.Roboto,
    fontWeight: 'bold',
    color: R.colors.white,
    textAlign: 'center',
  },
  but: {
    marginTop: HEIGHT(30),
    height: HEIGHT(55),
    backgroundColor: R.colors.blue,
    justifyContent: 'center',
    marginHorizontal: WIDTH(16),
    marginVertical: HEIGHT(10),
    borderRadius: 8,
  },
  textDefault: {
    fontWeight: 'bold',
    color: R.colors.black3,
    fontSize: getFont(17),
    textAlignVertical: 'center',
    marginLeft: WIDTH(16),
    marginTop: HEIGHT(16),
  },
  opacity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.grey800,
    opacity: 0.7,
  },
  container: {
    marginLeft: WIDTH(16),
    width: WIDTH(375 - 32),
    backgroundColor: R.colors.white,
    marginTop: HEIGHT(120),
    paddingVertical: HEIGHT(30),
    borderRadius: WIDTH(8),
    position: 'absolute',
  },
  txtView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: WIDTH(20),
  },
  textInput: {
    marginTop: HEIGHT(10),
    marginLeft: WIDTH(16),
    fontSize: getFont(15),
    width: WIDTH(375 - 64),
    paddingVertical: HEIGHT(10),
    paddingHorizontal: WIDTH(10),
    borderColor: R.colors.border,
    borderWidth: 1,
    borderRadius: 8,
    // minHeight: HEIGHT(30),
  },
  nullText: {
    fontWeight: 'bold',
    color: R.colors.black0,
    fontSize: getFont(25),
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  btnView: {
    backgroundColor: R.colors.color1C54,
    width: WIDTH(234),
    height: HEIGHT(45),
    borderRadius: WIDTH(30),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HEIGHT(10),
  },
  txtBtn: {
    color: R.colors.white,
    fontSize: getFont(15),
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});
