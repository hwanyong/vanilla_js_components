import { theme } from '../../theme';

export const buttonTheme = {
  defaultProps: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'md',
  },
  styles: {
    radius: {
      none: '0',
      sm: theme.radii.sm,
      md: theme.radii.md,
      lg: theme.radii.lg,
      full: theme.radii.full,
    },
    colors: {
      primary: {
        base: 'var(--vnl-colors-primary)',
        light: 'rgba(0, 111, 238, 0.1)',
        lighter: 'rgba(0, 111, 238, 0.2)',
        dark: 'rgba(0, 111, 238, 0.8)',
        darker: 'rgba(0, 111, 238, 0.9)',
        shadow: 'rgba(0, 111, 238, 0.4)'
      },
      secondary: {
        base: 'var(--vnl-colors-secondary)',
        light: 'rgba(120, 40, 200, 0.1)',
        lighter: 'rgba(120, 40, 200, 0.2)',
        dark: 'rgba(120, 40, 200, 0.8)',
        darker: 'rgba(120, 40, 200, 0.9)',
        shadow: 'rgba(120, 40, 200, 0.4)'
      },
      success: {
        base: 'var(--vnl-colors-success)',
        light: 'rgba(23, 201, 100, 0.1)',
        lighter: 'rgba(23, 201, 100, 0.2)',
        dark: 'rgba(23, 201, 100, 0.8)',
        darker: 'rgba(23, 201, 100, 0.9)',
        shadow: 'rgba(23, 201, 100, 0.4)'
      },
      warning: {
        base: 'var(--vnl-colors-warning)',
        light: 'rgba(245, 165, 36, 0.1)',
        lighter: 'rgba(245, 165, 36, 0.2)',
        dark: 'rgba(245, 165, 36, 0.8)',
        darker: 'rgba(245, 165, 36, 0.9)',
        shadow: 'rgba(245, 165, 36, 0.4)'
      },
      danger: {
        base: 'var(--vnl-colors-danger)',
        light: 'rgba(243, 18, 96, 0.1)',
        lighter: 'rgba(243, 18, 96, 0.2)',
        dark: 'rgba(243, 18, 96, 0.8)',
        darker: 'rgba(243, 18, 96, 0.9)',
        shadow: 'rgba(243, 18, 96, 0.4)'
      },
      default: {
        base: 'var(--vnl-colors-default)',
        light: 'rgba(113, 113, 122, 0.1)',
        lighter: 'rgba(113, 113, 122, 0.2)',
        dark: 'rgba(113, 113, 122, 0.8)',
        darker: 'rgba(113, 113, 122, 0.9)',
        shadow: 'rgba(113, 113, 122, 0.4)'
      }
    }
  },
} as const;