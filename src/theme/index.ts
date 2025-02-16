export const theme = {
  colors: {
    primary: '#006FEE',
    secondary: '#7828C8',
    success: '#17C964',
    warning: '#F5A524',
    danger: '#F31260',
    default: '#71717A',
  },
  fonts: {
    sans: 'system-ui, sans-serif',
  },
  fontSizes: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
  },
  space: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
} as const;

export type Theme = typeof theme;

// CSS Custom Properties
const generateCSSVariables = () => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --vnl-colors-primary: ${theme.colors.primary};
      --vnl-colors-secondary: ${theme.colors.secondary};
      --vnl-colors-success: ${theme.colors.success};
      --vnl-colors-warning: ${theme.colors.warning};
      --vnl-colors-danger: ${theme.colors.danger};
      --vnl-colors-default: ${theme.colors.default};

      --vnl-radii-none: ${theme.radii.none};
      --vnl-radii-sm: ${theme.radii.sm};
      --vnl-radii-md: ${theme.radii.md};
      --vnl-radii-lg: ${theme.radii.lg};
      --vnl-radii-full: ${theme.radii.full};

      --vnl-font-size-sm: ${theme.fontSizes.sm};
      --vnl-font-size-md: ${theme.fontSizes.md};
      --vnl-font-size-lg: ${theme.fontSizes.lg};
    }
  `;
  document.head.appendChild(style);
};

// 테마 초기화
if (typeof window !== 'undefined') {
  generateCSSVariables();
}