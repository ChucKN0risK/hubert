import { useState } from 'react';
import type { AssetItem } from '../../../types/assets.types';
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
  const isImage = asset.name.match(/\.(jpg|jpeg|png|gif|avif|webp|svg)$/i);
  const isVideo = asset.name.match(/\.(mp4)$/i);
  // const isPDF = asset.name.match(/\.(pdf)$/i);

  if (isImage) {
    return (
      <button className='m-asset' onClick={handleClick}>
        <img src={`http://localhost:3000/assets/${asset.path}`} alt='' />
      </button>
    )
  }
  if (isVideo) {
    return (
      <video src={`http://localhost:3000/assets/${asset.path}`}></video>
    )
  }

  // if (isPDF) {
  //   return (
  //     <iframe src={`http://localhost:3000/assets/${asset.path}`} width="100%" height="100%">
  //       {/* <a href="home.pdf">Download the PDF</a> */}
  //     </iframe>
  //   )
  // }

}

export default Folder