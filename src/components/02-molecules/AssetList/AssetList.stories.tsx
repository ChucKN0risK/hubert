import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AssetList from './AssetList';
import { FolderProvider } from '../../../hooks/useFolder';
import { AssetProvider } from '../../../hooks/useAsset';

const meta = {
  title: '02-molecules/AssetList',
  component: AssetList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    assets: {
      "id": "af300334-70f0-42f6-aa0e-7850ca7ec330",
      "name": "Atomic Design",
      "path": "Atomic Design",
      "size": 160,
      "lastModified": "2022-01-12T19:25:47.310Z",
      "children": [
        {
          "id": "6b313a72-78dc-4368-b774-96080a9f57de",
          "name": "Atomic Design.pdf",
          "path": "Atomic Design/Atomic Design.pdf",
          "size": 6604888,
          "lastModified": "2021-09-05T10:54:27.600Z",
          "children": []
        },
        {
          "id": "c0f467e3-2163-4d5e-804c-12ce49ec65c9",
          "name": "atomic_design.png",
          "path": "Atomic Design/atomic_design.png",
          "size": 1054692,
          "lastModified": "2021-08-28T07:52:54.000Z",
          "children": []
        },
        {
          "id": "121abd9d-d0c2-4ed9-afa8-ed837fd88a13",
          "name": "atomic_design_animated.gif",
          "path": "Atomic Design/atomic_design_animated.gif",
          "size": 3471524,
          "lastModified": "2021-09-05T14:46:22.960Z",
          "children": []
        }
      ]
    },
    onSelection: fn(),
  },
} satisfies Meta<typeof AssetList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FolderProvider>
      <AssetProvider>
        <AssetList {...args} />
      </AssetProvider>
    </FolderProvider>
  )
};