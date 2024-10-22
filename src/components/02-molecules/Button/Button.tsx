import { createElement } from 'react';
import Text from '@/components/01-atoms/Text/Text';
import './Button.scss'

interface ButtonProps {
  /** The Button content */
  text?: string;
  /** The Button variant */
  variant?: 'primary' | 'secondary';
  /** The Button size */
  size?: 'small' | 'medium' | 'large';
  /** The Button click callback */
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Is the Button full-width? */
  isFullWidth?: boolean;
  /** Is the Button full-width? */
  icon?: string;
}

function Button({ text, variant = 'primary', size = 'medium', clickHandler, isFullWidth = false, icon }: ButtonProps) {
  return (
    <>
      <button
        className={`m-button m-button--${variant} m-button--${size} ${isFullWidth ? 'm-button--full-width' : ''}`}
        onClick={clickHandler}
      >
        createElement(icon)
        <Text text={text} className='m-button__text' />
      </button>
    </>
  );
}

export default Button