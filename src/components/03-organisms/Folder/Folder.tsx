import Stack from '../../01-atoms/Stack/Stack';
import Text from '../../01-atoms/Text/Text';
import Icon from '../../01-atoms/Icon/Icon';
import Accordion from '../../02-molecules/Accordion/Accordion';
import FolderList from '../../03-organisms/FolderList/FolderList';
import type { AssetItem } from '../../../types/assets.types';
import type { TextVariant } from '../../01-atoms/Text/Text'
import './Folder.scss';
export interface FolderProps extends React.HTMLAttributes<HTMLButtonElement | HTMLDetailsElement> {
  item: AssetItem;
  isSelected: boolean;
  onSelection: (item: AssetItem) => void;
}

function Folder({ item, isSelected, onSelection }: FolderProps) {
  const handleClick = () => {
    onSelection(item);
  };

  const getFolderIcon = 'folder-closed';
  const getFolderTextVariant: TextVariant = 'body-3';
  const hasChildren = item.children.length > 0;
  const isFolder = hasChildren && !!item.children!.find(el => el.children && el.children.length > 0);

  return (
    <div className={`m-folder ${isSelected ? 'is-selected' : ''}`}>
      {
        isFolder ?
          <Accordion
            summary={item.name}
            summaryIcon={getFolderIcon}
            summaryTextVariant={getFolderTextVariant}
            onToggle={handleClick}
            openByDefault={true}
          >
            <FolderList folders={item.children} />
          </Accordion>
          : hasChildren ?
            <Stack axis="x" as='button' align='center' onClick={handleClick}>
              <Icon name={getFolderIcon} />
              <Text variant={getFolderTextVariant} className='m-folder__name'>{item.name}</Text>
            </Stack>
            : null
      }
    </div>
  )
}

export default Folder