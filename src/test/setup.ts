import { afterEach } from 'vitest';
import { Window } from 'happy-dom';

const window = new Window({
  url: 'http://localhost',
  width: 1024,
  height: 768,
});

const document = window.document;

// 각 테스트 후 DOM 정리
afterEach(() => {
  document.body.innerHTML = '';
});
