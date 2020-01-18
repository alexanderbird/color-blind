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

export const LineChart = ({ red, green, blue, max, min, average }) => {
  const redHeight = geometry.maxLineHeight * red;
  const greenHeight = geometry.maxLineHeight * green;
  const blueHeight = geometry.maxLineHeight * blue;
  const maxLinePosition = geometry.lineStartY + ((1 - max) * geometry.maxLineHeight);
  const minLinePosition = geometry.lineStartY + ((1 - min) * geometry.maxLineHeight);
  const middleLinePosition = geometry.lineStartY + ((1 - average) * geometry.maxLineHeight);

  const leftChartEdge = geometry.redX - 10;
  const rightChartEdge = geometry.blueX + 10;

  return (
    <svg class='line-chart' viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" >
      <LineChartLine geometry={geometry} x={geometry.redX} height={redHeight} value={red} />
      <LineChartLine geometry={geometry} x={geometry.greenX} height={greenHeight} value={green} />
      <LineChartLine geometry={geometry} x={geometry.blueX} height={blueHeight} value={blue} />
      <path
        style="stroke-width: 1; stroke: gray; stroke-dasharray: 5"
        d={`M ${leftChartEdge} ${maxLinePosition} L 200 ${maxLinePosition}`}
        />
      <path
        style="stroke-width: 1; stroke: gray; stroke-dasharray: 5"
        d={`M ${leftChartEdge} ${minLinePosition} L 200 ${minLinePosition}`}
        />
      <path
        d={`M 0 ${middleLinePosition} L ${rightChartEdge} ${middleLinePosition}`}
        style="stroke-width: 1; stroke: gray; stroke-dasharray: 10 2"
        />
    </svg>
  );
}
