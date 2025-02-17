export function createRipple(x: number, y: number): HTMLDivElement {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = `${x - 25}px`;
  ripple.style.top = `${y - 25}px`;
  return ripple;
}