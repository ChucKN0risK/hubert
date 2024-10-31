import { createContext, useState, useContext, ReactNode } from "react";
import type { AssetItem } from '../types/asset.types';

interface FolderContextType {
  selectedFolder: AssetItem | null,
  setSelectedFolder: (folder: AssetItem | null) => void,
}

// L'objet passé au contexte ici est une "signature" / "structure"
// qui sert de sécurité. C'est la valeur passée au "value" dans le
// composant Provider qui prendra le dessus et qui doit correspondre
// a la meme structure.
export const FolderContext = createContext<FolderContextType | undefined>(undefined);

export const FolderProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFolder, setSelectedFolder] = useState<AssetItem | null>(null);
  const value = { selectedFolder, setSelectedFolder };

  return (
    <FolderContext.Provider value={value}>
      {children}
    </FolderContext.Provider>
  )
}

export const useFolderContext = () => {
  const context = useContext(FolderContext);
  console.log(context)
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
