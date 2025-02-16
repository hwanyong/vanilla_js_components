import { theme } from '../../theme';

export const buttonTheme = {
  defaultProps: {
    variant: 'solid' as const,
    color: 'primary' as const,
    size: 'md' as const,
    radius: 'md' as const,
  },
  styles: {
    sizes: {
      sm: {
        height: '32px',
        padding: '0.5rem 1rem',
        fontSize: theme.fontSizes.sm,
      },
      md: {
        height: '40px',
        padding: '0.625rem 1.25rem',
        fontSize: theme.fontSizes.md,
      },
      lg: {
        height: '48px',
        padding: '0.75rem 1.5rem',
        fontSize: theme.fontSizes.lg,
      },
    },
    radius: {
      none: theme.radii.none,
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

export type ButtonVariant = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';