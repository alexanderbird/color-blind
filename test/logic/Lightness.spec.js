import { Lightness } from '../../src/logic/Lightness';

describe('Lightness', () => {
  describe('#toString', () => {
    [
      ['Light', 0],
      ['Light', 0.33],
      ['Middle', 0.34],
      ['Middle', 0.66],
      ['Dark', 0.67],
      ['Dark', 1],
    ].forEach(([ name, value ]) => it(`is named ${name} when the value is ${value}`, () => {
      expect(new Lightness(value).toString()).toEqual(name);
    }));
  });
});
