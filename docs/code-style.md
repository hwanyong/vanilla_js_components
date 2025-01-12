# Code Style Guide

This document outlines the code style rules and linting configuration for the project.

## Setup

### Dependencies
```json
{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^8.19.1",
    "@typescript-eslint/parser": "^8.19.1",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "prettier": "^3.4.2"
  }
}
```

### Configuration Files

#### ESLint (.eslintrc.json)
```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "env": {
    "browser": true,
    "es2020": true
  },
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowExpressions": true,
      "allowTypedFunctionExpressions": true
    }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "class",
        "format": ["PascalCase"],
        "suffix": ["Element"]
      }
    ],
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  }
}
```

#### Prettier (.prettierrc)
```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

## Code Style Rules

### TypeScript
1. **명시적 반환 타입**
   - 모든 함수는 명시적 반환 타입을 가져야 함
   ```typescript
   // Good
   function getValue(): string {
     return 'value';
   }

   // Bad
   function getValue() {
     return 'value';
   }
   ```

2. **엄격한 타입 사용**
   - `any` 타입 사용 금지
   - 미사용 변수는 `_` 접두사 사용

3. **Web Components 네이밍**
   - 모든 컴포넌트 클래스는 `Element` 접미사 필수
   ```typescript
   // Good
   class ButtonElement extends HTMLElement {}

   // Bad
   class Button extends HTMLElement {}
   ```

### Formatting
1. **기본 규칙**
   - 들여쓰기: 2칸
   - 최대 줄 길이: 100자
   - 문자열: 작은따옴표 사용
   - 세미콜론: 필수
   - 후행 쉼표: ES5 스타일

2. **괄호와 공백**
   - 객체 리터럴의 중괄호 주위에 공백
   - 화살표 함수의 매개변수는 항상 괄호로 감싸기

## Available Commands

```bash
# 린트 검사
pnpm run lint

# 린트 자동 수정
pnpm run lint:fix

# 코드 포맷팅
pnpm run format

# 포맷 검사
pnpm run format:check
```

## IDE Integration

### VS Code 추천 설정
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## CI Integration

ESLint와 Prettier 검사는 CI 파이프라인의 일부로 실행됩니다:
```yaml
- name: Lint and Format Check
  run: |
    pnpm run lint
    pnpm run format:check
```