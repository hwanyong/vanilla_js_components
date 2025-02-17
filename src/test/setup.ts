import { beforeAll, afterEach, expect } from 'vitest';

// Web Components polyfill for testing environment
import 'happy-dom/custom-elements';

// Global test setup
beforeAll(() => {
  // Reset custom elements registry
  (window as any).customElements = new CustomElementRegistry();
});

// Global test teardown
afterEach(() => {
  // Clean up any registered elements after each test
  document.body.innerHTML = '';
});

// Add custom matchers or global test utilities here if needed
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