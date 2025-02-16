import { theme } from '../../theme';

export const buttonTheme = {
  defaultProps: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'md',
  },
  styles: {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.space.sm,
      transition: 'all 200ms ease',
      cursor: 'pointer',
      fontFamily: theme.fonts.sans,
      fontWeight: '500',
      userSelect: 'none',
      position: 'relative',
      whiteSpace: 'nowrap',
      outline: 'none',
    },
    sizes: {
      sm: {
        fontSize: theme.fontSizes.sm,
        padding: `${theme.space.sm} ${theme.space.md}`,
        height: '32px',
        minWidth: '32px',
      },
      md: {
        fontSize: theme.fontSizes.md,
        padding: `${theme.space.sm} ${theme.space.lg}`,
        height: '40px',
        minWidth: '40px',
      },
      lg: {
        fontSize: theme.fontSizes.lg,
        padding: `${theme.space.md} ${theme.space.lg}`,
        height: '48px',
        minWidth: '48px',
      },
    },
    variants: {
      solid: {
        backgroundColor: 'var(--button-bg-color)',
        color: '#fff',
        border: 'none',
        '&:hover': {
          opacity: 0.85,
        },
        '&:active': {
          opacity: 0.7,
        },
      },
      bordered: {
        backgroundColor: 'transparent',
        border: '1px solid var(--button-bg-color)',
        color: 'var(--button-bg-color)',
        '&:hover': {
          backgroundColor: 'var(--button-bg-color)',
          color: '#fff',
          opacity: 0.85,
        },
      },
      light: {
        backgroundColor: 'var(--button-light-color)',
        color: 'var(--button-bg-color)',
        border: 'none',
        '&:hover': {
          backgroundColor: 'var(--button-light-hover-color)',
        },
      },
      flat: {
        backgroundColor: 'transparent',
        color: 'var(--button-bg-color)',
        border: 'none',
        '&:hover': {
          backgroundColor: 'var(--button-light-color)',
        },
      },
      faded: {
        backgroundColor: 'var(--button-light-color)',
        color: 'var(--button-bg-color)',
        border: 'none',
        opacity: 0.7,
        '&:hover': {
          opacity: 1,
        },
      },
      shadow: {
        backgroundColor: 'var(--button-bg-color)',
        color: '#fff',
        border: 'none',
        boxShadow: '0 4px 14px 0 var(--button-shadow-color)',
        '&:hover': {
          opacity: 0.85,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--button-bg-color)',
        border: 'none',
        '&:hover': {
          backgroundColor: 'var(--button-light-color)',
        },
      },
    },
    colorStyles: {
      primary: {
        '--button-bg-color': theme.colors.primary,
        '--button-light-color': 'rgba(0, 111, 238, 0.1)',
        '--button-light-hover-color': 'rgba(0, 111, 238, 0.2)',
        '--button-shadow-color': 'rgba(0, 111, 238, 0.4)',
      },
      secondary: {
        '--button-bg-color': theme.colors.secondary,
        '--button-light-color': 'rgba(120, 40, 200, 0.1)',
        '--button-light-hover-color': 'rgba(120, 40, 200, 0.2)',
        '--button-shadow-color': 'rgba(120, 40, 200, 0.4)',
      },
      success: {
        '--button-bg-color': theme.colors.success,
        '--button-light-color': 'rgba(23, 201, 100, 0.1)',
        '--button-light-hover-color': 'rgba(23, 201, 100, 0.2)',
        '--button-shadow-color': 'rgba(23, 201, 100, 0.4)',
      },
      warning: {
        '--button-bg-color': theme.colors.warning,
        '--button-light-color': 'rgba(245, 165, 36, 0.1)',
        '--button-light-hover-color': 'rgba(245, 165, 36, 0.2)',
        '--button-shadow-color': 'rgba(245, 165, 36, 0.4)',
      },
      danger: {
        '--button-bg-color': theme.colors.danger,
        '--button-light-color': 'rgba(243, 18, 96, 0.1)',
        '--button-light-hover-color': 'rgba(243, 18, 96, 0.2)',
        '--button-shadow-color': 'rgba(243, 18, 96, 0.4)',
      },
      default: {
        '--button-bg-color': theme.colors.default,
        '--button-light-color': 'rgba(113, 113, 122, 0.1)',
        '--button-light-hover-color': 'rgba(113, 113, 122, 0.2)',
        '--button-shadow-color': 'rgba(113, 113, 122, 0.4)',
      },
    },
    radius: {
      none: '0',
      sm: theme.radii.sm,
      md: theme.radii.md,
      lg: theme.radii.lg,
      full: theme.radii.full,
    },
  },
} as const;