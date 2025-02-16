import { RippleStyles } from './ripple.styles';

export class Ripple extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = RippleStyles;
    shadow.appendChild(style);
  }

  addRipple(x: number, y: number) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x - 25}px`;  // ripple 크기(50px)의 절반을 빼서 중앙 정렬
    ripple.style.top = `${y - 25}px`;   // ripple 크기(50px)의 절반를 빼서 중앙 정렬
    this.shadowRoot?.appendChild(ripple);

    // 애니메이션이 끝나면 요소 제거
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
}

// Ripple 컴포넌트 정의
if (!customElements.get('vnl-ripple')) {
  customElements.define('vnl-ripple', Ripple);
}