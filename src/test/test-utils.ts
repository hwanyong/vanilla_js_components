import { getQueriesForElement } from '@testing-library/dom';

/**
 * Web Component를 테스트하기 위한 유틸리티 함수
 */
export function renderComponent<T extends HTMLElement>(
  element: T,
  container: HTMLElement = document.body
): T & ReturnType<typeof getQueriesForElement> {
  container.appendChild(element);
  return Object.assign(element, getQueriesForElement(element));
}

/**
 * Shadow DOM 내부의 요소를 쿼리하기 위한 유틸리티 함수
 */
export function queryShadowRoot<T extends HTMLElement>(
  element: T,
  selector: string
): Element | null {
  return element.shadowRoot?.querySelector(selector) || null;
}

/**
 * 비동기 이벤트를 기다리기 위한 유틸리티 함수
 */
export function waitForEvent(
  element: HTMLElement,
  eventName: string,
  options: { timeout?: number } = {}
): Promise<Event> {
  const { timeout = 1000 } = options;

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Timeout waiting for event "${eventName}"`));
    }, timeout);

    element.addEventListener(
      eventName,
      (event) => {
        clearTimeout(timer);
        resolve(event);
      },
      { once: true }
    );
  });
}
