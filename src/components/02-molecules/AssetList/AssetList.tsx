import './AssetList.scss';
import Asset from '../Asset/Asset';
import { useFolderContext } from '../../../hooks/useFolder';
import { useAssetContext } from '../../../hooks/useAsset';
import { AssetItem } from '../../../types/asset.types';

// interface AssetListProps {
//   assets?: AssetItem[];
// }

function AssetList() {
  const { selectedFolder } = useFolderContext();
  const { setSelectedAsset } = useAssetContext();

  const handleAssetSelection = (el: AssetItem) => {
    setSelectedAsset(el);
    console.log(el);
  }

  const assets = selectedFolder?.children;

  return (
    <ul className='m-asset-list u-list-reset'>
      {assets?.map(el =>
        <li key={el.id}><Asset asset={el} onSelection={() => handleAssetSelection(el)} /></li>
      )}
    </ul>
  )
}

export default AssetList;