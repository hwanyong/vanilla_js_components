import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/button/button.element';
import '../src/components/button/button-group.element';
import { theme } from '../src/theme';
import { Button } from '../src/components/button/button.element';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'],
      description: '버튼의 시각적 스타일을 설정합니다',
      table: {
        defaultValue: { summary: 'solid' },
        type: { summary: 'string' }
      }
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: '버튼의 색상 테마를 설정합니다',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '버튼의 크기를 설정합니다',
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: '버튼의 모서리 반경을 설정합니다. none(0px), sm(2px), md(6px), lg(8px), full(9999px)',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' }
      }
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 설정합니다',
    },
    loading: {
      control: 'boolean',
      description: '버튼의 로딩 상태를 설정합니다',
    },
    fullWidth: {
      control: 'boolean',
      description: '버튼의 전체 너비 모드를 설정합니다',
    },
    disableAnimation: {
      control: 'boolean',
      description: '버튼의 애니메이션을 비활성화합니다',
    },
    disableRipple: {
      control: 'boolean',
      description: '버튼의 물결 효과를 비활성화합니다',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '`vnl-button`은 웹 컴포넌트 기반의 버튼 요소입니다. NextUI와 shadcn/ui에서 영감을 받아 구현되었습니다.'
      }
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'button-name',
            enabled: true
          }
        ]
      }
    }
  }
} as Meta;

const Template: StoryFn = (args) => html`
  <vnl-button
    ?vnl-disabled=${args.disabled}
    ?vnl-loading=${args.loading}
    ?vnl-fullwidth=${args.fullWidth}
    ?vnl-disableAnimation=${args.disableAnimation}
    ?vnl-disableRipple=${args.disableRipple}
    vnl-variant=${args.variant || 'solid'}
    vnl-color=${args.color || 'primary'}
    vnl-size=${args.size || 'md'}
    vnl-radius=${args.radius || 'md'}
  >
    ${args.content || 'Button'}
  </vnl-button>
`;

// 기본 버튼
export const Default = Template.bind({});
Default.args = {
  content: 'Button',
};

// 모든 변형 보여주기
export const AllVariants = () => html`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    ${['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'].map(
      variant => html`
        <vnl-button vnl-variant=${variant}>
          ${variant}
        </vnl-button>
      `
    )}
  </div>
`;

// 모든 색상 보여주기
export const AllColors = () => html`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    ${['default', 'primary', 'secondary', 'success', 'warning', 'danger'].map(
      color => html`
        <vnl-button vnl-color=${color}>
          ${color}
        </vnl-button>
      `
    )}
  </div>
`;

// 모든 radius 변형 보여주기
export const AllRadiusVariants = () => html`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    ${['none', 'sm', 'md', 'lg', 'full'].map(
      radius => html`
        <vnl-button
          vnl-radius=${radius}
          vnl-color="primary"
          vnl-variant="shadow"
          vnl-size="lg"
        >
          radius-${radius}
        </vnl-button>
      `
    )}
  </div>
`;

// 아이콘 버튼
export const WithIcon = (args) => html`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <vnl-button
      vnl-variant=${args.variant || 'solid'}
      vnl-color=${args.color || 'primary'}
    >
      <span slot="start-content">👈</span>
      ${args.content || 'With Start Icon'}
    </vnl-button>

    <vnl-button
      vnl-variant=${args.variant || 'solid'}
      vnl-color=${args.color || 'primary'}
    >
      ${args.content || 'With End Icon'}
      <span slot="end-content">👉</span>
    </vnl-button>

    <vnl-button
      vnl-variant=${args.variant || 'solid'}
      vnl-color=${args.color || 'primary'}
      vnl-icon
    >
      🔔
    </vnl-button>
  </div>
`;

// 상태 버튼
export const States = () => html`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <vnl-button vnl-disabled>Disabled</vnl-button>
    <vnl-button vnl-loading>Loading</vnl-button>
    <vnl-button vnl-disableRipple>No Ripple</vnl-button>
    <vnl-button vnl-disableAnimation>No Animation</vnl-button>
  </div>
`;

// 버튼 그룹
export const ButtonGroup = (args) => html`
  <vnl-button-group
    vnl-variant=${args.variant || 'solid'}
    vnl-color=${args.color || 'primary'}
  >
    <vnl-button>One</vnl-button>
    <vnl-button>Two</vnl-button>
    <vnl-button>Three</vnl-button>
  </vnl-button-group>
`;

// 접근성 예제
export const Accessibility = () => html`
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <vnl-button aria-label="Close dialog">
      ✕
    </vnl-button>

    <vnl-button-group aria-label="Text alignment">
      <vnl-button aria-label="Align left">⌫</vnl-button>
      <vnl-button aria-label="Align center">≡</vnl-button>
      <vnl-button aria-label="Align right">⌦</vnl-button>
    </vnl-button-group>

    <vnl-button vnl-loading aria-busy="true">
      Processing
    </vnl-button>
  </div>
`;

// 커스텀 스타일링
export const CustomStyling = () => html`
  <style>
    .custom-button::part(button) {
      background: linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary});
      border: none;
      color: white;
      font-weight: bold;
      transition: transform 0.2s;
    }
    .custom-button::part(button):hover {
      transform: translateY(-2px);
    }
  </style>
  <vnl-button class="custom-button">
    Custom Styled
  </vnl-button>
`;

export const RadiusShowcase = () => html`
  <style>
    .radius-showcase {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem;
    }
    .radius-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .radius-section h3 {
      margin: 0;
      color: #666;
      font-weight: 600;
      font-size: 1.1rem;
    }
    .radius-row {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }
    .radius-label {
      min-width: 100px;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
  <div class="radius-showcase">
    <div class="radius-section">
      <h3>Basic Radius Variants</h3>
      <div class="radius-row">
        ${['none', 'sm', 'md', 'lg', 'full'].map(
          radius => html`
            <vnl-button
              vnl-radius=${radius}
              vnl-color="primary"
              vnl-variant="solid"
              vnl-size="lg"
            >
              radius-${radius}
            </vnl-button>
          `
        )}
      </div>
    </div>

    <div class="radius-section">
      <h3>Radius with Different Variants</h3>
      ${['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'].map(
        variant => html`
          <div class="radius-row">
            <div class="radius-label">${variant}:</div>
            ${['none', 'sm', 'md', 'lg', 'full'].map(
              radius => html`
                <vnl-button
                  vnl-radius=${radius}
                  vnl-color="primary"
                  vnl-variant=${variant}
                >
                  ${radius}
                </vnl-button>
              `
            )}
          </div>
        `
      )}
    </div>

    <div class="radius-section">
      <h3>Radius with Different Colors</h3>
      ${['primary', 'secondary', 'success', 'warning', 'danger', 'default'].map(
        color => html`
          <div class="radius-row">
            <div class="radius-label">${color}:</div>
            ${['none', 'sm', 'md', 'lg', 'full'].map(
              radius => html`
                <vnl-button
                  vnl-radius=${radius}
                  vnl-color=${color}
                  vnl-variant="shadow"
                >
                  ${radius}
                </vnl-button>
              `
            )}
          </div>
        `
      )}
    </div>
  </div>
`;

export const RadiusWithFixedSize = () => html`
  <style>
    .fixed-size-button {
      width: 200px;
    }
    .radius-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit);
      gap: 1rem;
    }
  </style>
  <div class="radius-grid">
    ${['none', 'sm', 'md', 'lg', 'full'].map(
      radius => html`
        <vnl-button
          class="fixed-size-button"
          vnl-radius=${radius}
          vnl-color="primary"
          vnl-variant="bordered"
        >
          radius-${radius}
          <br>
          <small style="opacity: 0.8">
            ${radius === 'none' ? '0px' :
            radius === 'sm' ? '2px' :
            radius === 'md' ? '6px' :
            radius === 'lg' ? '8px' :
            '9999px'}
          </small>
        </vnl-button>
      `
    )}
  </div>
`;