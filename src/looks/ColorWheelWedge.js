const className = ({ active, index }) => [
  'color-wheel__wedge',
  `color-wheel__wedge--${index}`,
  active ? 'color-wheel__wedge--active' : ''
].join(' ');

export const ColorWheelWedge = ({ active, index }) => (
  <circle cx="70" cy="70" r="25" class={ className({ active, index }) } />
);
