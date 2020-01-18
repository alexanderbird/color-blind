import './LineChart.css';
import { LineChartLine } from './LineChartLine';

const geometry = Object.freeze({
  maxLineHeight: 80,

  redX: 73.627,
  greenX: 100,
  blueX: 126.372,

  lineStartY: 10,
  textY: 120,
});

export const LineChart = ({ red, green, blue }) => {
  const redHeight = geometry.maxLineHeight * red;
  const greenHeight = geometry.maxLineHeight * green;
  const blueHeight = geometry.maxLineHeight * blue;

  return (
    <svg class='line-chart' viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" >
      <LineChartLine geometry={geometry} x={geometry.redX} height={redHeight} value={red} />
      <LineChartLine geometry={geometry} x={geometry.greenX} height={greenHeight} value={green} />
      <LineChartLine geometry={geometry} x={geometry.blueX} height={blueHeight} value={blue} />
    </svg>
  );
}
