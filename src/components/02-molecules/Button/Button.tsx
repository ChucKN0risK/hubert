import Text from '../../01-atoms/Text/Text'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The Button variant
   * @defaultValue 'primary'
   **/
  variant?: 'primary' | 'secondary';
  /** The Button label */
  label?: string;
  /**
   * The Button size
   * @defaultValue 'medium'
   **/
  size?: 'small' | 'medium' | 'large';
  /**
   * Is the Button full-width?
   * @defaultValue false
   **/
  isFullWidth?: boolean;
}

function Button({ children, variant = 'primary', label, size = 'medium', isFullWidth = false, ...props }: ButtonProps) {
  return (
    <>
      <button
        className={`m-button m-button--${variant} m-button--${size} ${isFullWidth ? 'm-button--full-width' : ''}`}
        {...props}
      >
        {label ? <Text as='span'>{label}</Text> : children}
      </button>
    </>
  );
}

export default Button