import './FormField.scss';
import Stack from '../../01-atoms/Stack/Stack'
import Text from '../../01-atoms/Text/Text'
import Input from '../Input/Input'

interface FormFieldProps {
  name: string;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const kebabCase = (string: string) => string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

function FormField({ name, defaultValue, onChange }: FormFieldProps) {
  const kebabCasedName = kebabCase(name);

  return (
    <Stack className='m-form-field'>
      <Text as='label' htmlFor={name}>{kebabCasedName}</Text>
      <Input value={defaultValue} name={name} onChange={(e) => onChange(e)} />
    </Stack>
  )
}

export default FormField;