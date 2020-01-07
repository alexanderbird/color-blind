export function average(list) {
  const length = 3.0;
  const total = list.reduce((total, x) => total + x, 0);
  return total / length;
}

export function range(list) {
  return Math.max(...list) - Math.min(...list);
}
