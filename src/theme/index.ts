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
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
  },
} as const;

export type Theme = typeof theme;