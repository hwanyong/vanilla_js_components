# AI Prompts for Project Setup Phase

## Purpose
이 문서는 프로젝트 초기화 및 설정 단계에서 AI에게 제공할 프롬프트 가이드를 포함합니다.

## Project Structure Setup

### Base Structure Creation
```prompt
다음 요구사항에 맞는 프로젝트 기본 구조를 생성해주세요:
1. 순수 웹 기술만 사용 (HTML, CSS, JavaScript)
2. components/ 디렉토리에 각 컴포넌트별 구조 포함
3. core/ 디렉토리에 공통 유틸리티 포함
4. dist/ 디렉토리에 빌드 출력물 구조 포함
5. docs/ 디렉토리에 문서화 구조 포함

파일 구조는 docs/file-structure.md 문서를 참조하여 생성해주세요.
```

### Development Environment Setup
```prompt
다음 개발 환경 설정을 진행해주세요:
1. package.json 설정 (스크립트, 의존성 등)
2. TypeScript 설정 (tsconfig.json)
3. 린터/포맷터 설정 (ESLint, Prettier)
4. Git 설정 (.gitignore, hooks)
5. 빌드 도구 설정 (Rollup)

각 설정은 프로젝트의 문서에 명시된 규칙을 따라주세요.
```

## Core Utilities Setup

### Base Element Creation
```prompt
Web Components를 위한 기본 요소 클래스를 생성해주세요:
1. Shadow DOM 지원
2. 공통 라이프사이클 메서드 구현
3. 스타일 유틸리티 통합
4. 테마 시스템 지원

구현은 순수 JavaScript만 사용하고, core/base-element.js 파일에 작성해주세요.
```

### Theme System Setup
```prompt
디자인 시스템을 위한 테마 설정을 생성해주세요:
1. 색상 시스템
2. 타이포그래피
3. 스페이싱
4. 반응형 브레이크포인트
5. 애니메이션

NextUI와 shadcn/ui의 디자인 시스템을 참조하되, CSS 변수로 구현해주세요.
```

## Quality Assurance Setup

### Testing Environment
```prompt
테스트 환경을 설정해주세요:
1. 테스트 프레임워크 설정
2. 테스트 유틸리티 함수
3. 테스트 스크립트
4. CI 통합

testing.md 문서의 가이드라인을 따라주세요.
```

### Git Workflow
```prompt
Git 워크플로우를 설정해주세요:
1. 브랜치 전략
2. 커밋 메시지 컨벤션
3. Git hooks
4. PR 템플릿

git-workflow.md 문서의 규칙을 따라주세요.
```
```