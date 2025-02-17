repository name: `vanilla_js_components`
prefix: `vnl`
dataset attribute: `data-vnl-*`

## Component Naming
- Custom Element Tag: `vnl-{component-name}`
  - Example: `vnl-button`, `vnl-card`
  - Reasons for using prefix (vnl-):
    1. Prevent conflicts with HTML standard tags
       - Avoid naming conflicts with current or future HTML standard tags
       - Example: `<button>`, `<dialog>`, `<menu>` etc.
    2. Namespace distinction
       - Distinguish from components of other libraries or frameworks
       - Indicate project-specific components
    3. Web Components spec requirements
       - Custom elements must include a hyphen (-)
       - Cannot be registered with a single word
- Component Class: `{ComponentName}`
  - Example: `Button`, `Card`
- Component File: `{component-name}.ts`
  - Example: `button.ts`, `card.ts`

## CSS Naming
- CSS Part: `part="{component-part}"`
  - Example: `part="button"`, `part="icon"`
- CSS Variables: `--vnl-{component-name}-{property}`
  - Example: `--vnl-button-bg`, `--vnl-button-text`

## Type Naming
- Type Namespace: `Vnl`
- Component Props Interface: `{ComponentName}Props`
  - Example: `ButtonProps`, `CardProps`

## Event Naming
- Custom Events: camelCase
  - Example: `click`, `focus`, `blur`

## Attribute Naming
- Custom Attributes (Core Features): `vnl-*`
  - Used for core component features and behaviors
  - Must be observed via observedAttributes
  - Example: `vnl-variant="solid"`, `vnl-size="md"`
- Dataset Attributes (Metadata): `data-vnl-*`
  - Used for additional metadata, analytics, testing
  - Not observed via observedAttributes
  - Example: `data-vnl-analytics="homepage-cta"`, `data-vnl-test-id="submit-button"`