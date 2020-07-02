/* eslint-disable no-undef */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

function Page({ title, children, ...rest }) {
  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.object
};

export default Page;
