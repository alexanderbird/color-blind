import { useRef, useState } from 'preact/hooks';
import { Color } from '../logic/Color';
import { LineChart } from './LineChart';

export const App = () => {
  const hexInput = useRef(null);
  const [color, setColor] = useState(Color.default());
  function onChange() {
    setColor(Color.fromHexString(hexInput.current.value));
  }

  function randomColor() {
    const newColor = Color.random();
    hexInput.current.value = newColor.toHexString();
    setColor(newColor);
  }
  return (
    <div>
      <input ref={hexInput} onKeyUp={onChange} type='text' />
      <button onClick={randomColor}>Random</button>
      <LineChart 
        red={color.getRed()}
        green={color.getGreen()}
        blue={color.getBlue()}
        />
      <div>Red: {color.getRed()}</div>
      <div>Green: {color.getGreen()}</div>
      <div>Blue: {color.getBlue()}</div>
      <div>Saturation: {color.getSaturation()}</div>
      <div>Lightness: {color.getLightness()}</div>
    </div>
  );
}
