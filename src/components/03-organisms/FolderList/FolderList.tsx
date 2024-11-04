import Folder from '../../03-organisms/Folder/Folder';
import './FolderList.scss';
import type { AssetItem } from '../../../types/asset.types';
import { useFolderContext } from '../../../hooks/useFolder';

interface FolderListProps {
  folders: AssetItem[];
}

function FolderList({ folders }: FolderListProps) {
  const { setSelectedFolder } = useFolderContext();

  const handleFolderSelection = (el: AssetItem) => {
    setSelectedFolder(el);
  }

  const filteredFolders = folders.filter(folder => folder.children.length > 0);

  return (
    <ul className='u-list-reset m-folder-list'>
      {filteredFolders.map(el => (
        <li key={el.id}>
          <Folder item={el} onSelection={() => handleFolderSelection(el)} />
        </li>
      ))}
    </ul>
  )
}

export default FolderList