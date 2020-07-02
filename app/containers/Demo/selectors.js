import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the demo state domain
 */

const selectEmployee = (state) => state.demo.employee || initialState;

/**
 * Other specific selectors
 */

const makeSelectEmployee = () =>
  createSelector(selectEmployee, (employeeState) => employeeState);

export { makeSelectEmployee };
