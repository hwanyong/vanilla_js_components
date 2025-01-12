# AI Prompts for Component Development Phase

## Purpose
이 문서는 컴포넌트 개발 단계에서 AI에게 제공할 프롬프트 가이드를 포함합니다.

## Component Planning

### Requirements Analysis
```prompt
[컴포넌트명] 컴포넌트의 요구사항을 분석해주세요:
1. NextUI/shadcn/ui의 해당 컴포넌트 분석
2. 필요한 기능 및 속성 정의
3. 접근성 요구사항 확인
4. 반응형 동작 정의
5. 상태 관리 방식 결정

분석은 순수 웹 기술로 구현 가능한 범위 내에서 진행해주세요.
```

### API Design
```prompt
[컴포넌트명] 컴포넌트의 API를 설계해주세요:
1. 커스텀 엘리먼트 태그 이름
2. 속성(attributes) 정의
3. 이벤트 정의
4. 메서드 정의
5. CSS 커스터마이징 방식

Web Components 표준을 준수하고, 직관적인 API를 설계해주세요.
```

## Implementation

### Base Structure
```prompt
[컴포넌트명] 컴포넌트의 기본 구조를 생성해주세요:
1. [컴포넌트명].element.js
2. [컴포넌트명].styles.js
3. [컴포넌트명].template.js
4. index.html (데모 페이지)
5. README.md

file-structure.md의 컴포넌트 구조를 따라주세요.
```

### Core Functionality
```prompt
[컴포넌트명] 컴포넌트의 핵심 기능을 구현해주세요:
1. Shadow DOM 템플릿 구현
2. 속성 처리 로직
3. 이벤트 핸들링
4. 상태 관리
5. 라이프사이클 메서드

순수 JavaScript만 사용하여 구현해주세요.
```

### Styling
```prompt
[컴포넌트명] 컴포넌트의 스타일을 구현해주세요:
1. 기본 스타일
2. 변형(variants) 스타일
3. 상태별 스타일
4. 반응형 스타일
5. 애니메이션

프로젝트의 테마 시스템을 활용하고, Shadow DOM 스타일링 규칙을 따라주세요.
```

## Accessibility

### A11y Implementation
```prompt
[컴포넌트명] 컴포넌트의 접근성을 구현해주세요:
1. ARIA 속성 추가
2. 키보드 네비게이션
3. 스크린 리더 지원
4. 고대비 모드 지원
5. 축소/확대 지원

WCAG 가이드라인을 준수하여 구현해주세요.
```

## Documentation

### Component Documentation
```prompt
[컴포넌트명] 컴포넌트의 문서를 작성해주세요:
1. 컴포넌트 설명
2. API 레퍼런스
3. 사용 예제
4. 접근성 가이드
5. 커스터마이징 가이드

README.md 파일에 마크다운 형식으로 작성해주세요.
```