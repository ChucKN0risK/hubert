export type AssetItem = {
  id: string;
  name: string;
  // type: "folder" | "asset";
  // path: string;
  children?: AssetItem[];
};
