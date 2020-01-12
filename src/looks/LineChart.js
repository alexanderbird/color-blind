import './LineChart.css';

export const LineChart = ({ red, green, blue }) => {
  const totalHeight = 80;

  const redHeight = totalHeight * red;
  const greenHeight = totalHeight * green;
  const blueHeight = totalHeight * blue;

  const redX = 23.627;
  const greenX = 50;
  const blueX = 76.372;

  function graphLine(x, height) {
    const lineStart = 10;
    return `M ${x} ${totalHeight + lineStart} L ${x} ${lineStart + (totalHeight - height)}`
  }
  return (
    <svg class='line-chart' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" >
      <g>
        <path style="stroke: var(--line-chart--line-background, #BBB); stroke-linecap: round; stroke-width: 20px;"
          d={graphLine(redX, totalHeight)}/>
        <path style="stroke: var(--line-chart--line-foreground, #000); stroke-linecap: round; stroke-width: 20px;"
          d={graphLine(redX, redHeight)}/>
      </g>
      <g>
        <path style="stroke: var(--line-chart--line-background, #BBB); stroke-linecap: round; stroke-width: 20px;"
          d={graphLine(greenX, totalHeight)}/>
        <path style="stroke: var(--line-chart--line-foreground, #000); stroke-linecap: round; stroke-width: 20px;"
          d={graphLine(greenX, greenHeight)}/>
      </g>
      <g>
        <path style="stroke: var(--line-chart--line-background, #BBB); stroke-linecap: round; stroke-width: 20px;"
          d={graphLine(blueX, totalHeight)}/>
        <path style="stroke: var(--line-chart--line-foreground, #000); stroke-linecap: round; stroke-width: 20px;"
          d={graphLine(blueX, blueHeight)}/>
      </g>
    </svg>
  );
}
