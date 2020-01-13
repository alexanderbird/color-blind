export const hexString = number =>
  `00${(number * 0xFF).toString(16).toUpperCase().replace(/\..*/, '')}`.slice(-2);
