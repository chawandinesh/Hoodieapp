import { all, fork } from 'redux-saga/effects';
import { watchSaveUserData, watchUpdateUserData } from './users';
import { watchNearPlaces } from './location';

export default function* rootSaga() {
  yield all([
    fork(watchSaveUserData),
    fork(watchUpdateUserData),
    fork(watchNearPlaces),
  ]);
}
