import React from 'react';
import './App.scss';
import { hot } from 'react-hot-loader/root';
import Header from 'components/Header';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import GlobalStyle from '../../global-styles';

function MainLayout({ route }) {
  return (
    <div className="site-wrapper">
      <div className="main-wrapper">
        <main className="home-main">
          <Header />
          {renderRoutes(route.routes)}
          <GlobalStyle />
        </main>
      </div>
    </div>
  );
}
MainLayout.propTypes = {
  route: PropTypes.object
};

export default hot(MainLayout);
