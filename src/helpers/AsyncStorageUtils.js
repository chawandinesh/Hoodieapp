import AsyncStorage from '@react-native-community/async-storage';

const KEY = {
  SAVE_TOKEN_NOTI: '@SAVE_TOKEN_NOTI',
  LAST_TIME_SHOW_RATING_DIALOG: 'LAST_TIME_SHOW_RATING_DIALOG',
  CAN_SHOW_RATING_DIALOG: 'CAN_SHOW_RATING_DIALOG',
  LANG_CODE: 'LANG_CODE',
  REMEMBER_PASSWORD: 'REMEMBER_PASSWORD',
  USER: 'USER',
  USER_DATA: 'USER_DATA',
  TOKEN: 'TOKEN',
  ROLE: 'ROLE',
  IMAGE_UPLOADED: 'IMAGE_UPLOADED',
  LANGUAGE: 'LANGUAGE',
  NOTE: 'NOTE',
  IMAGE: 'IMAGE',
  SOUND: 'SOUND',
  INDEX: 'INDEX',
  INIT_STORGE: '@ACCOUNT',
};

function save(key, value) {
  AsyncStorage.setItem(key, value);
}

// sử dụng nếu AsyncStorage dữ liệu dạng Json object
function saveObject(key, value) {
  AsyncStorage.setItem(key, JSON.stringify(value));
}

async function get(key) {
  return AsyncStorage.getItem(key);
}

async function remove(key) {
  return AsyncStorage.removeItem(key)
}

// sử dụng nếu AsyncStorage dữ liệu dạng Json object
async function getObject(key) {
  let value = await AsyncStorage.getItem(key)
  return JSON.parse(value)
}

// async function setMultiObject(keyValuePairs) {
//   return AsyncStorage.multiSet(keyValuePairs)
// }

async function getMultiObject(listkey, func) {
  return AsyncStorage.multiGet(listkey, func)
}

async function removeMultiObject(listkey) {
  return AsyncStorage.multiRemove(listkey);
}

export default {
  save,
  saveObject,
  get,
  getObject,
  remove,
  KEY,
  // setMultiObject,
  getMultiObject,
  removeMultiObject
};
