import './App.css';
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
    <div class='app'>
      <div class='app__input app__widget'>
        <input ref={hexInput} onKeyUp={onChange} type='text' />
        <button onClick={randomColor}>Random</button>
      </div>
      <div class='app__line-chart app__widget'>
        <LineChart 
          red={color.getRed()}
          green={color.getGreen()}
          blue={color.getBlue()}
          />
      </div>
      <div class='app__hue app__widget'>
        <div>{color.getHue().name}</div>
        <ColorWheel hue={color.getHue()}/>
      </div>
      <div class='app__saturation app__widget'>
        <div>{color.getSaturation().toString()}</div>
      </div>
      <div class='app__lightness app__widget'>
        <div>{color.getLightness().toString()}</div>
      </div>
    </div>
  );
}
