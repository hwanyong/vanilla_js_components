# AI Prompts for Testing Phase

## Purpose
이 문서는 테스트 작성 단계에서 AI에게 제공할 프롬프트 가이드를 포함합니다.

## Unit Testing

### Test Planning
```prompt
[컴포넌트명] 컴포넌트의 단위 테스트 계획을 수립해주세요:
1. 테스트해야 할 기능 목록
2. 테스트 케이스 설계
3. 테스트 우선순위
4. 테스트 데이터 준비
5. 모의(Mock) 객체 필요성 분석

testing.md 문서의 테스트 가이드라인을 따라주세요.
```

### Test Implementation
```prompt
[컴포넌트명] 컴포넌트의 단위 테스트를 구현해주세요:
1. 기본 기능 테스트
2. 속성 변경 테스트
3. 이벤트 발생 테스트
4. 에러 케이스 테스트
5. 상태 변화 테스트

Web Components 테스트 모범 사례를 따라 구현해주세요.
```

## Integration Testing

### Integration Test Cases
```prompt
[컴포넌트명] 컴포넌트의 통합 테스트 케이스를 작성해주세요:
1. 다른 컴포넌트와의 상호작용
2. DOM 이벤트 전파
3. 스타일 상속
4. 테마 통합
5. 전역 상태 영향

실제 브라우저 환경을 고려한 테스트를 작성해주세요.
```

## Performance Testing

### Performance Test Cases
```prompt
[컴포넌트명] 컴포넌트의 성능 테스트를 작성해주세요:
1. 렌더링 성능
2. 메모리 사용량
3. 이벤트 핸들링 성능
4. 스타일 계산 성능
5. 리플로우/리페인트 영향

performance-testing.md 문서의 성능 기준을 따라주세요.
```

## Accessibility Testing

### A11y Test Cases
```prompt
[컴포넌트명] 컴포넌트의 접근성 테스트를 작성해주세요:
1. ARIA 속성 검증
2. 키보드 탐색 테스트
3. 스크린 리더 호환성
4. 색상 대비 테스트
5. 확대/축소 테스트

WCAG 테스트 기준을 준수하여 작성해주세요.
```

## Browser Compatibility

### Cross-browser Test Cases
```prompt
[컴포넌트명] 컴포넌트의 브라우저 호환성 테스트를 작성해주세요:
1. 주요 브라우저 지원 확인
2. 폴리필 필요성 테스트
3. CSS 호환성 테스트
4. 이벤트 동작 일관성
5. Shadow DOM 지원 확인

지원 대상 브라우저 목록을 참조하여 작성해주세요.
```

## Test Documentation

### Test Documentation
```prompt
[컴포넌트명] 컴포넌트의 테스트 문서를 작성해주세요:
1. 테스트 범위 설명
2. 테스트 실행 방법
3. 테스트 데이터 설명
4. 알려진 이슈
5. 테스트 결과 해석 가이드

테스트 문서를 마크다운 형식으로 작성해주세요.
```