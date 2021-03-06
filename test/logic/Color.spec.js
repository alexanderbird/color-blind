import { Color } from '../../src/logic/Color';
import { Hue } from '../../src/logic/Hue';
import { Lightness } from '../../src/logic/Lightness';
import { Saturation } from '../../src/logic/Saturation';

describe('Color', () => {
  describe('.default', () => {
    it('returns a Color of value 000000', () => {
      expect(Color.default().toString()).toEqual('000000');
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
      expect(Color.fromHexString(input).toString()).toEqual(expected);
    }));
  });

  describe('.random', () => {
    it('returns a random red value', () => {
      const randoms = [0.4, 0, 0];
      Math.random = () => randoms.shift();
      expect(Color.random().toString()).toEqual('660000');
    });

    it('returns a random green value', () => {
      const randoms = [0, 0.8, 0];
      Math.random = () => randoms.shift();
      expect(Color.random().toString()).toEqual('00CC00');
    });

    it('returns a random blue value', () => {
      const randoms = [0, 0, 0.6];
      Math.random = () => randoms.shift();
      expect(Color.random().toString()).toEqual('000099');
    });

    it('does not blow up when producing colors with many decimals', () => {
      const randoms = [0.7, 0.1, 0.5];
      Math.random = () => randoms.shift();
      expect(Color.random().toString()).toEqual('B2197F');
    });

    it('does not blow up when producing colors with very small values', () => {
      const randoms = [0.01, 0.02, 0.03];
      Math.random = () => randoms.shift();
      expect(Color.random().toString()).toEqual('020507');
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

  describe('#getHue', () => {
    describe('for pure colors', () => {
      [
        ['FF0000', Hue.red],
        ['FF6600', Hue.orange],
        ['FFFF00', Hue.yellow],
        ['66FF00', Hue.chartreuse],
        ['00FF00', Hue.green],
        ['00FF66', Hue.springGreen],
        ['00FFFF', Hue.cyan],
        ['0066FF', Hue.azure],
        ['0000FF', Hue.blue],
        ['6600FF', Hue.purple],
        ['FF00FF', Hue.magenta],
        ['FF0066', Hue.rose],
      ].forEach(([ hex, hue ]) => it(`returns ${hue} for hex code ${hex}`, () => {
        expect(Color.fromHexString(hex).getHue()).toEqual(hue);
      }));
    });

    describe('for muted colors', () => {
      [
        ['331111', Hue.red],
        ['332211', Hue.orange],
        ['333311', Hue.yellow],
        ['223311', Hue.chartreuse],
        ['113311', Hue.green],
        ['113322', Hue.springGreen],
        ['113333', Hue.cyan],
        ['112233', Hue.azure],
        ['111133', Hue.blue],
        ['221133', Hue.purple],
        ['331133', Hue.magenta],
        ['331122', Hue.rose],
      ].forEach(([ hex, hue ]) => it(`returns ${hue} for hex code ${hex}`, () => {
        expect(Color.fromHexString(hex).getHue()).toEqual(hue);
      }));
    });

    describe('for colors with barely relevant second components', () => {
      [
        ['FF4000', Hue.orange],
        ['40FF00', Hue.chartreuse],
        ['00FF00', Hue.green],
        ['00FF40', Hue.springGreen],
        ['0040FF', Hue.azure],
        ['4000FF', Hue.purple],
        ['FF0040', Hue.rose],
      ].forEach(([ hex, hue ]) => it(`returns ${hue} for hex code ${hex}`, () => {
        expect(Color.fromHexString(hex).getHue()).toEqual(hue);
      }));
    });

    describe('for colors with two insignificantly different lesser color components', () => {
      [
        ['FF0000', 'FF003F'],
        ['FFFF00', 'FFC000'],
      ].forEach(([ pure, close ]) => it(`returns the same thing for ${pure} as for ${close}`, () => {
        window.YEAH = true;
        const pureColor = Color.fromHexString(pure);
        const closeColor = Color.fromHexString(close);
        expect(closeColor.getHue()).toEqual(pureColor.getHue());
      }));
    });
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
      expect(Color.fromHexString(hex).getLightness().value).toBeCloseTo(lightness, 1);
    }));

    it('returns a Lightness object', () => {
      expect(Color.fromHexString('999999').getLightness()).toEqual(new Lightness(0.6));
    });
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
      expect(Color.fromHexString(hex).getSaturation().value).toBeCloseTo(saturation, 1);
    }));

    it('returns a Saturation object', () => {
      expect(Color.fromHexString('FFFF99').getSaturation()).toEqual(new Saturation(0.4));
    });
  });

  describe('#getMax', () => {
    it('returns the larges Color component value when red is the largest', () => {
      expect(Color.fromHexString('995544').getMax()).toEqual(0.6); 
    });

    it('returns the larges Color component value when green is the largest', () => {
      expect(Color.fromHexString('115544').getMax()).toEqual(1/3); 
    });

    it('returns the larges Color component value when blue is the largest', () => {
      expect(Color.fromHexString('110033').getMax()).toEqual(0.2); 
    });
  });

  describe('#getMin', () => {
    it('returns the smallest Color component value when red is the smallest', () => {
      expect(Color.fromHexString('339955').getMin()).toEqual(0.2); 
    });

    it('returns the smallest Color component value when green is the smallest', () => {
      expect(Color.fromHexString('9955AA').getMin()).toEqual(1/3); 
    });

    it('returns the smallest Color component value when blue is the smallest', () => {
      expect(Color.fromHexString('CCFF99').getMin()).toEqual(0.6); 
    });
  });
});
