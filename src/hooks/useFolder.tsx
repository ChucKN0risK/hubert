import { createContext, useState, useContext, ReactNode } from "react";
import type { AssetItem } from '../types/assets.types';
import data from '../../api/data.json';

interface FolderContextType {
  selectedFolder: AssetItem | null,
  setSelectedFolder: (folder: AssetItem | null) => void,
}

export const FolderContext = createContext<FolderContextType | undefined>(undefined);

export const FolderProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFolder, setSelectedFolder] = useState<AssetItem | null>(data);
  const value = { selectedFolder, setSelectedFolder };

  return (
    <FolderContext.Provider value={value}>
      {children}
    </FolderContext.Provider>
  )
}

export const useFolderContext = () => {
  const context = useContext(FolderContext);
  if (context === undefined) {
    throw new Error('FolderContext must be used within a FolderProvider');
  }
  return context;
}


















// export function FolderContextProvider({ children }) {
//   const [selectedFolder, setSelectedFolder] = useState({
//     id: "a10b58f0-61de-430b-96dd-cd5ed49a7f63",
//     name: "AI",
//     path: "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI",
//     size: 128,
//     lastModified: "2024-04-30T04:10:33.324Z",
//     children: [
//       {
//         id: "72675931-2f57-44ab-bbd5-d4e740bbdaf0",
//         name: "jan.jpg",
//         path: "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI/jan.jpg",
//         size: 430164,
//         lastModified: "2024-04-30T04:01:50.009Z",
//         children: [],
//       },
//       {
//         id: "2b80a47a-2ceb-42fb-8a7b-bf24c282e42f",
//         name: "superwhisper.jpg",
//         path: "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI/superwhisper.jpg",
//         size: 549304,
//         lastModified: "2024-04-30T04:09:49.981Z",
//         children: [],
//       },
//     ],
//   });

//   return <FolderContext.Provider value={{
//     selectedFolder,
//     setSelectedFolder
//   }}>
//     {children}
//   </FolderContext.Provider>
// }
