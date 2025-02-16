import { buttonTheme } from './button.theme';

export const ButtonStyles = `
  :host {
    display: inline-block;
    position: relative;
  }

  /* Color variants as direct CSS variables */
  :host([vnl-color="primary"]) {
    background: var(--vnl-colors-primary, #006FEE);
    color: white;
  }

  :host([vnl-color="secondary"]) {
    background: var(--vnl-colors-secondary, #7828C8);
    color: white;
  }

  :host([vnl-color="success"]) {
    background: var(--vnl-colors-success, #17C964);
    color: white;
  }

  :host([vnl-color="warning"]) {
    background: var(--vnl-colors-warning, #F5A524);
    color: white;
  }

  :host([vnl-color="danger"]) {
    background: var(--vnl-colors-danger, #F31260);
    color: white;
  }

  :host([vnl-color="default"]) {
    background: var(--vnl-colors-default, #71717A);
    color: white;
  }

  /* Base button styles */
  .vnl-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0.625rem 1.25rem;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: var(--vnl-font-size-md, 1rem);
    line-height: 1.5;
    transition: all 0.15s ease;
    overflow: hidden;
    background: inherit;
    color: inherit;
  }

  /* Variant modifiers */
  :host([vnl-variant="solid"]) .vnl-button {
    background: inherit;
    color: inherit;
    border-color: transparent;
  }

  :host([vnl-variant="bordered"]) .vnl-button {
    background: transparent;
    color: inherit;
    border-color: currentColor;
  }

  :host([vnl-variant="light"]) .vnl-button {
    background: color-mix(in srgb, currentColor 10%, transparent);
    color: inherit;
    border-color: transparent;
  }

  :host([vnl-variant="flat"]) .vnl-button {
    background: transparent;
    color: inherit;
    border-color: transparent;
  }

  :host([vnl-variant="faded"]) .vnl-button {
    background: color-mix(in srgb, currentColor 10%, transparent);
    color: inherit;
    border-color: transparent;
    opacity: 0.7;
  }

  :host([vnl-variant="shadow"]) .vnl-button {
    background: inherit;
    color: inherit;
    border-color: transparent;
    box-shadow: 0 4px 14px 0 color-mix(in srgb, currentColor 40%, transparent);
  }

  :host([vnl-variant="ghost"]) .vnl-button {
    background: transparent;
    color: inherit;
    border-color: transparent;
  }

  /* Hover states */
  :host([vnl-variant="solid"]) .vnl-button:hover,
  :host([vnl-variant="shadow"]) .vnl-button:hover {
    filter: brightness(0.9);
  }

  :host([vnl-variant="bordered"]) .vnl-button:hover,
  :host([vnl-variant="light"]) .vnl-button:hover,
  :host([vnl-variant="flat"]) .vnl-button:hover,
  :host([vnl-variant="ghost"]) .vnl-button:hover {
    background: color-mix(in srgb, currentColor 20%, transparent);
  }

  :host([vnl-variant="faded"]) .vnl-button:hover {
    opacity: 1;
  }

  /* States */
  :host([vnl-disabled]) {
    opacity: 0.5;
    pointer-events: none;
  }

  :host([vnl-loading]) {
    cursor: wait;
    pointer-events: none;
  }

  :host([vnl-fullwidth]) {
    display: block;
    width: 100%;
  }

  /* Animation */
  :host(:not([vnl-disableAnimation])) .vnl-button:active {
    transform: scale(0.97);
  }

  /* Slots */
  ::slotted([slot="start-content"]) {
    margin-right: 0.5rem;
  }

  ::slotted([slot="end-content"]) {
    margin-left: 0.5rem;
  }

  /* Loading spinner */
  .spinner {
    position: absolute;
    width: 1em;
    height: 1em;
    border: 0.2em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;