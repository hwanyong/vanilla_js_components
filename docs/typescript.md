# TypeScript Support

This document outlines how TypeScript is implemented in the project and how to use it effectively.

## Directory Structure Changes

```bash
src/
├── components/          # TypeScript source files
│   ├── button/
│   │   ├── button.element.ts
│   │   ├── button.styles.ts
│   │   └── button.template.ts
│   └── card/
│       ├── card.element.ts
│       ├── card.styles.ts
│       └── card.template.ts
├── types/              # Type definitions
│   └── index.d.ts      # Global type declarations
└── index.ts           # Main entry point
```

## Type Definitions

### Component Props
```typescript
interface BaseProps {
  class?: string;
  id?: string;
  [key: string]: any;
}

interface ButtonProps extends BaseProps {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}
```

## Build Output

The build process generates three types of outputs:

1. **JavaScript (CDN)**
   ```bash
   dist/cdn/
   ├── ui.min.js
   └── components/
       ├── button.min.js
       └── card.min.js
   ```

2. **JavaScript (ESM)**
   ```bash
   dist/esm/
   ├── index.js
   └── components/
       ├── button/
       └── card/
   ```

3. **TypeScript Definitions**
   ```bash
   dist/types/
   ├── index.d.ts
   └── components/
       ├── button.d.ts
       └── card.d.ts
   ```

## Usage

### For TypeScript Users
```typescript
import { ButtonElement } from '@csdriveninsight/ui';

// Type checking for props
const button = new ButtonElement();
button.variant = 'solid';  // Type-safe
button.size = 'xl';       // Error: 'xl' is not assignable
```

### For JavaScript Users
```javascript
import { ButtonElement } from '@csdriveninsight/ui';

// Works the same, just without type checking
const button = new ButtonElement();
button.variant = 'solid';
```

## Development Guidelines

1. **Type Safety**
   - Always define proper types for props and methods
   - Use interfaces for complex data structures
   - Avoid `any` type unless absolutely necessary

2. **Web Components**
   ```typescript
   class ButtonElement extends HTMLElement {
     static get observedAttributes(): string[] {
       return ['variant', 'size', 'disabled'];
     }

     // Type-safe attribute handling
     attributeChangedCallback(
       name: string,
       oldValue: string | null,
       newValue: string | null
     ): void {
       // Implementation
     }
   }
   ```

3. **Type Checking**
   ```bash
   # Run type checking
   pnpm run typecheck
   ```

## IDE Support

TypeScript provides excellent IDE support with:
- Auto-completion
- Type checking
- Quick documentation
- Refactoring tools

## Build Process Changes

The build process now includes:
1. TypeScript compilation
2. Type definition generation
3. Source maps (for debugging)

See `rollup.config.js` for detailed build configuration.