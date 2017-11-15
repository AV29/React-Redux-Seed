import 'babel-polyfill';
import {render} from 'react-dom';
import React from 'react';
import routes from './routing/routes';
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {getDefaultLocaleName, languages} from './utilities/language';
import configureStore from './store/configureStore';
import './styles/styles.less';

const store = configureStore();
const defaultLocale = getDefaultLocaleName();
syncTranslationWithStore(store);
store.dispatch(setLocale(defaultLocale));
store.dispatch(loadTranslations(languages));

render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('application-root')
);
