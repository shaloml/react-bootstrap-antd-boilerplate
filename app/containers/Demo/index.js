/**
 *
 * Demo
 *
 */

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { makeSelectEmployee } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getEmployee } from './actions';

const stateSelector = createStructuredSelector({
  employee: makeSelectEmployee()
});

function Demo() {
  useInjectReducer({ key: 'demo', reducer });
  useInjectSaga({ key: 'demo', saga });

  /* eslint-disable no-unused-vars */
  const { employee } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    onGetEmployee(1);
  }, []);

  const onGetEmployee = (id) => {
    dispatch(getEmployee(id));
  };

  return (
    <>
      <div>
        <FormattedMessage {...messages.header} />
      </div>
      <span>{employee.name}</span>
    </>
  );
}

Demo.propTypes = {};

export default Demo;
