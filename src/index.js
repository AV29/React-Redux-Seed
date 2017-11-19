import 'babel-polyfill';
import {render} from 'react-dom';
import React from 'react';
import Root from './components/Root';
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import {getDefaultLocaleName, languages} from './utilities/language';
import configureStore from './store/configureStore';
import './styles/styles.less';

const store = configureStore();
const defaultLocale = getDefaultLocaleName();
syncTranslationWithStore(store);
store.dispatch(setLocale(defaultLocale));
store.dispatch(loadTranslations(languages));

render(
  <Root store={store}/>,
  document.getElementById('application-root')
);
