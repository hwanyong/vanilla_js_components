# Documentation Guide

This document outlines the documentation standards and tools used in the project.

## Setup

### Dependencies
```json
{
  "devDependencies": {
    "typedoc": "^0.27.6",
    "@changesets/cli": "^2.27.11"
  }
}
```

## Documentation Structure

### 1. TypeDoc Configuration
```json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs/api",
  "excludePrivate": true,
  "excludeProtected": true,
  "excludeInternal": true
}
```

### 2. Available Commands
```bash
# Generate documentation
pnpm run docs

# Generate documentation in watch mode
pnpm run docs:watch
```

## Documentation Standards

### Component Documentation

1. **Class Documentation**
   ```typescript
   /**
    * 컴포넌트 설명
    *
    * @remarks
    * 추가적인 설명이나 주의사항
    *
    * @example
    * 사용 예제
    *
    * @csspart 스타일링 가능한 파트
    * @fires 발생하는 이벤트
    * @slot 사용 가능한 슬롯
    */
   ```

2. **Properties and Methods**
   ```typescript
   /**
    * 속성 설명
    * @type {타입}
    * @default 기본값
    */
   get property(): type {
     // implementation
   }

   /**
    * 메서드 설명
    * @param paramName - 파라미터 설명
    * @returns 반환값 설명
    * @throws 발생 가능한 에러
    */
   method(param: type): returnType {
     // implementation
   }
   ```

3. **Internal Documentation**
   ```typescript
   /**
    * 내부 구현 설명
    * @internal
    */
   private internalMethod(): void {
     // implementation
   }
   ```

### Documentation Categories

1. **Public API**
   - 컴포넌트 클래스
   - 공개 속성과 메서드
   - 이벤트와 슬롯
   - CSS 커스터마이징

2. **Examples**
   - 기본 사용법
   - 속성 조합
   - 이벤트 핸들링
   - 스타일링 예제

3. **Integration**
   - CDN 사용
   - NPM/ESM 사용
   - TypeScript 사용

## Generated Documentation

### API Documentation
- `/docs/api/index.html`: 메인 문서
- `/docs/api/classes/`: 클래스 문서
- `/docs/api/interfaces/`: 인터페이스 문서

### Examples and Demos
- `/docs/examples/`: 예제 코드
- `/docs/demos/`: 라이브 데모

## Best Practices

1. **명확한 설명**
   - 간단하고 명확한 문장 사용
   - 코드 예제 포함
   - 제한사항 명시

2. **타입 정보**
   - 정확한 타입 명시
   - 제네릭 파라미터 설명
   - 유니온 타입 설명

3. **예제 코드**
   - 실행 가능한 예제
   - 다양한 사용 사례
   - 에지 케이스 처리

4. **버전 관리**
   - 변경사항 문서화
   - 하위 호환성 명시
   - 마이그레이션 가이드

## Version Management

### Changeset Documentation

1. **변경사항 기록**
   ```md
   # .changeset/[id].md
   ---
   "@csdriveninsight/ui": patch
   ---
   Button 컴포넌트의 스타일 버그 수정:
   - hover 상태에서 그림자 효과 누락 수정
   - disabled 상태에서 커서 스타일 수정
   ```

2. **CHANGELOG 작성 규칙**
   - 변경 내용을 명확하게 설명
   - 변경 이유 포함
   - 마이그레이션 방법 설명 (필요시)
   - 예제 코드 추가 (필요시)

3. **Breaking Changes 문서화**
   ```md
   ---
   "@csdriveninsight/ui": major
   ---
   Button 컴포넌트의 size prop 타입이 변경되었습니다:

   변경 전:
   ```html
   <button-element size="small">버튼</button-element>
   ```

   변경 후:
   ```html
   <button-element size="sm">버튼</button-element>
   ```

   마이그레이션:
   - "small" → "sm"
   - "medium" → "md"
   - "large" → "lg"
   ```

## CI Integration

GitHub Actions에서 문서 생성 및 배포:
```yaml
- name: Generate Documentation
  run: |
    pnpm run docs
    # Deploy to GitHub Pages or custom domain
```