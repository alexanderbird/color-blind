import { Color } from '../../src/logic/Color';

describe('Color', () => {
  describe('.default', () => {
    it('returns a Color of value 000000', () => {
      expect(Color.default().toHexString()).toEqual('000000');
    });
  });

  describe('.fromHexString', () => {
    [
      ['AABBCC', 'AABBCC'],
      ['000000', '000000'],
      ['FFFFFF', 'FFFFFF'],
      ['FFFFF' , 'FFFFF0'],
      ['FFFF'  , 'FFFF00'],
      ['FFF'   , 'FFF000'],
      ['FF'    , 'FF0000'],
      ['F'     , 'F00000'],
      [''      , '000000'],
    ].forEach(([ input, expected ]) => it(`returns a Color object with color ${expected} when given ${input}`, () => {
      expect(Color.fromHexString(input).toHexString()).toEqual(expected);
    }));
  });

  describe('.random', () => {
    it('returns a random red value', () => {
      Math.random = () => 0.4;
      expect(Color.random().toHexString()).toEqual('660000');
    });
  });

  describe('#getRed', () => {
    [
      ['000000', 0],
      ['010000', 0.003922],
      ['100000', 0.0625],
      ['200000', 0.125],
      ['990000', 0.6],
      ['FF0000', 1],
    ].forEach(([ hex, red ]) => it(`returns ${red} for hex code ${hex}`, () => {
      expect(Color.fromHexString(hex).getRed()).toBeCloseTo(red, 3);
    }));
  });

  describe('#getGreen', () => {
    [
      ['000000', 0],
      ['000100', 0.003922],
      ['001000', 0.0625],
      ['002000', 0.125],
      ['009900', 0.6],
      ['00FF00', 1],
    ].forEach(([ hex, green ]) => it(`returns ${green} for hex code ${hex}`, () => {
      expect(Color.fromHexString(hex).getGreen()).toBeCloseTo(green, 3);
    }));
  });

  describe('#getBlue', () => {
    [
      ['000000', 0],
      ['000001', 0.003922],
      ['000010', 0.0625],
      ['000020', 0.125],
      ['000099', 0.6],
      ['0000FF', 1],
    ].forEach(([ hex, blue ]) => it(`returns ${blue} for hex code ${hex}`, () => {
      expect(Color.fromHexString(hex).getBlue()).toBeCloseTo(blue, 3);
    }));
  });

  describe('#getLightness', () => {
    [
      ['000000', 0],
      ['FFFFFF', 1],
      ['0088FF', 0.5],
      ['88FF00', 0.5],
      ['FF0088', 0.5],
      ['888888', 0.5],
      ['555555', 0.3],
      ['EEEEEE', 0.9],
      ['DDEEFF', 0.9],
    ].forEach(([ hex, lightness ]) => it(`returns ${lightness} for hex code ${hex}`, () => {
      expect(Color.fromHexString(hex).getLightness()).toBeCloseTo(lightness, 1);
    }));
  });

  describe('#getSaturation', () => {
    [
      ['000000', 0],
      ['777777', 0],
      ['FFFFFF', 0],
      ['FFFF88', 0.5],
      ['FFFF00', 1],
      ['FF00FF', 1],
      ['00FFFF', 1],
    ].forEach(([ hex, saturation ]) => it(`returns ${saturation} for hex code ${hex}`, () => {
      expect(Color.fromHexString(hex).getSaturation()).toBeCloseTo(saturation, 1);
    }));
  });
});
