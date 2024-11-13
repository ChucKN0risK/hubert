import './AssetList.scss';
import Asset from '../Asset/Asset';
import { useFolderContext } from '../../../hooks/useFolder';
import { useAssetContext } from '../../../hooks/useAsset';
import { AssetItem } from '../../../types/asset.types';

function AssetList() {
  const { selectedFolder } = useFolderContext();
  const { setSelectedAsset } = useAssetContext();

  const handleAssetSelection = (el: AssetItem) => {
    setSelectedAsset(el);
    console.log(el);
  }
  // Only select elements that don't have any children, hence files
  const assets = selectedFolder?.children.filter(el => el.children.length === 0);

  return (
    <ul className='m-asset-list u-list-reset'>
      {assets?.map(el =>
        <li key={el.id}><Asset asset={el} onSelection={() => handleAssetSelection(el)} /></li>
      )}
    </ul>
  )
}

export default AssetList;