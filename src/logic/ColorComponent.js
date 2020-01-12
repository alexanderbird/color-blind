export class ColorComponent {
  constructor(absoluteIntensity) {
    this._absoluteIntensity = absoluteIntensity;
  }

  toString() {
    const digitsLeftOfPeriod = this._absoluteIntensity.toString(16).replace(/\..*$/, '');
    return `00${digitsLeftOfPeriod}`.slice(-2).toUpperCase();
  }

  get intensity() {
    return this._absoluteIntensity / 0xFF;
  }

  static fromHexString(hexCode) {
    return new ColorComponent(parseInt(hexCode, 16));
  }
}
