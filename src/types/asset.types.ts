export type AssetItem = {
  id: string;
  name: string;
  path: string;
  lastModified?: string;
  size?: number;
  type?: string;
  children: AssetItem[];
};
