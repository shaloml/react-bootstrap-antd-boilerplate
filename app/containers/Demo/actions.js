/*
 *
 * Demo actions
 *
 */
import * as types from './constants';

export function defaultAction() {
  return {
    type: types.DEFAULT_ACTION
  };
}

/**
 * Github repos request/response handler
 */

export function getEmployee(id) {
  return {
    type: types.GET_EMPLOYEE,
    id
  };
}

export function employeeLoaded(employee) {
  return {
    type: types.GET_EMPLOYEE_SUCCESS,
    employee
  };
}

export function employeeLoadingError(error) {
  return {
    type: types.GET_EMPLOYEE_ERROR,
    error
  };
}
