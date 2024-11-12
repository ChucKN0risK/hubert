import './Input.scss';
import Icon from '../../01-atoms/Icon/Icon';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The Input size
   * @defaultValue 'medium'
   **/
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  /**
   * The Input type
   * @defaultValue 'text'
   **/
  type?: string;
  icon?: string;
}

function Input({ type = 'text', size = 'medium', icon, placeholder, name, onChange, ...props }: InputProps) {
  return (
    <div className={`m-input m-input--${size}`}>
      {icon ? <Icon name={icon} className="m-input__icon" /> : null}
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className='m-input__input'
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

export default Input;