import { ColorComponent } from './ColorComponent';
import { Hue } from './Hue';
import { Lightness } from './Lightness';
import { Saturation } from './Saturation';
import { chunkIntoCharacterPairs } from './chunkIntoCharacterPairs';
import {
  average,
  range,
} from './math';

export class Color {
  static fromHexString(hexCode) {
    const [ red, green, blue ] = chunkIntoCharacterPairs(hexCode + '000000');
    return new Color(
      ColorComponent.fromHexString(red),
      ColorComponent.fromHexString(green),
      ColorComponent.fromHexString(blue),
    );
  }

  static default() {
    return Color.fromHexString('');
  }

  static random() {
    return new Color(
      new ColorComponent(Math.random() * 0xFF),
      new ColorComponent(Math.random() * 0xFF),
      new ColorComponent(Math.random() * 0xFF)
    )
  }

  constructor(red, green, blue) {
    this._red = red;
    this._green = green;
    this._blue = blue;
  }

  toString() {
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
    return new Lightness(average(this._intensities));
  }

  getSaturation() {
    return new Saturation(range(this._intensities));
  }

  getHue() {
    const [ first, second, third ] = [
      { value: this.getRed(), hue: Hue.red },
      { value: this.getGreen(), hue: Hue.green },
      { value: this.getBlue(), hue: Hue.blue }
    ].sort((x, y) => y.value - x.value);
    const range = first.value - third.value;
    const firstToSecond = first.value - second.value;
    const secondToThird = second.value - third.value;
    if((firstToSecond / range) < 0.25) {
      return first.hue.mix(second.hue);
    }
    if((secondToThird / range) < 0.25) {
      return first.hue;
    }
    return first.hue.mix(second.hue).mix(first.hue);
  }

  get _colors() {
    return [this._red, this._green, this._blue];
  }

  get _intensities() {
    return this._colors.map(x => x.intensity);
  }
}
