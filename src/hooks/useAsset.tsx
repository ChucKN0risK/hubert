import { createContext, ReactNode, useContext, useState } from "react";
import { AssetItem } from "../types/assets.types";

interface AssetContextType {
  selectedAsset: AssetItem | null,
  setSelectedAsset: (asset: AssetItem | null) => void,
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);


export const AssetProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAsset, setSelectedAsset] = useState<AssetItem | null>(null);
  const value = { selectedAsset, setSelectedAsset };

  return (
    <AssetContext.Provider value={value}>
      {children}
    </AssetContext.Provider>
  )
}

export const useAssetContext = () => {
  const context = useContext(AssetContext);

  if (context === undefined) {
    throw new Error('assetContext must be used within the AssetProvider');
  }

  return context;
}