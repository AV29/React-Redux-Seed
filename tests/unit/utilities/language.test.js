/* eslint-disable no-undef*/
import {getDefaultLocaleName} from '../../../src/utilities/language';

describe('Language Utility', () => {
  it('it should extract language abbreviation from passed argument', () => {
    const expected = getDefaultLocaleName('ru');
    expect(expected).toEqual('ru');
  });

  it('it should extract language abbreviation from passed argument if language has a dash', () => {
    const expected = getDefaultLocaleName('es-cat');
    expect(expected).toEqual('es');
  });

  it('it should extract default browser language abbreviation if no argument passed', () => {
    const expected = getDefaultLocaleName();
    expect(expected).toEqual('en');
  });
});

