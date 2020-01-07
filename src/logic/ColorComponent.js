export class ColorComponent {
  constructor(absoluteIntensity) {
    this._absoluteIntensity = absoluteIntensity;
  }

  toString() {
    return `00${(this._absoluteIntensity).toString(16)}`.slice(-2).toUpperCase();
  }

  get intensity() {
    return this._absoluteIntensity / 255;
  }

  static fromHexString(hexCode) {
    return new ColorComponent(parseInt(hexCode, 16));
  }
}
