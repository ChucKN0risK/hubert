import { ReactNode } from 'react';
import Text from '../../01-atoms/Text/Text'
import Icon from '../../01-atoms/Icon/Icon'
import Stack from '../../01-atoms/Stack/Stack'
import './Accordion.scss'

// See: https://stackoverflow.com/a/73050903/3906770
interface FolderProps extends React.ComponentPropsWithoutRef<'details'> {
  summary: string;
  children: ReactNode | ReactNode[];
  /**
   * Is the Accordion open by default
   * @defaultValue false
   **/
  open?: boolean;
}

function Folder({ summary, open = false, children }: FolderProps) {
  return (
    <details className='m-accordion' open={open} aria-expanded={open}>
      <Stack axis="x" as='summary'>
        <Icon name='caret-right' className='m-accordion__toggle-icon' />
        <Text>{summary}</Text>
      </Stack>
      <div className="m-accrodion__content">
        {children}
      </div>
    </details>
  )
}

export default Folder