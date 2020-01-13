export class Hue {

  static get red()         { return new Hue(1);  }
  static get orange()      { return new Hue(2);  }
  static get yellow()      { return new Hue(3);  }
  static get chartreuse()  { return new Hue(4);  }

  static get green()       { return new Hue(5);  }
  static get springGreen() { return new Hue(6);  }
  static get cyan()        { return new Hue(7);  }
  static get azure()       { return new Hue(8);  }

  static get blue()        { return new Hue(9);  }
  static get purple()      { return new Hue(10); }
  static get magenta()     { return new Hue(11); }
  static get rose()        { return new Hue(12); }

  constructor(value) {
    this._value = ((value - 1 + 12) % 12) + 1;
  }

  toString() {
    return `Hue<${this.name},${this._value}>`;
  }

  get value() {
    return this._value;
  }

  get name() {
    return {
      1: 'Red',
      2: 'Orange',
      3: 'Yellow',
      4: 'Chartreuse',
      5: 'Green',
      6: 'Spring Green',
      7: 'Cyan',
      8: 'Azure',
      9: 'Blue',
      10: 'Purple',
      11: 'Magenta',
      12: 'Rose',
    }[this._value];
  }

  plus(value) {
    return new Hue(this.value + value);
  }

  mix(hue) {
    let newValue = (hue.value + this.value) / 2;
    if(Math.abs(this.value - hue.value) >= 6) {
      newValue -= 6;
    }
    return new Hue(newValue);
  }
}
