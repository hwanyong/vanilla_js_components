# AI Prompts for Git Commit Process

## Purpose
이 문서는 Git 커밋 작성 단계에서 AI에게 제공할 프롬프트 가이드를 포함합니다.

## Commit Analysis

### Change Analysis
```prompt
변경사항을 분석해주세요:
1. 수정된 파일 목록 확인
2. 변경 내용 분류 (기능/버그수정/문서/etc)
3. 영향 범위 파악
4. 연관된 이슈/PR 확인
5. Breaking Changes 여부 확인

git-workflow.md의 커밋 가이드라인을 따라주세요.
```

### Commit Scope
```prompt
커밋 범위를 결정해주세요:
1. 논리적 단위 구분
2. 관련 컴포넌트 식별
3. 변경 유형 분류
4. 영향 범위 평가
5. 커밋 분할 필요성 검토

하나의 커밋은 하나의 논리적 변경만 포함하도록 해주세요.
```

## Commit Message

### Message Structure
```prompt
커밋 메시지를 작성해주세요:
1. type(scope): subject
2. (빈 줄)
3. body
4. (빈 줄)
5. footer

git-workflow.md의 커밋 메시지 컨벤션을 따라주세요.
```

### Type Selection
```prompt
커밋 타입을 선택해주세요:
1. feat: 새로운 기능 추가
2. fix: 버그 수정
3. docs: 문서 수정
4. style: 코드 포맷팅
5. refactor: 코드 리팩토링
6. test: 테스트 코드
7. chore: 빌드 프로세스 등 변경

변경 내용에 가장 적합한 타입을 선택해주세요.
```

## Commit Review

### Pre-commit Check
```prompt
커밋 전 검사를 수행해주세요:
1. 린트 검사
2. 테스트 통과 여부
3. 불필요한 파일 포함 여부
4. 민감 정보 포함 여부
5. 커밋 크기 적절성

모든 검사가 통과되는지 확인해주세요.
```

### Message Quality
```prompt
커밋 메시지 품질을 검토해주세요:
1. 명확성
2. 간결성
3. 문법
4. 컨벤션 준수
5. 관련 이슈 참조

효과적인 커뮤니케이션을 위해 메시지를 개선해주세요.
```

## Related Tasks

### Issue Linking
```prompt
관련 이슈를 연결해주세요:
1. 이슈 번호 확인
2. 키워드 사용 (Fixes, Closes, etc)
3. 다중 이슈 연결
4. PR 연결
5. 외부 참조 링크

GitHub의 이슈 연결 키워드를 적절히 사용해주세요.
```

### Branch Management
```prompt
브랜치 관리를 수행해주세요:
1. 브랜치 이름 검증
2. 베이스 브랜치 확인
3. 충돌 여부 확인
4. 리베이스 필요성 검토
5. 브랜치 정리

git-workflow.md의 브랜치 전략을 따라주세요.
```

## Documentation

### Changelog Entry
```prompt
체인지로그 항목을 작성해주세요:
1. 변경 사항 요약
2. 영향받는 컴포넌트
3. Breaking Changes 명시
4. 마이그레이션 가이드
5. 관련 이슈/PR 참조

version-management.md의 체인지로그 형식을 따라주세요.
```

### Release Notes
```prompt
릴리스 노트 항목을 작성해주세요:
1. 주요 변경사항
2. 새로운 기능
3. 버그 수정
4. 성능 개선
5. 감사 인사

사용자 친화적인 설명으로 작성해주세요.
```