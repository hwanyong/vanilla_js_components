# @csdriveninsight/ui

A vanilla JavaScript UI component library inspired by NextUI and shadcn/ui.

## Features

- 🚫 Framework-agnostic Web Components
- 📦 Individual Component Imports
- 🎨 Customizable Theming
- ⚡ Optimized Performance (< 20KB per component)
- 🔍 TypeScript Support
- ♿ Accessibility (WCAG 2.1) Compliant
- 📱 Responsive Design

## Installation

```bash
# npm
npm install @csdriveninsight/ui

# pnpm
pnpm add @csdriveninsight/ui

# yarn
yarn add @csdriveninsight/ui
```

## Usage

### ESM

```javascript
// Import entire library
import '@csdriveninsight/ui';

// Import individual components
import '@csdriveninsight/ui/components/button';
```

### CDN

```html
<!-- Full library -->
<script src="https://cdn.csdriveninsight.com/ui.min.js"></script>

<!-- Individual components -->
<script src="https://cdn.csdriveninsight.com/components/button.min.js"></script>
```

## Examples

```html
<!-- Button Component -->
<ui-button variant="solid" size="md">
  Click me
</ui-button>

<!-- Card Component -->
<ui-card>
  <h2 slot="header">Card Title</h2>
  <p>Card content goes here.</p>
  <div slot="footer">
    <ui-button variant="outline">Learn More</ui-button>
  </div>
</ui-card>
```

## Development

### Requirements
- Node.js v20 or higher
- pnpm v8 or higher

### Setup
```bash
# Clone repository
git clone https://github.com/hwanyong/vanilla_components.git
cd vanilla_components

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Available Scripts
- `pnpm run dev`: Start development server
- `pnpm run build`: Build for production
- `pnpm run test`: Run tests
- `pnpm run lint`: Lint code
- `pnpm run format`: Format code
- `pnpm run docs`: Generate documentation

## Documentation

Detailed documentation can be found at:
- [Component API](https://docs.csdriveninsight.com/api)
- [Development Guide](https://docs.csdriveninsight.com/guide)
- [Examples](https://docs.csdriveninsight.com/examples)

## Community & Support
- [Discord Community](https://discord.gg/KcqHTZS35c)
- [Blog](https://blog.hwanyong.com)
- [YouTube Channel](https://youtube.com/@uhd_tech)

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Translations
- [한국어](docs/translations/README.ko.md)

## License

MIT © [Hwanyong Yoo](https://github.com/hwanyong)
