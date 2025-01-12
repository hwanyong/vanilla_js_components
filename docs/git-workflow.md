# Git Workflow Guide

이 문서는 프로젝트의 Git 워크플로우와 커밋 메시지 컨벤션을 설명합니다.

## Commit Message Convention

### 기본 형식
```type(scope): subject

body

footer
```

### Types
- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정
- **style**: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없음)
- **refactor**: 코드 리팩토링
- **test**: 테스트 코드 추가/수정
- **chore**: 빌드 프로세스, 패키지 매니저 설정 등 변경
- **perf**: 성능 개선
- **revert**: 이전 커밋으로 되돌리기

### Scope
- **button**: 버튼 컴포넌트
- **card**: 카드 컴포넌트
- **core**: 핵심 유틸리티
- **build**: 빌드 시스템
- **docs**: 문서
- **test**: 테스트 환경
- 기타 컴포넌트/기능 이름

### 예시
```bash
# 새로운 기능 추가
feat(button): add size variants

# 버그 수정
fix(card): resolve shadow DOM styling issue

# 문서 수정
docs(readme): update installation guide

# 리팩토링
refactor(core): improve type definitions
```

## Git Hooks

### Pre-commit
커밋 전에 자동으로 실행되는 검사:
- 린트 검사 (`pnpm lint`)
- 테스트 실행 (`pnpm test`)
- 타입 체크 (`pnpm typecheck`)

### Pre-push
푸시 전에 실행되는 검사:
- 전체 테스트 및 커버리지 검사 (`pnpm test:coverage`)

### Commit-msg
커밋 메시지 작성 시 실행되는 검사:
- 커밋 메시지 컨벤션 검사 (`commitlint`)

## 자동화된 검사 무시하기

긴급한 경우 Git hooks를 무시하고 커밋/푸시할 수 있습니다:

```bash
# pre-commit 훅 무시
git commit -m "message" --no-verify

# pre-push 훅 무시
git push --no-verify
```

**주의**: 이 옵션은 긴급한 경우에만 사용하세요.

## Best Practices

1. **작은 단위로 커밋하기**
   - 하나의 커밋은 하나의 논리적 변경사항만 포함
   - 커밋 메시지로 변경사항을 명확히 설명

2. **정기적으로 푸시하기**
   - 작업 내용을 자주 원격 저장소에 백업
   - 다른 팀원과의 충돌 가능성 감소

3. **브랜치 전략**
   - feature/: 새로운 기능 개발
   - fix/: 버그 수정
   - docs/: 문서 작업
   - refactor/: 리팩토링

4. **커밋 메시지 품질**
   - 명확하고 이해하기 쉬운 메시지
   - 변경사항의 이유를 포함
   - 관련된 이슈 번호 참조

## Troubleshooting

### Hook 실행 권한 문제
```bash
chmod +x .husky/*
```

### Commitlint 오류
```bash
# 커밋 메시지 문법 확인
pnpm commitlint --from HEAD~1 --to HEAD
```