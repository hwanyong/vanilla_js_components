# Build and Deploy Guide

This document outlines the build environment, build process, and deployment process for the vanilla components project.

## Build Environment

### Package Manager
- Using `pnpm` for faster and more efficient package management
- Version: 8.x or higher

### Dependencies
```json
{
  "devDependencies": {
    "@rollup/plugin-node-resolve": "^15.3.1",
    "@rollup/plugin-terser": "^0.4.4",
    "@rollup/plugin-typescript": "^12.1.2",
    "rollup": "^4.30.1",
    "tslib": "^2.8.1",
    "typescript": "^5.7.3",
    "@changesets/cli": "^2.27.11"
  }
}
```

## Build Process

### Build Configuration
The project uses Rollup for building both CDN and ESM versions of the components, with TypeScript support.

#### 1. CDN Build
```javascript
{
  input: 'src/index.ts',
  output: {
    file: 'dist/cdn/ui.min.js',
    format: 'iife',
    name: 'UI'
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true
    }),
    terser()
  ]
}
```

#### 2. ESM Build
```javascript
{
  input: {
    index: 'src/index.ts',
    [component]: 'src/components/[component]/[component].element.ts'
  },
  output: {
    dir: 'dist/esm',
    format: 'es',
    preserveModules: true
  }
}
```

### Build Commands
```bash
# Install dependencies
pnpm install

# Development build with watch mode
pnpm run build:watch

# Production build
pnpm run build

# Clean build outputs
pnpm run clean

# Type checking
pnpm run typecheck
```

### Build Outputs

```bash
dist/
├── cdn/                     # CDN distribution
│   ├── ui.min.js           # Full library bundle
│   └── components/         # Individual components
│       ├── button.min.js
│       └── card.min.js
│
├── esm/                    # ESM modules
│   ├── index.js           # Entry point
│   └── components/        # Individual components
│       ├── button/
│       └── card/
│
└── types/                 # TypeScript definitions
    ├── index.d.ts
    └── components/
        ├── button.d.ts
        └── card.d.ts
```

## Deployment Process

### 1. NPM Package Deployment

#### Automated Release Process (Recommended)
1. **변경사항 기록**
   ```bash
   pnpm changeset
   ```
   - 변경 타입 선택 (major/minor/patch)
   - 변경사항 설명 작성

2. **GitHub Actions 자동화**
   - main 브랜치에 push
   - Release PR 자동 생성
   - PR 머지 시 자동 배포

#### Manual Release Process
긴급한 경우에만 사용:
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

### 2. CDN Deployment
- CDN deployment process will be configured later
- Will be hosted at: `https://cdn.csdriveninsight.com/`

### Usage After Deployment

#### 1. NPM/ESM Usage with TypeScript
```typescript
// Full library
import { ButtonElement } from '@csdriveninsight/ui';
const button: ButtonElement = new ButtonElement();

// Individual component
import { ButtonElement } from '@csdriveninsight/ui/components/button';
```

#### 2. CDN Usage
```html
<!-- Full library -->
<script src="https://cdn.csdriveninsight.com/ui.min.js"></script>

<!-- Individual component -->
<script src="https://cdn.csdriveninsight.com/components/button.min.js"></script>
```

## Version Management

1. Update version in `package.json`
2. Create and push a git tag:
```bash
git tag v1.0.0
git push origin v1.0.0
```
3. GitHub Actions will automatically:
   - Run type checking
   - Build the project (including type definitions)
   - Publish to NPM
   - Deploy to CDN (when configured)