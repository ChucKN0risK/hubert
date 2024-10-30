import Folder from '../../03-organisms/Folder/Folder'
import './FolderList.scss'
import type { AssetItem } from '../../../types/asset.types'

interface FolderListProps {
  folders: AssetItem[];
}

function FolderList({ folders }: FolderListProps) {
  return (
    <ul className='m-folder-list'>
      {folders.map(el =>
        <Folder item={el} key={el.id} />
      )}
    </ul>
  )
}

export default FolderList