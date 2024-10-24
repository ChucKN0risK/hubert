import Input from '../Input/Input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface SearchProps {
  onChange: () => void;
  /**
   * The Input size
   * @defaultValue 'medium'
   **/
  size?: 'small' | 'medium' | 'large';
}

function Search({ onChange, size }: SearchProps) {
  return (
    <Input onChange={onChange} size={size}>
      <MagnifyingGlassIcon />
    </Input>
  )
}

export default Search