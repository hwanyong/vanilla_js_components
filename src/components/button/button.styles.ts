import { buttonTheme } from './button.theme';

export const ButtonStyles = `
  :host {
    display: inline-block;
    position: relative;
    /* Color RGB values for hover effects */
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
    background: #006FEE;
    color: white;
    border-color: #006FEE;
  }

  :host([vnl-variant="solid"][vnl-color="secondary"]) .vnl-button {
    background: #7828C8;
    color: white;
    border-color: #7828C8;
  }

  :host([vnl-variant="solid"][vnl-color="success"]) .vnl-button {
    background: #17C964;
    color: white;
    border-color: #17C964;
  }

  :host([vnl-variant="solid"][vnl-color="warning"]) .vnl-button {
    background: #F5A524;
    color: white;
    border-color: #F5A524;
  }

  :host([vnl-variant="solid"][vnl-color="danger"]) .vnl-button {
    background: #F31260;
    color: white;
    border-color: #F31260;
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
    color: #006FEE;
    background: rgba(0, 111, 238, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="secondary"]) .vnl-button {
    color: #7828C8;
    background: rgba(120, 40, 200, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="success"]) .vnl-button {
    color: #17C964;
    background: rgba(23, 201, 100, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="warning"]) .vnl-button {
    color: #F5A524;
    background: rgba(245, 165, 36, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="danger"]) .vnl-button {
    color: #F31260;
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
    color: #006FEE;
    border-color: #006FEE;
  }

  :host([vnl-variant="bordered"][vnl-color="secondary"]) .vnl-button {
    color: #7828C8;
    border-color: #7828C8;
  }

  :host([vnl-variant="bordered"][vnl-color="success"]) .vnl-button {
    color: #17C964;
    border-color: #17C964;
  }

  :host([vnl-variant="bordered"][vnl-color="warning"]) .vnl-button {
    color: #F5A524;
    border-color: #F5A524;
  }

  :host([vnl-variant="bordered"][vnl-color="danger"]) .vnl-button {
    color: #F31260;
    border-color: #F31260;
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
    color: #006FEE;
  }

  :host([vnl-variant="flat"][vnl-color="secondary"]) .vnl-button {
    color: #7828C8;
  }

  :host([vnl-variant="flat"][vnl-color="success"]) .vnl-button {
    color: #17C964;
  }

  :host([vnl-variant="flat"][vnl-color="warning"]) .vnl-button {
    color: #F5A524;
  }

  :host([vnl-variant="flat"][vnl-color="danger"]) .vnl-button {
    color: #F31260;
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
    color: #006FEE;
    background: rgba(0, 111, 238, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="secondary"]) .vnl-button {
    color: #7828C8;
    background: rgba(120, 40, 200, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="success"]) .vnl-button {
    color: #17C964;
    background: rgba(23, 201, 100, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="warning"]) .vnl-button {
    color: #F5A524;
    background: rgba(245, 165, 36, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="danger"]) .vnl-button {
    color: #F31260;
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
    background: #006FEE;
    box-shadow: 0 4px 14px 0 rgba(0, 111, 238, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="secondary"]) .vnl-button {
    color: white;
    background: #7828C8;
    box-shadow: 0 4px 14px 0 rgba(120, 40, 200, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="success"]) .vnl-button {
    color: white;
    background: #17C964;
    box-shadow: 0 4px 14px 0 rgba(23, 201, 100, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="warning"]) .vnl-button {
    color: white;
    background: #F5A524;
    box-shadow: 0 4px 14px 0 rgba(245, 165, 36, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="danger"]) .vnl-button {
    color: white;
    background: #F31260;
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
    border-color: #006FEE;
    color: #006FEE;
  }

  :host([vnl-variant="ghost"][vnl-color="secondary"]) .vnl-button {
    border-color: #7828C8;
    color: #7828C8;
  }

  :host([vnl-variant="ghost"][vnl-color="success"]) .vnl-button {
    border-color: #17C964;
    color: #17C964;
  }

  :host([vnl-variant="ghost"][vnl-color="warning"]) .vnl-button {
    border-color: #F5A524;
    color: #F5A524;
  }

  :host([vnl-variant="ghost"][vnl-color="danger"]) .vnl-button {
    border-color: #F31260;
    color: #F31260;
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