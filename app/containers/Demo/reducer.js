/*
 *
 * Demo reducer
 *
 */

import produce from 'immer';
import * as types from './constants';

export const initialState = {
  employee: {
    id: 0,
    name: '',
    username: ''
  }
};
/* eslint-disable default-case, no-param-reassign */
const demoReducer = produce((draft, action) => {
  switch (action.type) {
    case types.GET_EMPLOYEE:
      draft.loading = true;
      draft.error = false;
      break;
    case types.GET_EMPLOYEE_SUCCESS:
      draft.employee = action.employee;
      draft.error = false;
      break;
    case types.GET_EMPLOYEE_ERROR:
      draft.error = true;
      break;
  }
}, initialState);

export default demoReducer;
