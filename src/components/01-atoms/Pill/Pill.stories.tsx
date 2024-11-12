import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Pill from './Pill'

export default {
  title: '01-atoms/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Label'
  },
} satisfies Meta<typeof Pill>;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {};

export const Deletable: Story = {
  args: {
    onDelete: fn(),
  },
};
