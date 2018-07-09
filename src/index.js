import 'babel-polyfill';
import {render} from 'react-dom';
import {createBrowserHistory} from 'history';
import React from 'react';
import Root from './components/Root';
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import {getDefaultLocaleName, languages} from './utilities/language';
import configureStore from './store/configureStore';
import './styles/styles.less';

const history = createBrowserHistory();
const store = configureStore(history);
const defaultLocale = getDefaultLocaleName();

syncTranslationWithStore(store);
store.dispatch(setLocale(defaultLocale));
store.dispatch(loadTranslations(languages));

render(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('application-root')
);
