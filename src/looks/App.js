import { useRef, useState } from 'preact/hooks';
import { Color } from '../logic/Color';

export const App = () => {
  const hexInput = useRef(null);
  const [color, setColor] = useState(Color.fromHexString('FFFFFF'));
  function onChange() {
    setColor(Color.fromHexString(hexInput.current.value));
  }
  return (
    <div>
      <input ref={hexInput} onKeyUp={onChange} type='text' />
      <div>Red: {color.getRed()}</div>
      <div>Green: {color.getGreen()}</div>
      <div>Blue: {color.getBlue()}</div>
      <div>Saturation: {color.getSaturation()}</div>
      <div>Lightness: {color.getLightness()}</div>
    </div>
  );
}
