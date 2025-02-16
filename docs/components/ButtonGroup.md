# ButtonGroup Component

## Overview
`vnl-button-group`은 여러 버튼을 그룹화하여 관리할 수 있는 컴포넌트입니다. 버튼들 간의 일관된 스타일과 간격을 자동으로 관리하며, 그룹 단위의 상태 관리를 제공합니다.

## Usage

### Basic ButtonGroup
```html
<vnl-button-group>
  <vnl-button>One</vnl-button>
  <vnl-button>Two</vnl-button>
  <vnl-button>Three</vnl-button>
</vnl-button-group>
```

### With Variants
```html
<vnl-button-group vnl-variant="bordered">
  <vnl-button>One</vnl-button>
  <vnl-button>Two</vnl-button>
  <vnl-button>Three</vnl-button>
</vnl-button-group>
```

### With Colors
```html
<vnl-button-group vnl-color="primary">
  <vnl-button>One</vnl-button>
  <vnl-button>Two</vnl-button>
  <vnl-button>Three</vnl-button>
</vnl-button-group>
```

### Full Width
```html
<vnl-button-group vnl-fullwidth>
  <vnl-button>One</vnl-button>
  <vnl-button>Two</vnl-button>
  <vnl-button>Three</vnl-button>
</vnl-button-group>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| vnl-variant | `'solid'｜'bordered'｜'light'｜'flat'｜'faded'｜'shadow'｜'ghost'` | `'solid'` | 그룹 내 버튼들의 기본 variant |
| vnl-color | `'default'｜'primary'｜'secondary'｜'success'｜'warning'｜'danger'` | `'primary'` | 그룹 내 버튼들의 기본 color |
| vnl-size | `'sm'｜'md'｜'lg'` | `'md'` | 그룹 내 버튼들의 기본 size |
| vnl-radius | `'none'｜'sm'｜'md'｜'lg'｜'full'` | `'md'` | 그룹 내 버튼들의 기본 radius |
| vnl-disabled | `boolean` | `false` | 그룹 전체의 비활성화 상태 |
| vnl-fullwidth | `boolean` | `false` | 그룹의 전체 너비 모드 |

### 특징

1. **자동 스타일 동기화**
   - 그룹에 설정된 속성이 자동으로 모든 자식 버튼에 적용
   - 개별 버튼의 속성이 그룹 속성보다 우선 적용

2. **연결된 스타일링**
   - 버튼 간의 테두리가 자동으로 병합
   - 첫 번째와 마지막 버튼의 모서리 반경 자동 조정

3. **동적 버튼 관리**
   - 새로 추가되는 버튼에 자동으로 그룹 속성 적용
   - DOM 변경 감지를 통한 실시간 스타일 업데이트

### CSS Parts

| Part Name | Description |
|-----------|-------------|
| group | 버튼 그룹의 컨테이너 요소 |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --button-group-gap | 버튼 간의 간격 |
| --button-group-shadow | 그룹 전체의 그림자 효과 |

## 접근성

- `role="group"` 자동 적용
- 키보드 네비게이션 지원
- ARIA 레이블 지원

## 주의사항

1. 그룹 내 버튼 순서
   ```html
   <!-- 권장 -->
   <vnl-button-group>
     <vnl-button>1</vnl-button>
     <vnl-button>2</vnl-button>
   </vnl-button-group>

   <!-- 비권장: 중간에 다른 요소 삽입 -->
   <vnl-button-group>
     <vnl-button>1</vnl-button>
     <div>Something else</div>  <!-- 이렇게 하지 마세요 -->
     <vnl-button>2</vnl-button>
   </vnl-button-group>
   ```

2. 스타일 오버라이드
   ```html
   <!-- 개별 버튼 스타일 오버라이드 -->
   <vnl-button-group vnl-variant="solid">
     <vnl-button>Default</vnl-button>
     <vnl-button vnl-variant="bordered">Override</vnl-button>
   </vnl-button-group>
   ```

## 예제

### 다양한 변형
```html
<!-- 기본 솔리드 스타일 -->
<vnl-button-group>
  <vnl-button>One</vnl-button>
  <vnl-button>Two</vnl-button>
</vnl-button-group>

<!-- 테두리 스타일 -->
<vnl-button-group vnl-variant="bordered">
  <vnl-button>One</vnl-button>
  <vnl-button>Two</vnl-button>
</vnl-button-group>

<!-- 혼합 스타일 -->
<vnl-button-group>
  <vnl-button vnl-variant="solid">One</vnl-button>
  <vnl-button vnl-variant="bordered">Two</vnl-button>
</vnl-button-group>
```