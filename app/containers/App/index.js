/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { hot } from 'react-hot-loader/root';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div className="site-wrapper">
      <div className="main-wrapper">
        <main className="home-main">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </main>
      </div>
    </div>
  );
}

export default hot(App);
