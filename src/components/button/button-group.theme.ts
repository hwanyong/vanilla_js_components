export const buttonGroupTheme = {
  styles: {
    base: {
      display: 'inline-flex',
      gap: '1px',
    },
    variants: {
      solid: {
        '::part(button)': {
          '&:not(:first-child)': {
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
          },
          '&:not(:last-child)': {
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
          }
        }
      },
      bordered: {
        gap: '0',
        '::part(button)': {
          '&:not(:first-child)': {
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
            marginLeft: '-1px',
          },
          '&:not(:last-child)': {
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
          },
          '&:hover': {
            zIndex: '1',
          },
          '&:focus-visible': {
            zIndex: '2',
          }
        }
      }
    }
  }
} as const;