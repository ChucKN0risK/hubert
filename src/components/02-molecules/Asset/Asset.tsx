import { useState } from 'react';
import type { AssetItem } from '../../../types/asset.types';
export interface FolderProps extends React.HTMLAttributes<HTMLButtonElement> {
  asset: AssetItem;
  onSelection: (asset: AssetItem) => void;
}

function Folder({ asset, onSelection }: FolderProps) {
  const [isSelected, setSelection] = useState(false)

  const handleClick = () => {
    setSelection(isSelected ? false : true);
    onSelection(asset);
  };

  // Check if the file is an image based on its extension
  const isImage = asset.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);

  if (!isImage) {
    return <div>{asset.name} is not an image file.</div>;
  }

  return (
    <button className='m-asset' onClick={handleClick}>
      <img src={`http://localhost:3000/assets/${asset.path}`} alt='' />
    </button>
  )
}

export default Folder