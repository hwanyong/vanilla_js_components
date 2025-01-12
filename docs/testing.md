# Testing Guide

This document outlines the testing setup and guidelines for the project.

## Setup

### Dependencies
```json
{
  "devDependencies": {
    "vitest": "^2.1.8",
    "@vitest/coverage-v8": "^2.1.8",
    "@testing-library/dom": "^10.4.0",
    "happy-dom": "^16.5.3"
  }
}
```

## Test Configuration

### Vitest Config (vitest.config.ts)
```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        '**/*.test.ts',
        '**/*.d.ts',
      ],
    },
    include: ['src/**/*.test.ts'],
    setupFiles: ['./src/test/setup.ts'],
  },
});
```

## Test Utilities

### Component Rendering
```typescript
import { renderComponent, queryShadowRoot, waitForEvent } from '../test/test-utils';

// 컴포넌트 렌더링
const button = renderComponent(new ButtonElement());

// Shadow DOM 쿼리
const innerButton = queryShadowRoot(button, 'button');

// 이벤트 대기
await waitForEvent(button, 'click');
```

## Writing Tests

### Component Test Example
```typescript
import { describe, it, expect } from 'vitest';
import { renderComponent, queryShadowRoot } from '../test/test-utils';
import { ButtonElement } from './button.element';

describe('ButtonElement', () => {
  it('should render with default attributes', () => {
    const button = renderComponent(new ButtonElement());

    expect(button).toHaveAttribute('variant', 'solid');
    expect(button).toHaveAttribute('size', 'md');
  });

  it('should update shadow DOM when attributes change', () => {
    const button = renderComponent(new ButtonElement());
    const innerButton = queryShadowRoot(button, 'button');

    button.setAttribute('variant', 'outline');
    expect(innerButton).toHaveClass('variant-outline');
  });
});
```

## Available Commands

```bash
# 전체 테스트 실행
pnpm run test

# 감시 모드로 테스트 실행
pnpm run test:watch

# 커버리지 리포트 생성
pnpm run test:coverage

# UI 모드로 테스트 실행
pnpm run test:ui
```

## Test Guidelines

1. **파일 구조**
   - 테스트 파일은 구현 파일 옆에 위치
   - 네이밍: `*.test.ts`
   ```
   src/
   ├── components/
   │   └── button/
   │       ├── button.element.ts
   │       └── button.test.ts
   ```

2. **테스트 구조**
   - `describe`로 컴포넌트/기능 단위 그룹화
   - `it`으로 개별 테스트 케이스 작성
   - 명확한 테스트 설명 작성

3. **테스트 범위**
   - 컴포넌트 렌더링
   - 속성 변경
   - 이벤트 핸들링
   - Shadow DOM 업데이트
   - 에지 케이스

4. **모범 사례**
   - 하나의 테스트는 하나의 동작만 검증
   - 테스트 간 독립성 유지
   - 적절한 매처 사용
   - 비동기 동작 적절히 처리

## CI Integration

GitHub Actions에서 테스트 실행:
```yaml
- name: Run Tests
  run: |
    pnpm run test
    pnpm run test:coverage
```

## Coverage Requirements

- 라인 커버리지: 80% 이상
- 브랜치 커버리지: 80% 이상
- 함수 커버리지: 90% 이상

커버리지 리포트는 `coverage/` 디렉토리에 생성됩니다.