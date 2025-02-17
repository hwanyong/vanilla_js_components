export const RippleStyles = `
  :host {
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  :host([vnl-disabled]) {
    display: none;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    transform-origin: center;
    background: currentColor;
    opacity: 0.25;
    transform: scale(0);
    width: 50px;
    height: 50px;
    will-change: transform, opacity;
    animation: ripple-animation 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes ripple-animation {
    from {
      transform: scale(0);
      opacity: 0.25;
    }
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;