/* eslint-disable no-undef*/
import {createStore, applyMiddleware} from 'redux';
import {loadTranslations, setLocale} from 'react-redux-i18n';
import rootReducer from '../../../src/reducers/index';
import thunk from 'redux-thunk';

describe('Store', () => {
  it('should load locales and translations', () => {
    const initialState = {
      i18n: {
        locale: '',
        translations: {}
      }
    };
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    const locale = 'en';
    const translations = {
      root: {
        title: 'Root'
      }
    };

    store.dispatch(setLocale(locale));
    store.dispatch(loadTranslations(translations));

    const actual = store.getState().i18n;
    const expected = {
      locale: 'en',
      translations
    };
    expect(actual).toEqual(expected);
  });
});
