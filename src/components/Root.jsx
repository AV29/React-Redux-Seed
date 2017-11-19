import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import routes from '../routing/routes';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object
};

export default Root;
