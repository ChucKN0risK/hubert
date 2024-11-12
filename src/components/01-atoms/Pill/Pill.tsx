import Stack from '../Stack/Stack';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import './Pill.scss';

interface PillProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  onDelete?: () => void;
  deleteAriaLabel?: string;
}

function Pill({ label, onDelete, deleteAriaLabel, ...props }: PillProps) {
  return (
    <Stack axis='x' gap={2} className='a-pill' {...props}>
      <Text as='span' variant='caption-1'>{label}</Text>
      {onDelete ? (<button onClick={onDelete} aria-label={deleteAriaLabel}><Icon name='cross' /></button>) : null}
    </Stack>
  )
}

export default Pill;