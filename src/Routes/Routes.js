import React, { Component } from 'react';
import { Route } from 'react-router';
import Main from '../Containers/Main';

const Routes = [
  { exact: true, path: '/main', component: { Main } },
];


export default Routes;
