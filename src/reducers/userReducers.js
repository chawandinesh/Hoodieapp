import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { UPDATE_USER_INFO, UPDATE_USER_DATA, EDIT_USER_PROFILE, FAVORITE, HISTORY, GET_STORAGE, ADD_ITEM, REMOVE_ITEM, DELETE_CART, ORDER_LIST } from '../actions/index';

const initialState = {
  data: {
    hoTen: 'AISolution'
  },
  token: null,
  langCode: null,
  favorite: [],
  history: [],
  cart: [],
  orderList: []
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        data: action.payload.data || action.payload.user,
        token: action.payload.token
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        data: action.payload.data,
        token: action.payload.token
      };
    case EDIT_USER_PROFILE:
      return {
        ...state,
        data: { ...state.data, ...action.payload.data }
      };
    case FAVORITE:
    {
      let temp;
      if (action.findResult === true) {
        temp = { ...state, favorite: state.favorite.filter((item) => item.id !== action.item.id) }
      } else {
        temp = { ...state, favorite: [action.item].concat(state.favorite) }
      }
      try {
        let sto = JSON.stringify(temp);
        AsyncStorage.setItem('state', sto);
      } catch (error) {
        Alert.alert(error)
      }
      return temp;
    }
    case HISTORY:
    {
      let temp = { ...state, history: [action.item].concat(state.history.filter((it) => it.id !== action.item.id)) };
      try {
        let sto = JSON.stringify(temp);
        AsyncStorage.setItem('state', sto);
      } catch (error) {
        Alert.alert(error)
      }
      return temp;
    }
    case GET_STORAGE:
    {
      return { favorite: action.favorite, history: action.history, cart: action.cart, orderList: action.orderList };
    }
    case ADD_ITEM:
    {
      let temp = { ...state, cart: [action.item].concat(state.cart.filter((it) => it.id !== action.item.id)) };
      try {
        let sto = JSON.stringify(temp);
        AsyncStorage.setItem('state', sto);
      } catch (error) {
        Alert.alert(error)
      }
      return temp;
    }
    case REMOVE_ITEM:
    {
      let temp = { ...state, cart: state.cart.filter((it) => it.id !== action.item.id) };
      try {
        let sto = JSON.stringify(temp);
        AsyncStorage.setItem('state', sto);
      } catch (error) {
        Alert.alert(error)
      }
      return temp;
    }
    case DELETE_CART: {
      let temp = {
        ...state,
        cart: [],
      };
      try {
        let sto = JSON.stringify(temp);
        AsyncStorage.setItem('state', sto);
      } catch (error) {
        Alert.alert(error);
      }
      return temp;
    }
    case ORDER_LIST:
    {
      let temp = { ...state, orderList: action.list.concat(state.orderList.filter((it) => !action.list.includes(it))) };
      try {
        let sto = JSON.stringify(temp);
        AsyncStorage.setItem('state', sto);
      } catch (error) {
        Alert.alert(error)
      }
      return temp;
    }
    default:
      return state;
  }
};
