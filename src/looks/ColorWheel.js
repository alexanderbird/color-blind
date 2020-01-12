import './ColorWheel.css';

export const ColorWheel = () => (
  <svg class='color-wheel' viewbox="0 0 100 100">
    { Array(12).fill().map(() => (
        <circle cx="50" cy="50" r="25" />
      ))
    }
  </svg>
)
