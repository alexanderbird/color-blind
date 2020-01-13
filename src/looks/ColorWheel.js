import './ColorWheel.css';
import { ColorWheelWedge } from './ColorWheelWedge';

export const ColorWheel = ({ hue, onClick }) => {
  const inactiveIndicies = Array(12).fill()
    .map((_, i) => i + 1)
    .filter(i => i !== hue.value);
  return (
    <svg class='color-wheel' viewbox="0 0 140 140">
      <ColorWheelWedge active={true} index={hue.value} />
      { inactiveIndicies.map(i => <ColorWheelWedge index={i} onClick={() => onClick(i)} /> ) }
    </svg>
  );
}
