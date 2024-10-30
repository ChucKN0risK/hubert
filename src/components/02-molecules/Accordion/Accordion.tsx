import { ReactNode } from 'react';
import Text from '../../01-atoms/Text/Text'
import Icon from '../../01-atoms/Icon/Icon'
import Stack from '../../01-atoms/Stack/Stack'
import './Accordion.scss'

// See: https://stackoverflow.com/a/73050903/3906770
interface FolderProps extends React.ComponentPropsWithoutRef<'details'> {
  summary: string;
  children: ReactNode | ReactNode[];
  summaryIcon?: string;
  /**
   * Is the Accordion open by default
   * @defaultValue false
   **/
  open?: boolean;
}

function Folder({ summary, summaryIcon, open = false, children, ...props }: FolderProps) {
  return (
    <details className='m-accordion' open={open} aria-expanded={open} {...props}>
      <Stack axis="x" as='summary' align='center'>
        {summaryIcon ? <Icon name={summaryIcon} className='m-accordion__summary-icon' /> : null}
        <Text>{summary}</Text>
        <Icon name='caret-right' className='m-accordion__toggle-icon' />
      </Stack>
      <div className="m-accrodion__content">
        {children}
      </div>
    </details>
  )
}

export default Folder