export class Saturation {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  toString() {
    const names = [ 'Gray', 'Muted', 'Washed', 'Saturated' ];
    const index = Math.floor(this._value * names.length);
    return names[Math.max(0, Math.min(names.length - 1, index))];
  }
}
