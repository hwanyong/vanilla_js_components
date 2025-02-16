import { buttonTheme } from './button.theme';

export const ButtonStyles = `
  :host {
    display: inline-block;
    position: relative;
  }

  .vnl-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: var(--button-bg-color);
  }

  vnl-ripple {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Ensure slots can receive pointer events */
  ::slotted(*) {
    pointer-events: auto;
  }

  /* Size Variants with font sizes */
  :host([vnl-size="sm"]) .vnl-button {
    font-size: var(--vnl-font-size-sm, 0.875rem);
    padding: 0.5rem 1rem;
    height: 32px;
    min-width: 32px;
    line-height: 1.25;
  }

  :host([vnl-size="md"]) .vnl-button {
    font-size: var(--vnl-font-size-md, 1rem);
    padding: 0.625rem 1.25rem;
    height: 40px;
    min-width: 40px;
    line-height: 1.5;
  }

  :host([vnl-size="lg"]) .vnl-button {
    font-size: var(--vnl-font-size-lg, 1.125rem);
    padding: 0.75rem 1.5rem;
    height: 48px;
    min-width: 48px;
    line-height: 1.75;
  }

  /* Variants */
  :host([vnl-variant="solid"]) .vnl-button {
    background-color: var(--button-bg-color);
    color: #fff;
  }

  :host([vnl-variant="bordered"]) .vnl-button {
    background-color: transparent;
    border: 1px solid var(--button-bg-color);
    color: var(--button-bg-color);
  }

  :host([vnl-variant="light"]) .vnl-button {
    background-color: var(--button-light-color, rgba(var(--button-bg-color-rgb), 0.1));
    color: var(--button-bg-color);
  }

  :host([vnl-variant="flat"]) .vnl-button {
    background-color: transparent;
    color: var(--button-bg-color);
  }

  :host([vnl-variant="faded"]) .vnl-button {
    background-color: var(--button-light-color, rgba(var(--button-bg-color-rgb), 0.1));
    color: var(--button-bg-color);
    opacity: 0.7;
  }

  :host([vnl-variant="shadow"]) .vnl-button {
    background-color: var(--button-bg-color);
    color: #fff;
    box-shadow: 0 4px 14px 0 var(--button-shadow-color);
  }

  :host([vnl-variant="ghost"]) .vnl-button {
    background-color: transparent;
    color: var(--button-bg-color);
  }

  /* Hover States */
  :host([vnl-variant="solid"]) .vnl-button:hover,
  :host([vnl-variant="shadow"]) .vnl-button:hover {
    opacity: 0.85;
  }

  :host([vnl-variant="bordered"]) .vnl-button:hover {
    background-color: var(--button-bg-color);
    color: #fff;
    opacity: 0.85;
  }

  :host([vnl-variant="light"]) .vnl-button:hover,
  :host([vnl-variant="flat"]) .vnl-button:hover,
  :host([vnl-variant="ghost"]) .vnl-button:hover {
    background-color: var(--button-light-hover-color, rgba(var(--button-bg-color-rgb), 0.2));
  }

  :host([vnl-variant="faded"]) .vnl-button:hover {
    opacity: 1;
  }

  /* Radius Variants */
  ${Object.entries(buttonTheme.styles.radius)
    .map(([size, value]) => `
      :host([vnl-radius="${size}"]) .vnl-button {
        border-radius: ${value};
      }
    `).join('\n')}

  /* States */
  :host([vnl-disabled]) .vnl-button {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  :host([vnl-loading]) .vnl-button {
    position: relative;
    cursor: wait;
    pointer-events: none;
  }

  :host([vnl-loading]) .content {
    opacity: 0;
  }

  :host([vnl-fullwidth]) {
    display: block;
  }

  :host([vnl-fullwidth]) .vnl-button {
    width: 100%;
  }

  :host([vnl-icon]) .vnl-button {
    padding: 0;
    aspect-ratio: 1/1;
  }

  /* Focus Styles */
  .vnl-button:focus-visible {
    outline: 2px solid var(--button-bg-color);
    outline-offset: 2px;
  }

  /* Animation States */
  :host(:not([vnl-disableAnimation])) .vnl-button {
    transform: scale(1);
  }

  :host(:not([vnl-disableAnimation])) .vnl-button:active {
    transform: scale(0.97);
  }

  /* Slots */
  ::slotted([slot="start-content"]) {
    margin-right: var(--vnl-space-1);
  }

  ::slotted([slot="end-content"]) {
    margin-left: var(--vnl-space-1);
  }

  /* Loading Spinner */
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1em;
    height: 1em;
    border: 0.2em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;