import Folder from '../../03-organisms/Folder/Folder';
import './FolderList.scss';
import type { AssetItem } from '../../../types/assets.types';
import { useFolderContext } from '../../../hooks/useFolder';

interface FolderListProps {
  items: AssetItem[];
}

function FolderList({ items = [] }: FolderListProps) {
  const { selectedFolder, setSelectedFolder } = useFolderContext();

  const handleFolderSelection = (el: AssetItem) => {
    setSelectedFolder(el);
  }

  const getSeletedState = (el: AssetItem) => {
    return el.id === selectedFolder?.id;
  }
  const filteredFolders = items.filter(item => item.type === 'directory' && item.children && item.children.length > 0);

  return (
    <ul className='u-list-reset m-folder-list'>
      {filteredFolders.map(el => (
        <li key={el.id}>
          <Folder item={el} isSelected={getSeletedState(el)} onSelection={() => handleFolderSelection(el)} />
        </li>
      ))}
    </ul>
  )
}

export default FolderList;