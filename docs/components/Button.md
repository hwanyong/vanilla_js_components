# Button Component

## Overview
`vnl-button`은 웹 컴포넌트 기반의 버튼 요소입니다. NextUI와 shadcn/ui에서 영감을 받아 구현되었으며, 다양한 스타일과 상태를 지원합니다.

## Installation
```html
<script type="module">
  import '@csdriveninsight/ui/button';
</script>
```

## Usage

### Basic Button
```html
<vnl-button>Click me</vnl-button>
```

### Variants
```html
<vnl-button vnl-variant="solid">Solid</vnl-button>
<vnl-button vnl-variant="bordered">Bordered</vnl-button>
<vnl-button vnl-variant="light">Light</vnl-button>
<vnl-button vnl-variant="flat">Flat</vnl-button>
<vnl-button vnl-variant="faded">Faded</vnl-button>
<vnl-button vnl-variant="shadow">Shadow</vnl-button>
<vnl-button vnl-variant="ghost">Ghost</vnl-button>
```

### Colors
```html
<vnl-button vnl-color="default">Default</vnl-button>
<vnl-button vnl-color="primary">Primary</vnl-button>
<vnl-button vnl-color="secondary">Secondary</vnl-button>
<vnl-button vnl-color="success">Success</vnl-button>
<vnl-button vnl-color="warning">Warning</vnl-button>
<vnl-button vnl-color="danger">Danger</vnl-button>
```

### Sizes
```html
<vnl-button vnl-size="sm">Small</vnl-button>
<vnl-button vnl-size="md">Medium</vnl-button>
<vnl-button vnl-size="lg">Large</vnl-button>
```

### With Icons
```html
<vnl-button>
  <span slot="start-content">👈</span>
  With Start Icon
</vnl-button>

<vnl-button>
  With End Icon
  <span slot="end-content">👉</span>
</vnl-button>
```

### States
```html
<vnl-button vnl-disabled>Disabled</vnl-button>
<vnl-button vnl-loading>Loading</vnl-button>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| vnl-variant | `'solid'｜'bordered'｜'light'｜'flat'｜'faded'｜'shadow'｜'ghost'` | `'solid'` | 버튼의 시각적 스타일을 설정 |
| vnl-color | `'default'｜'primary'｜'secondary'｜'success'｜'warning'｜'danger'` | `'primary'` | 버튼의 색상 테마를 설정 |
| vnl-size | `'sm'｜'md'｜'lg'` | `'md'` | 버튼의 크기를 설정 |
| vnl-radius | `'none'｜'sm'｜'md'｜'lg'｜'full'` | `'md'` | 버튼의 모서리 둥글기를 설정 |
| vnl-disabled | `boolean` | `false` | 버튼의 비활성화 상태를 설정 |
| vnl-loading | `boolean` | `false` | 버튼의 로딩 상태를 설정 |
| vnl-fullwidth | `boolean` | `false` | 버튼의 전체 너비 모드를 설정 |
| vnl-icon | `boolean` | `false` | 아이콘 전용 모드를 설정 |

### Events

| Name | Detail | Description |
|------|--------|-------------|
| vnl-press | `{ originalEvent: MouseEvent }` | 버튼이 클릭되었을 때 발생 |
| vnl-pressstart | `{ originalEvent: MouseEvent }` | 버튼을 누르기 시작할 때 발생 |
| vnl-pressend | `{ originalEvent: MouseEvent }` | 버튼을 누르고 떼었을 때 발생 |
| vnl-focus | `{ originalEvent: FocusEvent }` | 버튼이 포커스를 받았을 때 발생 |
| vnl-blur | `{ originalEvent: FocusEvent }` | 버튼이 포커스를 잃었을 때 발생 |

### Slots

| Name | Description |
|------|-------------|
| default | 버튼의 주요 콘텐츠 |
| start-content | 버튼 텍스트 앞에 위치할 콘텐츠 |
| end-content | 버튼 텍스트 뒤에 위치할 콘텐츠 |

### CSS Custom Properties

| Name | Default | Description |
|------|---------|-------------|
| --button-bg-color | theme dependent | 버튼 배경색 |
| --button-text-color | theme dependent | 버튼 텍스트 색상 |
| --button-border-color | transparent | 버튼 테두리 색상 |
| --button-light-color | rgba(var(--button-bg-color), 0.1) | Light 모드에서의 배경색 |
| --button-light-hover-color | rgba(var(--button-bg-color), 0.2) | Light 모드에서의 호버 배경색 |
| --button-shadow-color | rgba(var(--button-bg-color), 0.4) | 그림자 색상 |

## ButtonGroup Component

버튼 그룹 컴포넌트에 대한 자세한 내용은 [ButtonGroup.md](./ButtonGroup.md)를 참조하세요.