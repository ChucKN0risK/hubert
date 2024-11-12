import { ReactNode, useState } from 'react';
import Text from '../../01-atoms/Text/Text'
import Icon from '../../01-atoms/Icon/Icon'
import Stack from '../../01-atoms/Stack/Stack'
import type { TextVariant } from '../../01-atoms/Text/Text'
import './Accordion.scss'

// See: https://stackoverflow.com/a/73050903/3906770
interface AccordionProps extends React.HTMLProps<HTMLDetailsElement> {
  summary: string;
  children: ReactNode | ReactNode[];
  summaryIcon?: string;
  summaryTextVariant?: TextVariant;
  /**
   * Is the Accordion open by default
   * @defaultValue false
   **/
  openByDefault?: boolean;
  onToggle: () => void;
}

function Accordion({ summary, summaryIcon, summaryTextVariant, openByDefault = false, onToggle, children, ...props }: AccordionProps) {
  const [openState, setOpenState] = useState(false);

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    // We must stop the toggle event from
    // bubbling to prevent a potential parent
    // <Folder> to be selected instead of the
    // current child <Folder>
    e.stopPropagation();
    setOpenState(e.currentTarget.open);
    onToggle();
  }

  return (
    <details
      className='m-accordion'
      open={openByDefault}
      aria-expanded={openState}
      onToggle={(e) => handleToggle(e)}
      {...props}
    >
      <Stack axis="x" as='summary' align='center'>
        {summaryIcon ? <Icon name={summaryIcon} className='m-accordion__summary-icon' /> : null}
        <Text variant={summaryTextVariant}>{summary}</Text>
        <Icon name='caret-right' className='m-accordion__toggle-icon' />
      </Stack>
      <div className="m-accordion__content">
        {children}
      </div>
    </details>
  )
}

export default Accordion;