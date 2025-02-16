import { buttonTheme } from './button.theme';

export const ButtonStyles = `
  :host {
    display: inline-block;
    position: relative;

    /* Color RGB values for current/hover effects */
    --primary-rgb: 0, 111, 238;
    --secondary-rgb: 120, 40, 200;
    --success-rgb: 23, 201, 100;
    --warning-rgb: 245, 165, 36;
    --danger-rgb: 243, 18, 96;
    --default-rgb: 113, 113, 122;
  }

  .vnl-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0 16px;
    border: 1px solid;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
    transition: all 0.15s ease;
    overflow: hidden;
  }

  /* Direct size styles */
  .vnl-button {
    height: 40px;
    font-size: 1rem;
  }

  :host([vnl-size="sm"]) .vnl-button {
    height: 32px !important;
    font-size: 0.875rem !important;
    padding: 0 12px !important;
  }

  :host([vnl-size="lg"]) .vnl-button {
    height: 48px !important;
    font-size: 1.125rem !important;
    padding: 0 20px !important;
  }

  /* Direct radius styles */
  .vnl-button {
    border-radius: 0.375rem;
  }

  :host([vnl-radius="none"]) .vnl-button {
    border-radius: 0 !important;
  }

  :host([vnl-radius="sm"]) .vnl-button {
    border-radius: 0.125rem !important;
  }

  :host([vnl-radius="lg"]) .vnl-button {
    border-radius: 0.5rem !important;
  }

  :host([vnl-radius="full"]) .vnl-button {
    border-radius: 9999px !important;
  }

  /* Direct color styles for solid variant */
  :host([vnl-variant="solid"][vnl-color="primary"]) .vnl-button {
    background: rgb(var(--primary-rgb));
    color: white;
    border-color: rgb(var(--primary-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="secondary"]) .vnl-button {
    background: rgb(var(--secondary-rgb));
    color: white;
    border-color: rgb(var(--secondary-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="success"]) .vnl-button {
    background: rgb(var(--success-rgb));
    color: white;
    border-color: rgb(var(--success-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="warning"]) .vnl-button {
    background: rgb(var(--warning-rgb));
    color: white;
    border-color: rgb(var(--warning-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="danger"]) .vnl-button {
    background: rgb(var(--danger-rgb));
    color: white;
    border-color: rgb(var(--danger-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="default"]) .vnl-button {
    background: #71717A;
    color: white;
    border-color: #71717A;
  }

  /* Hover states for solid variant */
  :host([vnl-variant="solid"][vnl-color="primary"]) .vnl-button:hover {
    background: #0054B4;
    border-color: #0054B4;
  }

  :host([vnl-variant="solid"][vnl-color="secondary"]) .vnl-button:hover {
    background: #5C1E9E;
    border-color: #5C1E9E;
  }

  :host([vnl-variant="solid"][vnl-color="success"]) .vnl-button:hover {
    background: #13A452;
    border-color: #13A452;
  }

  :host([vnl-variant="solid"][vnl-color="warning"]) .vnl-button:hover {
    background: #D48C1E;
    border-color: #D48C1E;
  }

  :host([vnl-variant="solid"][vnl-color="danger"]) .vnl-button:hover {
    background: #CC0E50;
    border-color: #CC0E50;
  }

  :host([vnl-variant="solid"][vnl-color="default"]) .vnl-button:hover {
    background: #52525B;
    border-color: #52525B;
  }

  /* Light variant styles */
  :host([vnl-variant="light"]) .vnl-button {
    background: transparent;
    border-color: transparent;
  }

  :host([vnl-variant="light"][vnl-color="primary"]) .vnl-button {
    color: rgb(var(--primary-rgb));
    background: rgba(0, 111, 238, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="secondary"]) .vnl-button {
    color: rgb(var(--secondary-rgb));
    background: rgba(120, 40, 200, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="success"]) .vnl-button {
    color: rgb(var(--success-rgb));
    background: rgba(23, 201, 100, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="warning"]) .vnl-button {
    color: rgb(var(--warning-rgb));
    background: rgba(245, 165, 36, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="danger"]) .vnl-button {
    color: rgb(var(--danger-rgb));
    background: rgba(243, 18, 96, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="default"]) .vnl-button {
    color: #71717A;
    background: rgba(113, 113, 122, 0.1);
  }

  /* Bordered variant styles */
  :host([vnl-variant="bordered"]) .vnl-button {
    background: transparent;
  }

  :host([vnl-variant="bordered"][vnl-color="primary"]) .vnl-button {
    color: rgb(var(--primary-rgb));
    border-color: rgb(var(--primary-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="secondary"]) .vnl-button {
    color: rgb(var(--secondary-rgb));
    border-color: rgb(var(--secondary-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="success"]) .vnl-button {
    color: rgb(var(--success-rgb));
    border-color: rgb(var(--success-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="warning"]) .vnl-button {
    color: rgb(var(--warning-rgb));
    border-color: rgb(var(--warning-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="danger"]) .vnl-button {
    color: rgb(var(--danger-rgb));
    border-color: rgb(var(--danger-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="default"]) .vnl-button {
    color: #71717A;
    border-color: #71717A;
  }

  /* Flat variant styles */
  :host([vnl-variant="flat"]) .vnl-button {
    background: transparent;
    border-color: transparent;
  }

  :host([vnl-variant="flat"][vnl-color="primary"]) .vnl-button {
    color: rgb(var(--primary-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="secondary"]) .vnl-button {
    color: rgb(var(--secondary-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="success"]) .vnl-button {
    color: rgb(var(--success-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="warning"]) .vnl-button {
    color: rgb(var(--warning-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="danger"]) .vnl-button {
    color: rgb(var(--danger-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="default"]) .vnl-button {
    color: #71717A;
  }

  :host([vnl-variant="flat"][vnl-color="primary"]) .vnl-button:hover {
    background: rgba(var(--primary-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="secondary"]) .vnl-button:hover {
    background: rgba(var(--secondary-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="success"]) .vnl-button:hover {
    background: rgba(var(--success-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="warning"]) .vnl-button:hover {
    background: rgba(var(--warning-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="danger"]) .vnl-button:hover {
    background: rgba(var(--danger-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="default"]) .vnl-button:hover {
    background: rgba(var(--default-rgb), 0.1);
  }

  /* Faded variant styles */
  :host([vnl-variant="faded"]) .vnl-button {
    background: transparent;
    border-color: transparent;
    opacity: 0.7;
  }

  :host([vnl-variant="faded"][vnl-color="primary"]) .vnl-button {
    color: rgb(var(--primary-rgb));
    background: rgba(0, 111, 238, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="secondary"]) .vnl-button {
    color: rgb(var(--secondary-rgb));
    background: rgba(120, 40, 200, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="success"]) .vnl-button {
    color: rgb(var(--success-rgb));
    background: rgba(23, 201, 100, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="warning"]) .vnl-button {
    color: rgb(var(--warning-rgb));
    background: rgba(245, 165, 36, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="danger"]) .vnl-button {
    color: rgb(var(--danger-rgb));
    background: rgba(243, 18, 96, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="default"]) .vnl-button {
    color: #71717A;
    background: rgba(113, 113, 122, 0.1);
  }

  :host([vnl-variant="faded"]) .vnl-button:hover {
    opacity: 1;
  }

  /* Shadow variant styles */
  :host([vnl-variant="shadow"]) .vnl-button {
    background: transparent;
    border-color: transparent;
  }

  :host([vnl-variant="shadow"][vnl-color="primary"]) .vnl-button {
    color: white;
    background: rgb(var(--primary-rgb));
    box-shadow: 0 4px 14px 0 rgba(0, 111, 238, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="secondary"]) .vnl-button {
    color: white;
    background: rgb(var(--secondary-rgb));
    box-shadow: 0 4px 14px 0 rgba(120, 40, 200, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="success"]) .vnl-button {
    color: white;
    background: rgb(var(--success-rgb));
    box-shadow: 0 4px 14px 0 rgba(23, 201, 100, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="warning"]) .vnl-button {
    color: white;
    background: rgb(var(--warning-rgb));
    box-shadow: 0 4px 14px 0 rgba(245, 165, 36, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="danger"]) .vnl-button {
    color: white;
    background: rgb(var(--danger-rgb));
    box-shadow: 0 4px 14px 0 rgba(243, 18, 96, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="default"]) .vnl-button {
    color: white;
    background: #71717A;
    box-shadow: 0 4px 14px 0 rgba(113, 113, 122, 0.4);
  }

  :host([vnl-variant="shadow"]) .vnl-button:hover {
    transform: translateY(-2px);
  }

  /* Ghost variant styles */
  :host([vnl-variant="ghost"]) .vnl-button {
    background: transparent;
    border-color: transparent;
  }

  :host([vnl-variant="ghost"][vnl-color="primary"]) .vnl-button {
    border-color: rgb(var(--primary-rgb));
    color: rgb(var(--primary-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="secondary"]) .vnl-button {
    border-color: rgb(var(--secondary-rgb));
    color: rgb(var(--secondary-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="success"]) .vnl-button {
    border-color: rgb(var(--success-rgb));
    color: rgb(var(--success-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="warning"]) .vnl-button {
    border-color: rgb(var(--warning-rgb));
    color: rgb(var(--warning-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="danger"]) .vnl-button {
    border-color: rgb(var(--danger-rgb));
    color: rgb(var(--danger-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="default"]) .vnl-button {
    border-color: #71717A;
    color: #71717A;
  }

  :host([vnl-variant="ghost"]) .vnl-button:hover {
    background: rgba(var(--current-color-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="primary"]) .vnl-button:hover {
    background: rgba(var(--primary-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="secondary"]) .vnl-button:hover {
    background: rgba(var(--secondary-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="success"]) .vnl-button:hover {
    background: rgba(var(--success-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="warning"]) .vnl-button:hover {
    background: rgba(var(--warning-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="danger"]) .vnl-button:hover {
    background: rgba(var(--danger-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="default"]) .vnl-button:hover {
    background: rgba(var(--default-rgb), 0.1);
  }

  /* States */
  :host([vnl-disabled]) .vnl-button {
    opacity: 0.5;
    pointer-events: none;
  }

  :host([vnl-loading]) .vnl-button {
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