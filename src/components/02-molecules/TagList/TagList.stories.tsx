import type { Meta, StoryObj } from '@storybook/react';
import TagList from './TagList';
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '02-Molecules/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    tags: ['code'],
    existingTags: ['react', 'design systems'],
    onTagCreation: fn(),
    onTagAddition: fn(),
    onTagDeletion: fn(),
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
