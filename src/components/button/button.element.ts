import { ButtonStyles } from './button.styles';
import { buttonTheme } from './button.theme';
// Ripple 컴포넌트를 먼저 로드하도록 import 순서 변경
import '../ripple/ripple.element';
import type { Ripple } from '../ripple/ripple.element';

export class Button extends HTMLElement {
  private ripple: Ripple | null = null;
  private button: HTMLButtonElement | null = null;

  static get observedAttributes(): string[] {
    return [
      'vnl-variant',
      'vnl-color',
      'vnl-size',
      'vnl-radius',
      'vnl-disabled',
      'vnl-loading',
      'vnl-fullwidth',
      'vnl-icon',
      'vnl-disableRipple',
      'vnl-disableAnimation'
    ];
  }

  constructor() {
    super();
    this._initialize();
  }

  private _initialize(): void {
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = ButtonStyles;

    this.button = document.createElement('button');
    this.button.setAttribute('part', 'button');
    this.button.classList.add('vnl-button');

    this._applyDefaultAttributes();

    this.button.innerHTML = `
      <slot name="start-content" part="start-content"></slot>
      <span class="content" part="content">
        <slot></slot>
      </span>
      <slot name="end-content" part="end-content"></slot>
    `;

    shadow.appendChild(style);
    shadow.appendChild(this.button);

    if (!this.hasAttribute('vnl-disableRipple')) {
      this.ripple = document.createElement('vnl-ripple') as Ripple;
      this.button.appendChild(this.ripple);
    }

    this._setupEventListeners();
  }

  private _applyDefaultAttributes(): void {
    const defaults = buttonTheme.defaultProps;
    (['variant', 'color', 'size', 'radius'] as const).forEach(attr => {
      if (!this.hasAttribute(`vnl-${attr}`)) {
        this.setAttribute(`vnl-${attr}`, defaults[attr]);
      }
    });
  }

  private _setupEventListeners(): void {
    this.addEventListener('click', this._handleClick.bind(this));
    this.addEventListener('mousedown', this._handleMouseDown.bind(this));
    this.addEventListener('keydown', this._handleKeyInteraction.bind(this));
    this.addEventListener('keyup', this._handleKeyInteraction.bind(this));
    this.addEventListener('focus', this._handleFocus.bind(this));
    this.addEventListener('blur', this._handleBlur.bind(this));
  }

  private _handleClick(event: MouseEvent): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('vnl-press', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: event },
      })
    );
  }

  private _handleMouseDown(event: MouseEvent): void {
    if (this.disabled || this.loading || this.hasAttribute('vnl-disableRipple')) {
      return;
    }

    const rippleElement = this.ripple;
    if (!rippleElement || !rippleElement.shadowRoot) {
      return;
    }

    const buttonRect = this.button?.getBoundingClientRect();
    if (!buttonRect) return;

    const x = event.clientX - buttonRect.left;
    const y = event.clientY - buttonRect.top;

    // 직접 ripple 엘리먼트 생성 및 추가
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x - 50}px`;  // 100px 너비의 절반
    ripple.style.top = `${y - 50}px`;   // 100px 높이의 절반

    // 이전 ripple 제거
    const existingRipple = rippleElement.shadowRoot.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }

    // 새 ripple 추가
    rippleElement.shadowRoot.appendChild(ripple);

    // 애니메이션 종료 후 제거
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    }, { once: true });

    this.dispatchEvent(
      new CustomEvent('vnl-pressstart', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: event },
      })
    );
  }

  private _handleKeyInteraction(event: KeyboardEvent): void {
    if (this.disabled || this.loading) return;

    const isActionKey = event.key === 'Enter' || event.key === ' ';
    const isNavigationKey =
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight' ||
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown';

    if (isActionKey) {
      event.preventDefault();

      if (event.type === 'keydown') {
        this.dispatchEvent(
          new CustomEvent('vnl-pressstart', {
            bubbles: true,
            composed: true,
            detail: { originalEvent: event },
          })
        );
      } else if (event.type === 'keyup') {
        this.click();
        this.dispatchEvent(
          new CustomEvent('vnl-pressend', {
            bubbles: true,
            composed: true,
            detail: { originalEvent: event },
          })
        );
      }
    }

    // Handle navigation in button group context
    if (isNavigationKey && this.parentElement?.tagName === 'VNL-BUTTON-GROUP') {
      event.preventDefault();
      const buttons = Array.from(this.parentElement.querySelectorAll('vnl-button') as NodeListOf<Button>);
      const currentIndex = buttons.indexOf(this);
      let nextIndex = currentIndex;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          nextIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          nextIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
          break;
      }

      buttons[nextIndex].focus();
    }
  }

  private _handleFocus(event: FocusEvent): void {
    if (this.disabled || this.loading) return;

    this.dispatchEvent(
      new CustomEvent('vnl-focus', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: event },
      })
    );
  }

  private _handleBlur(event: FocusEvent): void {
    this.dispatchEvent(
      new CustomEvent('vnl-blur', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: event },
      })
    );
  }

  // Getters/Setters
  get disabled(): boolean {
    return this.hasAttribute('vnl-disabled');
  }

  set disabled(value: boolean) {
    this.toggleAttribute('vnl-disabled', value);
  }

  get loading(): boolean {
    return this.hasAttribute('vnl-loading');
  }

  set loading(value: boolean) {
    this.toggleAttribute('vnl-loading', value);
  }

  get variant(): string {
    return this.getAttribute('vnl-variant') || buttonTheme.defaultProps.variant;
  }

  set variant(value: string) {
    this.setAttribute('vnl-variant', value);
  }

  get color(): string {
    return this.getAttribute('vnl-color') || buttonTheme.defaultProps.color;
  }

  set color(value: string) {
    this.setAttribute('vnl-color', value);
  }

  get size(): string {
    return this.getAttribute('vnl-size') || buttonTheme.defaultProps.size;
  }

  set size(value: string) {
    this.setAttribute('vnl-size', value);
  }

  get fullwidth(): boolean {
    return this.hasAttribute('vnl-fullwidth');
  }

  set fullwidth(value: boolean) {
    if (value) {
      this.setAttribute('vnl-fullwidth', 'true');
    } else {
      this.removeAttribute('vnl-fullwidth');
    }
  }

  get radius(): string {
    return this.getAttribute('vnl-radius') || buttonTheme.defaultProps.radius;
  }

  set radius(value: string) {
    this.setAttribute('vnl-radius', value);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (oldValue === newValue) return;

    // Ensure button element exists
    if (!this.shadowRoot || !this.button) {
      requestAnimationFrame(() => {
        this.attributeChangedCallback(name, oldValue, newValue);
      });
      return;
    }

    switch (name) {
      case 'vnl-disabled':
      case 'vnl-loading':
        this.button.disabled = this.disabled || this.loading;
        break;
      case 'vnl-disableRipple':
        if (this.ripple) {
          this.ripple.style.display = this.hasAttribute('vnl-disableRipple') ? 'none' : 'block';
        }
        break;
      case 'vnl-variant':
      case 'vnl-color':
      case 'vnl-size':
      case 'vnl-radius':
        // Force style update
        this.button.style.display = this.button.style.display;
        break;
    }

    // Notify attribute change
    this.dispatchEvent(
      new CustomEvent('vnl-change', {
        bubbles: true,
        composed: true,
        detail: { name, oldValue, newValue }
      })
    );
  }

  connectedCallback(): void {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'button');
    }
  }
}

// Button 컴포넌트도 직접 정의
if (!customElements.get('vnl-button')) {
  customElements.define('vnl-button', Button);
}