export class Lightness {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  toString() {
    const names = [ 'Dark', 'Middle', 'Light' ];
    const index = Math.floor(this._value * names.length);
    return names[Math.max(0, Math.min(names.length - 1, index))];
  }
}
