export const RippleStyles = `
  :host {
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
    z-index: 0;
  }

  :host([vnl-disabled]) {
    display: none;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    transform-origin: center;
    background: currentColor;
    opacity: 0.2;
    transform: scale(0);
    width: 100px;
    height: 100px;
    will-change: transform, opacity;
    animation: ripple-animation 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    from {
      transform: scale(0);
      opacity: 0.2;
    }
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;