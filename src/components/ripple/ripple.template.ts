export function createRipple(x: number, y: number): HTMLDivElement {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  // 위치 계산을 보정
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.transform = 'translate(-50%, -50%) scale(0)';

  return ripple;
}