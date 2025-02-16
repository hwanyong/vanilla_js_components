import { buttonGroupTheme } from './button-group.theme';

export class ButtonGroup extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'vnl-variant',
      'vnl-color',
      'vnl-size',
      'vnl-radius',
      'vnl-disabled',
    ];
  }

  constructor() {
    super();
    this._initialize();
  }

  private _initialize(): void {
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.setAttribute('part', 'group');
    container.setAttribute('role', 'group');
    container.classList.add('vnl-button-group');

    // Add ARIA attributes
    if (!this.hasAttribute('aria-label')) {
      this.setAttribute('aria-label', 'Button group');
    }

    container.innerHTML = '<slot></slot>';

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: inline-block;
      }

      .vnl-button-group {
        ${Object.entries(buttonGroupTheme.styles.base)
          .map(([prop, value]) => `${prop}: ${value};`)
          .join(';\n')}
      }

      ${Object.entries(buttonGroupTheme.styles.variants)
        .map(([variant, styles]) => `
          :host([vnl-variant="${variant}"]) ${styles['::part(button)'] ? `::slotted(vnl-button)` : ''} {
            ${Object.entries(styles['::part(button)'] || {})
              .map(([selector, props]) => `
                ${selector} {
                  ${Object.entries(props)
                    .map(([prop, value]) => `${prop}: ${value};`)
                    .join(';\n')}
                }
              `).join('\n')}
          }
        `).join('\n')}

      :host([vnl-fullwidth]) {
        display: block;
      }

      :host([vnl-fullwidth]) .vnl-button-group {
        display: flex;
        width: 100%;
      }

      :host([vnl-fullwidth]) ::slotted(vnl-button) {
        flex: 1;
      }

      /* Focus management styles */
      :host(:focus-within) {
        outline: none;
        box-shadow: 0 0 0 2px var(--button-focus-ring-color, rgba(0, 111, 238, 0.4));
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(container);

    this._syncChildrenAttributes();
    this._setupKeyboardNavigation();
  }

  private _setupKeyboardNavigation(): void {
    this.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        const buttons = Array.from(this.querySelectorAll('vnl-button'));
        const targetButton = (event.key === 'Home' ? buttons[0] : buttons[buttons.length - 1]) as HTMLElement;
        targetButton?.focus();
      }
    });

    // Set tabindex on buttons for proper focus management
    this.addEventListener('slotchange', () => {
      const buttons = Array.from(this.querySelectorAll('vnl-button'));
      buttons.forEach((button, index) => {
        button.setAttribute('tabindex', index === 0 ? '0' : '-1');
      });
    });
  }

  private _syncChildrenAttributes(): void {
    const buttons = Array.from(this.querySelectorAll('vnl-button'));

    buttons.forEach((button, index) => {
      // Set ARIA attributes for better accessibility
      button.setAttribute('role', 'groupitem');
      button.setAttribute('aria-setsize', buttons.length.toString());
      button.setAttribute('aria-posinset', (index + 1).toString());

      // Sync other attributes
      ['variant', 'color', 'size', 'radius', 'disabled'].forEach(attr => {
        const groupAttr = this.getAttribute(`vnl-${attr}`);
        if (groupAttr !== null) {
          button.setAttribute(`vnl-${attr}`, groupAttr);
        }
      });
    });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (oldValue === newValue) return;
    this._syncChildrenAttributes();
  }

  connectedCallback(): void {
    // MutationObserver to watch for dynamically added buttons
    const observer = new MutationObserver(() => {
      this._syncChildrenAttributes();
    });

    observer.observe(this, {
      childList: true,
      subtree: true
    });
  }
}

customElements.define('vnl-button-group', ButtonGroup);