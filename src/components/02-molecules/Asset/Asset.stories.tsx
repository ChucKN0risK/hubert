import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Asset from './Asset';

const meta = {
  title: '02-molecules/Asset',
  component: Asset,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    asset: {
      "id": "4f41c708-fb4e-46e0-8def-3da420395dcf",
      "name": "jan.jpg",
      "path": "AI/jan.jpg",
      "size": 430164,
      "lastModified": "2024-04-30T04:01:50.009Z",
      "children": []
    },
    onSelection: fn(),
  },
} satisfies Meta<typeof Asset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};