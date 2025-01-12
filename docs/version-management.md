# Version Management Guide

이 문서는 프로젝트의 버전 관리와 배포 프로세스를 설명합니다.

## Changeset

### 기본 사용법

1. **변경사항 기록**
   ```bash
   pnpm changeset
   ```
   - 변경 타입 선택 (major/minor/patch)
   - 변경사항 설명 작성
   - 영향받는 패키지 선택

2. **변경사항 확인**
   ```bash
   pnpm changeset status
   ```
   - 현재 릴리스 대기 중인 변경사항 목록
   - 예상되는 버전 변경 확인

3. **버전 업데이트**
   ```bash
   pnpm changeset version
   ```
   - 변경사항에 따라 버전 자동 업데이트
   - CHANGELOG.md 자동 생성/업데이트

### 변경 타입

1. **major** (1.0.0 → 2.0.0)
   - 하위 호환성이 깨지는 변경
   - API 변경
   - 주요 기능 제거

2. **minor** (1.0.0 → 1.1.0)
   - 하위 호환성 유지하며 기능 추가
   - 새로운 컴포넌트
   - 선택적 기능 추가

3. **patch** (1.0.0 → 1.0.1)
   - 버그 수정
   - 문서 수정
   - 성능 개선

### 커밋 메시지와 Changeset

1. **커밋 메시지 예시**
   ```bash
   feat(button): add size variants

   BREAKING CHANGE: size prop type changed from string to enum
   ```

2. **Changeset 설명 예시**
   ```md
   "ui-components": major
   ---
   Button 컴포넌트의 size prop 타입이 변경되었습니다:
   - string → 'sm' | 'md' | 'lg'
   - 기존: <button-element size="small">
   - 변경: <button-element size="sm">
   ```

## 자동 배포 프로세스

### GitHub Actions

1. **자동 PR 생성**
   - main 브랜치에 push
   - Changeset이 있으면 Release PR 생성
   - 변경사항 요약과 영향도 표시

2. **자동 배포**
   - Release PR 머지
   - 버전 업데이트
   - npm 패키지 배포
   - GitHub Release 생성

### 수동 배포

긴급한 경우 수동 배포도 가능합니다:
```bash
# 1. 변경사항 기록
pnpm changeset

# 2. 버전 업데이트
pnpm changeset version

# 3. 변경사항 커밋
git add .
git commit -m "chore(release): version packages"

# 4. npm 배포
pnpm run release
```

## 모범 사례

1. **의미있는 변경사항 묶기**
   - 관련된 변경사항은 하나의 Changeset으로
   - 독립적인 변경사항은 분리

2. **상세한 변경사항 설명**
   - 변경 이유 포함
   - 마이그레이션 가이드 제공
   - 예제 코드 추가

3. **버전 관리 전략**
   - 0.x: 초기 개발 단계
   - 1.x: 안정 버전
   - 2.x: 주요 변경사항

4. **배포 전 확인사항**
   - 테스트 통과
   - 린트 검사 통과
   - 문서 업데이트
   - 변경사항 검토