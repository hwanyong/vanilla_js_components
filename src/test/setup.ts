import { beforeAll, afterEach, expect } from 'vitest';
import 'happy-dom/custom-elements';

// Import component styles
import { ButtonStyles } from '../components/button/button.styles';
import { RippleStyles } from '../components/ripple/ripple.styles';

// Global test setup
beforeAll(() => {
  // Reset custom elements registry
  (window as any).customElements = new CustomElementRegistry();

  // Add component styles to head
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(ButtonStyles);
  document.adoptedStyleSheets = [styleSheet];

  const rippleStyleSheet = new CSSStyleSheet();
  rippleStyleSheet.replaceSync(RippleStyles);
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, rippleStyleSheet];
});

// Global test teardown
afterEach(() => {
  // Clean up any registered elements after each test
  document.body.innerHTML = '';
});

// Custom matchers
expect.extend({
  toHaveAttribute(received: Element, attr: string, value?: string) {
    const hasAttr = received.hasAttribute(attr);
    const actualValue = received.getAttribute(attr);
    if (value === undefined) {
      return {
        message: () =>
          `expected element ${hasAttr ? 'not ' : ''}to have attribute "${attr}"`,
        pass: hasAttr,
      };
    }
    return {
      message: () =>
        `expected element to have attribute "${attr}" with value "${value}", but got "${actualValue}"`,
      pass: hasAttr && actualValue === value,
    };
  },
});