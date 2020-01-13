import { useRef, useState, useEffect } from 'preact/hooks';
import { Color } from '../logic/Color';
import { LineChart } from './LineChart';
import { ColorWheel } from './ColorWheel';

export const App = () => {
  const hexInput = useRef(null);
  const [color, setColor] = useState(Color.default());
  function onChange() {
    setColor(Color.fromHexString(hexInput.current.value));
  }
  
  function randomColor() {
    const newColor = Color.random();
    hexInput.current.value = newColor.toString();
    setColor(newColor);
  }

  useEffect(randomColor, []);

  return (
    <div>
      <input ref={hexInput} onKeyUp={onChange} type='text' />
      <button onClick={randomColor}>Random</button>
      <LineChart 
        red={color.getRed()}
        green={color.getGreen()}
        blue={color.getBlue()}
        />
      <ColorWheel hue={color.getHue()}/>
      <div>Saturation: {color.getSaturation()}</div>
      <div>Lightness: {color.getLightness()}</div>
      <div>Hue: {color.getHue().name}</div>
    </div>
  );
}
