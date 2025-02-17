export namespace UI {
  interface ButtonBaseProps {
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    isDisabled?: boolean;
    isLoading?: boolean;
    disableRipple?: boolean;
    disableAnimation?: boolean;
    fullWidth?: boolean;
    isIconOnly?: boolean;
  }

  interface ButtonEvents {
    'vnl-press': CustomEvent<{ originalEvent: MouseEvent }>;
    'vnl-pressstart': CustomEvent<{ originalEvent: MouseEvent }>;
    'vnl-pressend': CustomEvent<{ originalEvent: MouseEvent }>;
    'vnl-presschange': CustomEvent<boolean>;
    'vnl-focus': CustomEvent<{ originalEvent: FocusEvent }>;
    'vnl-blur': CustomEvent<{ originalEvent: FocusEvent }>;
  }

  interface ButtonAttributes extends ButtonBaseProps {
    'vnl-variant'?: ButtonBaseProps['variant'];
    'vnl-color'?: ButtonBaseProps['color'];
    'vnl-size'?: ButtonBaseProps['size'];
    'vnl-radius'?: ButtonBaseProps['radius'];
    'vnl-disabled'?: boolean;
    'vnl-loading'?: boolean;
    'vnl-fullwidth'?: boolean;
    'vnl-icon'?: boolean;
    'vnl-disableRipple'?: boolean;
    'vnl-disableAnimation'?: boolean;
  }
}
