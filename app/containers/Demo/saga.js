import { put, takeLatest } from 'redux-saga/effects';
import utils from 'utils';
import * as types from './constants';
import { employeeLoaded, employeeLoadingError } from './actions';
const { rest } = utils;

export default function* demoSaga() {
  yield takeLatest(types.GET_EMPLOYEE, getEmployee);
}

function* getEmployee(action) {
  try {
    const response = yield rest.get(`users/${action.id}`);
    yield put(employeeLoaded(response.data));
  } catch (err) {
    yield put(employeeLoadingError(err));
  }
}
