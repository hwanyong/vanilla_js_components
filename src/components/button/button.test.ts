import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './button.element';
import { Button } from './button.element';

describe('Button', () => {
  let button: Button;

  beforeEach(() => {
    button = document.createElement('vnl-button') as Button;
    document.body.appendChild(button);
  });

  afterEach(() => {
    document.body.removeChild(button);
  });

  describe('attributes', () => {
    it('should have default attributes', () => {
      expect(button.variant).toBe('solid');
      expect(button.color).toBe('primary');
      expect(button.disabled).toBe(false);
      expect(button.loading).toBe(false);
    });

    it('should update variant attribute', () => {
      button.setAttribute('vnl-variant', 'bordered');
      expect(button.variant).toBe('bordered');
    });

    it('should update color attribute', () => {
      button.setAttribute('vnl-color', 'success');
      expect(button.color).toBe('success');
    });

    it('should update disabled state', () => {
      button.disabled = true;
      expect(button.hasAttribute('vnl-disabled')).toBe(true);
      expect(button.shadowRoot?.querySelector('button')?.disabled).toBe(true);
    });

    it('should update loading state', () => {
      button.loading = true;
      expect(button.hasAttribute('vnl-loading')).toBe(true);
      expect(button.shadowRoot?.querySelector('button')?.disabled).toBe(true);
    });
  });

  describe('events', () => {
    it('should emit vnl-press event on click', () => {
      let eventFired = false;
      button.addEventListener('vnl-press', () => {
        eventFired = true;
      });

      button.click();
      expect(eventFired).toBe(true);
    });

    it('should not emit events when disabled', () => {
      let eventFired = false;
      button.disabled = true;
      button.addEventListener('vnl-press', () => {
        eventFired = true;
      });

      button.click();
      expect(eventFired).toBe(false);
    });

    it('should not emit events when loading', () => {
      let eventFired = false;
      button.loading = true;
      button.addEventListener('vnl-press', () => {
        eventFired = true;
      });

      button.click();
      expect(eventFired).toBe(false);
    });
  });

  describe('slots', () => {
    it('should render default slot content', () => {
      button.textContent = 'Click me';
      const slot = button.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
      expect(slot).toBeTruthy();
      expect(slot?.assignedNodes()[0].textContent).toBe('Click me');
    });

    it('should render start content slot', () => {
      const startContent = document.createElement('span');
      startContent.slot = 'start-content';
      startContent.textContent = 'Start';
      button.appendChild(startContent);

      const slot = button.shadowRoot?.querySelector('slot[name="start-content"]') as HTMLSlotElement;
      expect(slot).toBeTruthy();
      expect(slot?.assignedNodes()[0]).toBe(startContent);
    });

    it('should render end content slot', () => {
      const endContent = document.createElement('span');
      endContent.slot = 'end-content';
      endContent.textContent = 'End';
      button.appendChild(endContent);

      const slot = button.shadowRoot?.querySelector('slot[name="end-content"]') as HTMLSlotElement;
      expect(slot).toBeTruthy();
      expect(slot?.assignedNodes()[0]).toBe(endContent);
    });
  });

  describe('keyboard navigation', () => {
    it('should trigger click on Enter keypress', () => {
      let clicked = false;
      button.addEventListener('vnl-press', () => {
        clicked = true;
      });

      button.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      expect(clicked).toBe(true);
    });

    it('should trigger click on Space keypress', () => {
      let clicked = false;
      button.addEventListener('vnl-press', () => {
        clicked = true;
      });

      button.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
      expect(clicked).toBe(true);
    });
  });
});