import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import routes from '../routing/routes';

const Root = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object
};

export default Root;
