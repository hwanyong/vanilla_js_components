import { RippleStyles } from './ripple.styles';
import { createRipple } from './ripple.template';

export class Ripple extends HTMLElement {
  static get observedAttributes() {
    return ['vnl-disabled'];
  }

  constructor() {
    super();
    console.log('Ripple component constructed');
    this.initializeShadowDOM();
  }

  private initializeShadowDOM(): void {
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = RippleStyles;
    shadow.appendChild(style);
    console.log('Ripple shadowDOM initialized');
  }

  connectedCallback() {
    console.log('Ripple component connected to DOM');
  }

  addRipple(x: number, y: number): void {
    console.log('addRipple method called:', { x, y });

    if (!this.shadowRoot) {
      console.error('No shadowRoot found in Ripple component');
      return;
    }

    // 이전 ripple이 아직 애니메이션 중이면 새로운 ripple을 추가하지 않음
    const existingRipple = this.shadowRoot.querySelector('.ripple');

    if (existingRipple) {
      console.log('Removing existing ripple');
      existingRipple.remove();
    }

    const ripple = createRipple(x, y);
    console.log('New ripple created:', ripple);

    ripple.addEventListener('animationend', () => {
      console.log('Ripple animation ended');
      ripple.remove();
    }, { once: true });

    this.shadowRoot.appendChild(ripple);
    console.log('Ripple added to shadowRoot');
  }
}

customElements.define('vnl-ripple', Ripple);