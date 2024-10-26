import { useState } from 'react'
import Stack from '../../01-atoms/Stack/Stack'
import Text from '../../01-atoms/Text/Text'
import Icon from '../../01-atoms/Icon/Icon'
import Accordion from '../../02-molecules/Accordion/Accordion'
import type { AssetItem } from '../../../types/folder.types'
import './Folder.scss'

export interface FolderProps extends React.HTMLAttributes<HTMLButtonElement | HTMLDetailsElement> {
  item: AssetItem;
  level: number;
}

function Folder({ item, level }: FolderProps) {
  const [isSelected, setSelection] = useState(false)

  const handleClick = () => {
    setSelection(!isSelected);
  };

  const getFolderIcon = isSelected ? 'folder-open' : 'folder-closed';

  return (
    <li className='m-folder' style={{ '--folder-level': level } as React.CSSProperties}>
      {
        item.children && item.children.length > 0 ?
          <Accordion
            summary={item.name}
            summaryIcon={getFolderIcon}
            open={isSelected}
            onToggle={handleClick}
          >
            {item.children.map(el => <Folder item={el} level={1} key={el.id}></Folder>)}
          </Accordion>
          :
          <Stack axis="x" as='button' onClick={handleClick}>
            <Icon name={getFolderIcon} />
            <Text>{item.name}</Text>
          </Stack>
      }
    </li>
  )
}

export default Folder