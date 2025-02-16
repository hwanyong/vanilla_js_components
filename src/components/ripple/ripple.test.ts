import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './ripple.element';

describe('Ripple', () => {
  let ripple: HTMLElement;

  beforeEach(() => {
    ripple = document.createElement('vnl-ripple');
    document.body.appendChild(ripple);
  });

  afterEach(() => {
    document.body.removeChild(ripple);
  });

  it('should create ripple effect on addRipple call', () => {
    const x = 100;
    const y = 100;

    // @ts-ignore - accessing internal method
    ripple.addRipple(x, y);

    const rippleElement = ripple.shadowRoot?.querySelector('.ripple');
    expect(rippleElement).toBeTruthy();
  });

  it('should remove ripple after animation ends', async () => {
    const x = 100;
    const y = 100;

    // @ts-ignore - accessing internal method
    ripple.addRipple(x, y);

    await new Promise(resolve => setTimeout(resolve, 600));
    const rippleElement = ripple.shadowRoot?.querySelector('.ripple');
    expect(rippleElement).toBeFalsy();
  });

  it('should not create multiple ripples while animating', () => {
    const x = 100;
    const y = 100;

    // @ts-ignore - accessing internal method
    ripple.addRipple(x, y);
    // @ts-ignore - accessing internal method
    ripple.addRipple(x, y);

    const rippleElements = ripple.shadowRoot?.querySelectorAll('.ripple');
    expect(rippleElements?.length).toBe(1);
  });

  it('should cleanup ripples on disconnection', () => {
    const x = 100;
    const y = 100;

    // @ts-ignore - accessing internal method
    ripple.addRipple(x, y);

    ripple.remove();

    const rippleElements = ripple.shadowRoot?.querySelectorAll('.ripple');
    expect(rippleElements?.length).toBe(0);
  });
});