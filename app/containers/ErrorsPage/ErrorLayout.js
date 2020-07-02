import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

function ErrorLayout({ route }) {
  return (
    <div className="errorLayout">
      <div className="content">{renderRoutes(route.routes)}</div>
    </div>
  );
}

ErrorLayout.propTypes = {
  route: PropTypes.object
};

export default ErrorLayout;
