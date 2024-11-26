import { type Tag } from './tags.types';

export type AssetItem = {
  id: string;
  name: string;
  path: string;
  lastModified?: string;
  size?: number;
  type?: string;
  tags?: Tag[];
  children: AssetItem[];
};

export type UpdateAsset = Partial<Pick<AssetItem, 'name' | 'tags'>>;
