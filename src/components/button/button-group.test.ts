import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './button-group.element';
import './button.element';
import { ButtonGroup } from './button-group.element';
import { Button } from './button.element';

describe('ButtonGroup', () => {
  let buttonGroup: ButtonGroup;
  let buttons: Button[];

  beforeEach(() => {
    buttonGroup = document.createElement('vnl-button-group') as ButtonGroup;
    buttons = Array.from({ length: 3 }, (_, i) => {
      const button = document.createElement('vnl-button') as Button;
      button.textContent = `Button ${i + 1}`;
      return button;
    });

    buttons.forEach(button => buttonGroup.appendChild(button));
    document.body.appendChild(buttonGroup);
  });

  afterEach(() => {
    document.body.removeChild(buttonGroup);
  });

  describe('attribute synchronization', () => {
    it('should sync variant attribute to child buttons', () => {
      buttonGroup.setAttribute('vnl-variant', 'bordered');
      buttons.forEach(button => {
        expect(button.getAttribute('vnl-variant')).toBe('bordered');
      });
    });

    it('should sync color attribute to child buttons', () => {
      buttonGroup.setAttribute('vnl-color', 'success');
      buttons.forEach(button => {
        expect(button.getAttribute('vnl-color')).toBe('success');
      });
    });

    it('should sync size attribute to child buttons', () => {
      buttonGroup.setAttribute('vnl-size', 'lg');
      buttons.forEach(button => {
        expect(button.getAttribute('vnl-size')).toBe('lg');
      });
    });

    it('should sync radius attribute to child buttons', () => {
      buttonGroup.setAttribute('vnl-radius', 'full');
      buttons.forEach(button => {
        expect(button.getAttribute('vnl-radius')).toBe('full');
      });
    });

    it('should sync disabled state to child buttons', () => {
      buttonGroup.setAttribute('vnl-disabled', '');
      buttons.forEach(button => {
        expect(button.hasAttribute('vnl-disabled')).toBe(true);
      });
    });
  });

  describe('dynamic child management', () => {
    it('should sync attributes to dynamically added buttons', () => {
      buttonGroup.setAttribute('vnl-variant', 'bordered');
      buttonGroup.setAttribute('vnl-color', 'primary');

      const newButton = document.createElement('vnl-button') as Button;
      newButton.textContent = 'New Button';
      buttonGroup.appendChild(newButton);

      expect(newButton.getAttribute('vnl-variant')).toBe('bordered');
      expect(newButton.getAttribute('vnl-color')).toBe('primary');
    });
  });

  describe('layout', () => {
    it('should apply fullwidth style when vnl-fullwidth is set', () => {
      buttonGroup.setAttribute('vnl-fullwidth', '');
      const computedStyle = window.getComputedStyle(buttonGroup);
      expect(computedStyle.display).toBe('block');
    });
  });
});