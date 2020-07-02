import React from 'react';
import { Redirect } from 'react-router-dom';
import ErrorLayout from 'containers/ErrorsPage/ErrorLayout';
import MainLayout from 'containers/App/MainLayout';
import loadable from 'utils/loadable';

const routes = [
  // {
  //   path: '/auth',
  //   component: AuthLayout,
  //   routes: [
  //     {
  //       path: '/auth/login',
  //       exact: true,
  //       component: lazy(() => import('views/Login'))
  //     },
  //     {
  //       path: '/auth/register',
  //       exact: true,
  //       component: lazy(() => import('views/Register'))
  //     },
  //     {
  //       component: () => <Redirect to="/errors/error-404" />
  //     }
  //   ]
  // },
  //   {
  //     path: '/',
  //     exact: true,
  //     component: () => <Redirect to="/demo" />
  //   },

  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: loadable(() => import('containers/ErrorsPage/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: loadable(() => import('containers/ErrorsPage/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: loadable(() => import('containers/ErrorsPage/Error500'))
      },
      {
        component: () => <Redirect to="/errors/ErrorsPage/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: loadable(() => import('containers/HomePage'))
      },
      {
        path: '/demo',
        exact: true,
        component: loadable(() => import('containers/Demo'))
      },
      //   {
      //     path: '/demo/customers/:id',
      //     exact: true,
      //     component: lazy(() => import('containers/Demo/DemoDetails'))
      //   },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
