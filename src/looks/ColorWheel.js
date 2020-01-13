import './ColorWheel.css';

export const ColorWheel = ({ hue }) => (
  <svg class='color-wheel' viewbox="0 0 120 120">
    { Array(12).fill().map((_, i) => (
        <circle cx="60" cy="60" r="25" class={ (i + 1) === hue.value ? 'color-wheel__color--active' : ''} />
      ))
    }
  </svg>
)
