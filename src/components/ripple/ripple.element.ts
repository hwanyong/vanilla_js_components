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

  addRipple(x: number, y: number): void {
    const ripple = createRipple(x, y);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });

    this.shadowRoot?.appendChild(ripple);
  }
}

if (!customElements.get('vnl-ripple')) {
  customElements.define('vnl-ripple', Ripple);
}