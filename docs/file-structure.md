# File Structure

This document outlines the file structure of the vanilla components project, designed to support both Custom Elements with Shadow DOM and multiple distribution methods (CDN, NPM/ESM).

## Directory Structure

```bash
.
├── components/                    # Component root directory
│   ├── button/                   # Button component
│   │   ├── button.element.js     # Web Component definition
│   │   ├── button.styles.js      # Shadow DOM styles (CSS in JS)
│   │   ├── button.template.js    # HTML template
│   │   ├── index.html           # Demo page
│   │   └── README.md            # Component documentation
│   │
│   └── card/                     # Card component
│       ├── card.element.js
│       ├── card.styles.js
│       ├── card.template.js
│       ├── index.html
│       └── README.md
│
├── core/                         # Core utilities
│   ├── base-element.js          # Base Custom Element class
│   ├── styles/                  # Common style utilities
│   │   ├── theme.js            # Theme variables
│   │   └── utils.js            # Style utilities
│   └── utils/                   # Common utilities
│       └── dom.js              # DOM manipulation utilities
│
├── dist/                         # Build outputs
│   ├── cdn/                     # CDN bundles
│   │   ├── ui.min.js           # Full bundle
│   │   ├── ui.min.css          # (Optional) Full styles
│   │   └── components/         # Individual component bundles
│   │       ├── button.min.js
│   │       ├── card.min.js
│   │       └── ...
│   └── esm/                    # NPM/ESM modules
│       ├── index.js            # Entry point
│       └── components/         # Individual components
│           ├── button/
│           └── card/
│
├── docs/                        # Documentation
│   ├── project-direction.md
│   ├── file-structure.md
│   └── web-components.md       # Web Components guide
│
├── examples/                    # Integration examples
│   └── index.html
│
├── package.json                # NPM package configuration
├── rollup.config.js           # Bundler configuration
├── .gitignore
├── LICENSE
└── README.md
```

## Component Structure

Each component follows this structure:

### 1. Element Definition (component.element.js)
```javascript
import { BaseElement } from '../../core/base-element.js';
import { styles } from './button.styles.js';
import { template } from './button.template.js';

export class ButtonElement extends BaseElement {
  static styles = styles;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('ui-button', ButtonElement);
```

### 2. Styles (component.styles.js)
```javascript
import { css } from '../../core/styles/utils.js';
import { theme } from '../../core/styles/theme.js';

export const styles = css`
  :host {
    display: inline-block;
  }

  .component {
    /* component styles */
  }
`;
```

## Distribution Methods

### CDN Usage
```html
<!-- Full library -->
<script src="https://cdn.csdriveninsight.com/ui.min.js"></script>

<!-- Individual component -->
<script src="https://cdn.csdriveninsight.com/components/button.min.js"></script>
```

### NPM/ESM Usage
```javascript
// Full library
import '@csdriveninsight/ui';

// Individual component
import '@csdriveninsight/ui/components/button';
```

## Package Configuration

### package.json
```json
{
  "name": "@csdriveninsight/ui",
  "version": "1.0.0",
  "main": "dist/esm/index.js",
  "module": "dist/esm/index.js",
  "exports": {
    ".": "./dist/esm/index.js",
    "./components/*": "./dist/esm/components/*"
  },
  "files": [
    "dist/"
  ],
  "publishConfig": {
    "access": "public"
  }
}
```
