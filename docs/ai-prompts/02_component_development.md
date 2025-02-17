# AI Prompts for Component Development Phase

## Purpose
This document contains prompts to guide AI in component development phase.

## Component Planning

### Requirements Analysis
```prompt
[Component Name] Please analyze the requirements of the component:
1. Analysis of the corresponding component in NextUI, shadcn/ui
2. Define necessary features and properties
3. Confirm accessibility requirements
4. Define responsive behavior
5. Determine state management approach

Analysis should be conducted within the scope of pure web technologies.
```

### API Design
```prompt
[Component Name] Please design the API for the component:

1. Naming convention
   - Custom element: `vnl-{component-name}` (e.g., `vnl-button`, `vnl-card`)
     - Reason for using the prefix (vnl-):
       1. Avoid collision with current or future HTML standard tags
          - Prevents current or future HTML standard tags from having the same name
          - Examples: `<button>`, `<dialog>`, `<menu>`
       2. Namespace separation
          - Separates custom components from other libraries or frameworks
          - Indicates that the component is unique to the project
       3. Web Components spec requirements
          - Custom elements must include a hyphen(-)
          - Cannot be registered as a single word
   - Class name: `{ComponentName}` (e.g., `Button`, `Card`)
   - File name: `{component-name}.ts`

2. Property definition
   - Core functionality: Use `vnl-*` custom attributes (e.g., `vnl-variant="solid"`)
   - Metadata: Use `data-vnl-*` dataset attributes (e.g., `data-vnl-analytics="cta"`)

3. CSS design
   - CSS Parts: `part="{component-part}"` (e.g., `part="button"`)
   - CSS Variables: `--vnl-{component-name}-{property}` (e.g., `--vnl-button-bg`)

4. Event definition
   - Event name: camelCase (e.g., `click`, `focus`)

5. Type definition
   - Namespace: `Vnl`
   - Props interface: `{ComponentName}Props`

Follow Web Components standards and design an intuitive API.
```

### Base Structure
```prompt
[Component Name] Please create the basic structure of the component:
1. [Component Name].ts
2. [Component Name].styles.ts
3. [Component Name].test.ts
4. index.html (demo page)
5. README.md

Follow the component structure in file-structure.md.
```

### Core Functionality
```prompt
[Component Name] Please implement the core functionality of the component:
1. Implement Shadow DOM template
2. Handle attribute processing logic
3. Handle events
4. Manage state
5. Lifecycle methods

Implement using pure JavaScript.
```

### Styling
```prompt
[Component Name] Please implement the styling of the component:

1. Default styles
   - Internal styles in Shadow DOM
   - Provide external styling points through CSS Parts
   - Support themes through CSS Variables

2. Variant styles
   - Style variations through `vnl-variant` attribute
   - Customize variant through CSS Parts

3. State styles
   - Active/inactive states
   - Hover/focus states
   - Error/success states

4. Responsive styles
   - Use media queries
   - Use container queries

5. Animations
   - State transition animations
   - Interaction feedback

Utilize the project's theme system and follow Shadow DOM styling rules.
Use --vnl-* prefix for CSS variables.
```

## Accessibility

### A11y Implementation
```prompt
[Component Name] Please implement accessibility for the component:
1. Add ARIA attributes
2. Enable keyboard navigation
3. Support screen readers
4. Support high contrast mode
5. Support zoom

Follow WCAG guidelines.
```

## Documentation

### Component Documentation
```prompt
[Component Name] Please write documentation for the component:
1. Component description
2. API reference
3. Usage examples
4. Accessibility guidelines
5. Customization guidelines

Write in Markdown format in the README.md file.
```