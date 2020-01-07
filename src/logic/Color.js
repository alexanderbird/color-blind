import { ColorComponent } from './ColorComponent';
import { chunkIntoCharacterPairs } from './chunkIntoCharacterPairs';
import {
  average,
  range,
} from './math';

export class Color {
  static fromHexString(hexCode) {
    const [ red, green, blue ] = chunkIntoCharacterPairs(hexCode);
    return new Color(
      ColorComponent.fromHexString(red),
      ColorComponent.fromHexString(green),
      ColorComponent.fromHexString(blue),
    );
  }

  constructor(red, green, blue) {
    this._red = red;
    this._green = green;
    this._blue = blue;
  }

  toHexString() {
    return `${this._red}${this._green}${this._blue}`;
  }

  getRed() {
    return this._red.intensity;
  }

  getGreen() {
    return this._green.intensity;
  }

  getBlue() {
    return this._blue.intensity;
  }

  getLightness() {
    return average(this._intensities);
  }

  getSaturation() {
    return range(this._intensities);
  }

  get _colors() {
    return [this._red, this._green, this._blue];
  }

  get _intensities() {
    return this._colors.map(x => x.intensity);
  }
}
