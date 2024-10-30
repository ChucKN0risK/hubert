import { useState } from 'react'
import Stack from '../../01-atoms/Stack/Stack'
import Text from '../../01-atoms/Text/Text'
import Icon from '../../01-atoms/Icon/Icon'
import Accordion from '../../02-molecules/Accordion/Accordion'
import FolderList from '../../03-organisms/FolderList/FolderList'
import type { AssetItem } from '../../../types/asset.types'
import './Folder.scss'

export interface FolderProps extends React.HTMLAttributes<HTMLButtonElement | HTMLDetailsElement> {
  item: AssetItem;
}

function Folder({ item }: FolderProps) {
  const [isSelected, setSelection] = useState(false)

  const handleClick = (e) => {
    e.stopPropagation();
    setSelection(!isSelected);
  };

  const getFolderIcon = isSelected ? 'folder-open' : 'folder-closed';
  const hasChildren = item.children.length > 0;
  const isFolder = hasChildren && !!item.children!.find(el => el.children && el.children.length > 0);

  return (
    <li className='m-folder' style={{ '--folder-level': item.depth } as React.CSSProperties}>
      {
        isFolder ?
          <Accordion
            summary={item.name}
            summaryIcon={getFolderIcon}
            open={isSelected}
            onToggle={handleClick}
          >
            <FolderList folders={item.children} />
          </Accordion>
          : hasChildren ?
            <Stack axis="x" as='button' align='center' onClick={handleClick}>
              <Icon name={getFolderIcon} />
              <Text>{item.name}</Text>
            </Stack>
            : null
      }
    </li>
  )
}

export default Folder