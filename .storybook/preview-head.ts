import { defineCustomElements } from '../src/index';

// 모든 커스텀 엘리먼트를 등록
defineCustomElements();

// 전역 스타일 적용
export const decorators = [
  (Story) => {
    return Story();
  }
];