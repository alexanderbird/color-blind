import { Hue } from '../../src/logic/Hue';

describe('Hue', () => {
  const hueNamePairs = [
    ['Red', 1],
    ['Orange', 2],
    ['Yellow', 3],
    ['Chartreuse', 4],
    ['Green', 5],
    ['Spring Green', 6],
    ['Cyan', 7],
    ['Azure', 8],
    ['Blue', 9],
    ['Purple', 10],
    ['Magenta', 11],
    ['Rose', 12],
  ];

  describe('constructor', () => {
    it('adjusts a value of zero to be 12', () => {
      expect(new Hue(0)).toEqual(new Hue(12));
    });

    it('adjusts a value of negative 2 to be 10', () => {
      expect(new Hue(-2)).toEqual(new Hue(10));
    });
  });
  
  describe('#name', () => hueNamePairs.forEach(([name, hue]) => {
    it(`returns '${name}' for ${hue}`, () => {
      expect(new Hue(hue).name).toEqual(name);
    });
  }));

  describe('#toString', () => hueNamePairs.forEach(([name, hue]) => {
    it(`returns Hue<${name},${hue}> for ${hue}`, () => {
      expect(new Hue(hue).toString()).toEqual(`Hue<${name},${hue}>`);
    });
  }));

  describe('#mix', () => {
    it('returns a new Hue object', () => {
      const first = new Hue(1);
      expect(first.mix(new Hue(1))).not.toBe(first);
    });

    it('returns a Hue in between the two hues', () => {
      expect(new Hue(4).mix(new Hue(8))).toEqual(new Hue(6));
    });

    it('correctly wraps around the edge of the color wheel', () => {
      expect(new Hue(10).mix(new Hue(4))).toEqual(new Hue(1));
    });
  });

  describe('#plus', () => {
    it('returns a new Hue object', () => {
      const first = new Hue(1);
      expect(first.plus(0)).not.toBe(first);
    });
    
    it('adds the parameter to the Hue value', () => {
      expect(new Hue(3).plus(4)).toEqual(new Hue(7));
    });

    it('wraps around to one when you add beyond 12', () => {
      expect(new Hue(11).plus(2)).toEqual(new Hue(1));
    });
  });
});
