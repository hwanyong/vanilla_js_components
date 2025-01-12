/**
 * 버튼 컴포넌트
 *
 * @remarks
 * 기본적인 버튼 기능을 제공하는 Web Component입니다.
 * NextUI와 shadcn/ui의 디자인을 참고하여 만들어졌습니다.
 *
 * @example
 * ```html
 * <ui-button variant="solid" size="md">
 *   Click me
 * </ui-button>
 * ```
 *
 * @csspart button - 버튼의 루트 엘리먼트
 * @csspart icon - 버튼 내부의 아이콘 엘리먼트
 *
 * @fires click - 버튼 클릭 시 발생
 * @fires focus - 버튼이 포커스를 받을 때 발생
 * @fires blur - 버튼이 포커스를 잃을 때 발생
 *
 * @slot default - 버튼의 내용
 * @slot icon - 버튼의 아이콘
 */
export class ButtonElement extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['variant', 'size', 'disabled'];
  }

  /**
   * 버튼의 변형
   * @type {"solid" | "outline" | "ghost"}
   * @default "solid"
   */
  get variant(): string {
    return this.getAttribute('variant') || 'solid';
  }

  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  /**
   * 버튼의 크기
   * @type {"sm" | "md" | "lg"}
   * @default "md"
   */
  get size(): string {
    return this.getAttribute('size') || 'md';
  }

  set size(value: string) {
    this.setAttribute('size', value);
  }

  /**
   * 버튼의 비활성화 상태
   * @type {boolean}
   * @default false
   */
  get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  set disabled(value: boolean) {
    if (value) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  /**
   * 컴포넌트가 DOM에 연결될 때 호출됩니다.
   */
  connectedCallback(): void {
    this.render();
    this.setupEventListeners();
  }

  /**
   * 속성이 변경될 때 호출됩니다.
   */
  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  /**
   * 이벤트 리스너를 설정합니다.
   * @internal
   */
  private setupEventListeners(): void {
    const button = this.shadowRoot?.querySelector('button');
    if (!button) return;

    button.addEventListener('click', this.handleClick.bind(this));
    button.addEventListener('focus', this.handleFocus.bind(this));
    button.addEventListener('blur', this.handleBlur.bind(this));
  }

  /**
   * 클릭 이벤트를 처리합니다.
   * @param event - 클릭 이벤트
   */
  private handleClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.dispatchEvent(new CustomEvent('click', { bubbles: true, composed: true }));
  }

  /**
   * 포커스 이벤트를 처리합니다.
   */
  private handleFocus(): void {
    this.dispatchEvent(new CustomEvent('focus', { bubbles: true, composed: true }));
  }

  /**
   * 블러 이벤트를 처리합니다.
   */
  private handleBlur(): void {
    this.dispatchEvent(new CustomEvent('blur', { bubbles: true, composed: true }));
  }

  /**
   * 컴포넌트를 렌더링합니다.
   * @internal
   */
  private render(): void {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          font-family: inherit;
          font-weight: 500;
          transition: all 0.2s;
          position: relative;
          outline: none;
        }

        button[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Variants */
        button.variant-solid {
          background: var(--ui-button-bg, #0070f3);
          color: white;
        }

        button.variant-outline {
          background: transparent;
          border: 1px solid var(--ui-button-border, #0070f3);
          color: var(--ui-button-text, #0070f3);
        }

        button.variant-ghost {
          background: transparent;
          color: var(--ui-button-text, #0070f3);
        }

        /* Sizes */
        button.size-sm {
          height: 2rem;
          padding: 0 0.75rem;
          font-size: 0.875rem;
        }

        button.size-md {
          height: 2.5rem;
          padding: 0 1rem;
          font-size: 1rem;
        }

        button.size-lg {
          height: 3rem;
          padding: 0 1.5rem;
          font-size: 1.125rem;
        }

        /* Slots */
        ::slotted([slot="icon"]) {
          margin-right: 0.5rem;
        }
      </style>
      <button
        part="button"
        class="variant-${this.variant} size-${this.size}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('ui-button', ButtonElement);
