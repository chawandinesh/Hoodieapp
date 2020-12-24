import { WATCH_SAVE_USER_DATA, WATCH_UPDATE_USER_DATA, FAVORITE, GET_STORAGE, HISTORY, ADD_ITEM, REMOVE_ITEM, DELETE_CART, ORDER_LIST } from './actionTypes'

export function saveUserToRedux(data, token) {
  return {
    type: WATCH_SAVE_USER_DATA,
    data,
    token
  };
}

export function updateUserToRedux(data) {
  return {
    type: WATCH_UPDATE_USER_DATA,
    data
  };
}
export function updateFavorite(findResult, item) {
  return {
    type: FAVORITE,
    findResult,
    item
  };
}
export function updateHistory(item) {
  return {
    type: HISTORY,
    item
  };
}
export function getStorage(favorite, history, cart, orderList) {
  return {
    type: GET_STORAGE,
    favorite,
    history,
    cart,
    orderList
  }
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item
  }
}

export function deleteCart() {
  return {
    type: DELETE_CART,
  };
}

export function addOrderList(list) {
  return {
    type: ORDER_LIST,
    list
  };
}
