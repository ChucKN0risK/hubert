import './AssetList.scss';
import type { AssetItem } from '../../../types/asset.types';
import { useFolderContext } from '../../../hooks/useFolder';

// interface AssetListProps {
//   assets?: AssetItem[];
// }

function AssetList() {
  const { selectedFolder } = useFolderContext();

  // const handleAssetSelection = (el: AssetItem) => {
  //   setSelectedAsset(el);
  //   console.log(el);

  // }

  const assets = selectedFolder?.children;

  return (
    <ul className='m-folder-list'>
      {assets?.map(el =>
        <li><button>{el.name}</button></li>
      )}
    </ul>
  )
}

export default AssetList;