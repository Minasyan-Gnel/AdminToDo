import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './containers/layout/layout';
import { injectGlobal } from 'react-emotion';
import { robotoFont } from './assets/fonts/roboto/roboto.font';

injectGlobal(robotoFont);
ReactDOM.render(
  <Layout />
  ,
  document.getElementById('root'),
);
