import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The Button variant */
  variant?: 'primary' | 'secondary';
  /** The Button size */
  size?: 'small' | 'medium' | 'large';
  /** Is the Button full-width? */
  isFullWidth?: boolean;
}

function Button({ children, variant = 'primary', size = 'medium', isFullWidth = false, ...props }: ButtonProps) {
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