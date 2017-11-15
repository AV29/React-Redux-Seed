/* eslint-disable react/jsx-max-props-per-line*/
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routesConfiguration from './routesConfiguration';
import Root from '../components/application-shell/Root';
import App from '../components/application-shell/App';
import About from '../components/application-shell/About';
import NotFoundPage from '../components/application-shell/NotFoundPage';

const {
  root
} = routesConfiguration;

export default (
  <Root>
    <Switch>
      <Route exact path={root.path} component={App}/>
      <Route exact path="/about" component={About}/>
      <Route path="*" component={NotFoundPage}/>
    </Switch>
  </Root>
);
