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

  return (
    <ul className='m-folder-list'>
      {folders.map(el =>
        <Folder item={el} key={el.id} onSelection={() => handleFolderSelection(el)} />
      )}
    </ul>
  )
}

export default FolderList