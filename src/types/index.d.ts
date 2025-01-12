export namespace UI {
  interface BaseProps {
    class?: string;
    id?: string;
    [key: string]: unknown;
  }

  interface ButtonProps extends BaseProps {
    variant?: 'solid' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  }

  interface CardProps extends BaseProps {
    variant?: 'flat' | 'bordered' | 'shadow';
    radius?: 'none' | 'sm' | 'md' | 'lg';
  }
}
