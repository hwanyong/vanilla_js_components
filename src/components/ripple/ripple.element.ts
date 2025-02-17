import { RippleStyles } from './ripple.styles';
import { createRipple } from './ripple.template';

export class Ripple extends HTMLElement {
  static get observedAttributes() {
    return ['vnl-disabled'];
  }

  constructor() {
    super();
    this.initializeShadowDOM();
  }

  private initializeShadowDOM(): void {
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = RippleStyles;
    shadow.appendChild(style);
  }

  connectedCallback() {
    // Component connected to DOM
  }

  addRipple(x: number, y: number): void {
    if (!this.shadowRoot) {
      return;
    }

    // 이전 ripple이 아직 애니메이션 중이면 새로운 ripple을 추가하지 않음
    const existingRipple = this.shadowRoot.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }

    const ripple = createRipple(x, y);
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    }, { once: true });

    this.shadowRoot.appendChild(ripple);
  }
}

customElements.define('vnl-ripple', Ripple);