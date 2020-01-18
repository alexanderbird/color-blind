import { hexString } from './textConversions/hexString';

function graphLine(x, height, geometry) {
  return `M ${x} ${geometry.maxLineHeight + geometry.lineStartY} L ${x} ${geometry.lineStartY + (geometry.maxLineHeight - height)}`
}

export const LineChartLine = ({ x, height, value, geometry }) => (
  <g>
    <path style="stroke: var(--line-chart--line-background, #BBB); stroke-linecap: round; stroke-width: 20px;"
      d={graphLine(x, geometry.maxLineHeight, geometry)}/>
    <path style="stroke: var(--line-chart--line-foreground, #000); stroke-linecap: round; stroke-width: 20px;"
      d={graphLine(x, height, geometry)}/>
    <text x={x} y={geometry.textY}>{hexString(value)}</text>
  </g>
);
