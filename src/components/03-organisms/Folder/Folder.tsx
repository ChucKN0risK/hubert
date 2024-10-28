import { useState } from 'react'
import Stack from '../../01-atoms/Stack/Stack'
import Text from '../../01-atoms/Text/Text'
import Icon from '../../01-atoms/Icon/Icon'
import Accordion from '../../02-molecules/Accordion/Accordion'
import type { AssetItem } from '../../../types/asset.types'
import './Folder.scss'

export interface FolderProps extends React.HTMLAttributes<HTMLButtonElement | HTMLDetailsElement> {
  item: AssetItem;
  level: number;
}

function Folder({ item, level }: FolderProps) {
  const [isSelected, setSelection] = useState(false)

  const handleClick = (e) => {
    e.stopPropagation();
    console.log('click');
    setSelection(!isSelected);
  };

  const getFolderIcon = isSelected ? 'folder-open' : 'folder-closed';

  // Un dossier = un item qui contient des enfants et dont l'un d'entre eux contient des enfants
  const hasChildren = !!item.children && item.children.length > 0;
  const isFolder = hasChildren && !!item.children!.find(el => el.children);

  console.log(item.name, hasChildren, isFolder);

  return (
    <li className='m-folder' style={{ '--folder-level': level } as React.CSSProperties}>
      {
        isFolder ?
          <Accordion
            summary={item.name}
            summaryIcon={getFolderIcon}
            open={isSelected}
            onToggle={handleClick}
          >
            {item.children!.map(el => <Folder item={el} level={1} key={el.id}></Folder>)}
          </Accordion>
          : hasChildren ?
            <Stack axis="x" as='button' alignItems='center' onClick={handleClick}>
              <Icon name={getFolderIcon} />
              <Text>{item.name}</Text>
            </Stack>
            : null
      }
    </li>
  )
}

export default Folder