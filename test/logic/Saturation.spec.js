import { Saturation } from '../../src/logic/Saturation';

describe('Saturation', () => {
  describe('#toString', () => {
    [
      ['Gray', 0],
      ['Gray', 0.24],
      ['Muted', 0.25],
      ['Muted', 0.49],
      ['Washed', 0.5],
      ['Washed', 0.74],
      ['Saturated', 0.75],
      ['Saturated', 1],
    ].forEach(([ name, value ]) => it(`is named ${name} when the value is ${value}`, () => {
      expect(new Saturation(value).toString()).toEqual(name);
    }));
  });
});
