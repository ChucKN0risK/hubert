import Text from '../../01-atoms/Text/Text';
import Stack from '../../01-atoms/Stack/Stack';
import { useAssetContext } from '../../../hooks/useAsset';
import './AssetInfo.scss';

function Folder() {
  const { selectedAsset } = useAssetContext();

  const getAssetSize = () => {
    if (selectedAsset!.size! < 1000000) return `${Math.round(selectedAsset!.size! / 1000)} KB`;
    if (selectedAsset!.size! > 1000000 && selectedAsset!.size! < 1000000000) return `${(Math.round(selectedAsset!.size!) / 1000000).toFixed(1)} MB`;
  }

  const getAssetLastUpdateDate = () => new Date(selectedAsset!.lastModified!).toDateString();

  if (selectedAsset) {
    return (
      <div className="m-asset-info">
        <img src={`http://localhost:3000/assets/${selectedAsset.path}`} alt='' />
        <div className="m-asset-info__section">
          <Text>Properties</Text>
          <ul className='u-list-reset'>
            <Stack as='li' axis='x'>
              <Text as='span' variant='body-3'>Dimensions</Text>
              <Text as='span' variant='body-3'>1600 x 1200</Text>
            </Stack>
            <Stack as='li' axis='x'>
              <Text as='span' variant='body-3'>Size</Text>
              <Text as='span' variant='body-3'>{getAssetSize()}</Text>
            </Stack>
            <Stack as='li' axis='x'>
              <Text as='span' variant='body-3'>Last updated</Text>
              <Text as='span' variant='body-3'>{getAssetLastUpdateDate()}</Text>
            </Stack>
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className="m-asset-info">
        <Text variant='body-3' className='m-asset-info__placeholder'>Please select an asset</Text>
      </div>
    )
  }
}

export default Folder