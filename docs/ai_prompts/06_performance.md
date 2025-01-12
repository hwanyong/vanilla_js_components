# AI Prompts for Performance Optimization Phase

## Purpose
이 문서는 성능 최적화 단계에서 AI에게 제공할 프롬프트 가이드를 포함합니다.

## Performance Analysis

### Initial Assessment
```prompt
[컴포넌트명] 컴포넌트의 성능 분석을 수행해주세요:
1. 렌더링 성능 측정
2. 메모리 사용량 분석
3. 번들 크기 분석
4. 이벤트 핸들링 성능
5. 리플로우/리페인트 영향

performance-testing.md의 성능 기준을 따라 분석해주세요.
```

### Performance Metrics
```prompt
[컴포넌트명] 컴포넌트의 성능 지표를 수집해주세요:
1. First Paint 시간
2. 메모리 사용량 추이
3. CPU 사용률
4. 이벤트 응답 시간
5. 애니메이션 프레임 레이트

bundle-analysis.md의 성능 지표를 참조해주세요.
```

## Code Optimization

### Runtime Performance
```prompt
[컴포넌트명] 컴포넌트의 런타임 성능을 최적화해주세요:
1. DOM 조작 최적화
2. 이벤트 위임 구현
3. 메모리 누수 방지
4. 애니메이션 최적화
5. 비동기 처리 개선

성능 최적화 모범 사례를 적용해주세요.
```

### Bundle Size
```prompt
[컴포넌트명] 컴포넌트의 번들 크기를 최적화해주세요:
1. 코드 분할
2. 트리쉐이킹
3. 미사용 코드 제거
4. 에셋 최적화
5. 의존성 최적화

bundle-analysis.md의 최적화 가이드라인을 따라주세요.
```

## Resource Optimization

### Asset Management
```prompt
[컴포넌트명] 컴포넌트의 리소스를 최적화해주세요:
1. 이미지 최적화
2. 폰트 최적화
3. CSS 최적화
4. SVG 최적화
5. 캐시 전략

리소스 로딩 성능을 개선해주세요.
```

### Loading Strategy
```prompt
[컴포넌트명] 컴포넌트의 로딩 전략을 최적화해주세요:
1. 지연 로딩
2. 프리로딩
3. 인라인 크리티컬 리소스
4. 조건부 로딩
5. 로딩 우선순위

로딩 성능을 최적화해주세요.
```

## Browser Performance

### Rendering Optimization
```prompt
[컴포넌트명] 컴포넌트의 렌더링을 최적화해주세요:
1. 레이아웃 스래싱 방지
2. 페인트 영역 최소화
3. 컴포지팅 최적화
4. GPU 가속 활용
5. 레이어 최적화

브라우저 렌더링 성능을 개선해주세요.
```

### Memory Management
```prompt
[컴포넌트명] 컴포넌트의 메모리 관리를 최적화해주세요:
1. 메모리 누수 방지
2. 가비지 컬렉션 최적화
3. 캐시 메모리 관리
4. DOM 참조 정리
5. 이벤트 리스너 정리

메모리 사용을 효율적으로 관리해주세요.
```

## Documentation

### Performance Guide
```prompt
[컴포넌트명] 컴포넌트의 성능 가이드를 작성해주세요:
1. 성능 최적화 전략
2. 모범 사례
3. 성능 측정 방법
4. 문제 해결 가이드
5. 성능 체크리스트

개발자가 성능을 유지하고 개선할 수 있도록 안내해주세요.
```

### Benchmarks
```prompt
[컴포넌트명] 컴포넌트의 벤치마크를 작성해주세요:
1. 성능 기준치
2. 테스트 시나리오
3. 측정 방법론
4. 결과 분석
5. 개선 권장사항

성능 목표와 현재 상태를 비교할 수 있도록 작성해주세요.
```