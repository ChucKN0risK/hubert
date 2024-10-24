import './Input.scss';
// import Text from '../../01-atoms/Text/Text'

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
  onChange: () => void;
}

function Input({ children, type = 'text', size = 'medium', placeholder, name, onChange }: InputProps) {
  return (
    <div className={`m-input m-input--${size}`}>
      {children}
      {/* <Text as='label'>Coucou</Text> */}
      <input type={type} id={name} placeholder={placeholder} className='m-input__input' onChange={onChange} />
    </div>
  )
}

export default Input;