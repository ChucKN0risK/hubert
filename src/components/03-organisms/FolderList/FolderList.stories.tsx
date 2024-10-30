import type { Meta, StoryObj } from '@storybook/react'
import FolderList from './FolderList';
import data from '../../../../backend/data';

const folders = data.children;

const meta = {
  title: '02-molecules/FolderList',
  component: FolderList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    folders
  },
} satisfies Meta<typeof FolderList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
