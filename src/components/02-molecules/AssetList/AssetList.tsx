import './AssetList.scss';
import Asset from '../Asset/Asset';
import { useFolderContext } from '../../../hooks/useFolder';
import { useAssetContext } from '../../../hooks/useAsset';
import { AssetItem } from '../../../types/assets.types';

function AssetList() {
  const { selectedFolder } = useFolderContext();
  const { setSelectedAsset } = useAssetContext();

  const handleAssetSelection = (el: AssetItem) => {
    setSelectedAsset(el);
  }
  const assets = selectedFolder?.children?.filter(el => el.type === 'file');

  return (
    <ul className='m-asset-list u-list-reset'>
      {assets?.map(el =>
        <li key={el.id}><Asset asset={el} onSelection={() => handleAssetSelection(el)} /></li>
      )}
    </ul>
  )
}

export default AssetList;