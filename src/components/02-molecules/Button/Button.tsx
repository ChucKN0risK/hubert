import { HTMLProps, ReactNode } from 'react';
import Text from '@/components/01-atoms/Text/Text';
import './Button.scss'

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  /** The Button variant */
  variant?: 'primary' | 'secondary';
  /** The Button size */
  size?: 'small' | 'medium' | 'large';
  /** Is the Button full-width? */
  isFullWidth?: boolean;
  /** The button icon */
  icon?: ReactNode;
}

function Button({ children, variant = 'primary', size = 'medium', isFullWidth = false, icon, ...props }: ButtonProps) {
  return (
    <>
      <button
        className={`m-button m-button--${variant} m-button--${size} ${isFullWidth ? 'm-button--full-width' : ''}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button