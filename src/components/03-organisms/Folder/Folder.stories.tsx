import type { Meta, StoryObj } from "@storybook/react"

import Folder from "./Folder";
const meta = {
  title: "02-molecules/Folder",
  component: Folder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    item: {
      id: '0',
      name: "Design Tokens",
    },
    level: 0
  },
} satisfies Meta<typeof Folder>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => (
  <ul className="u-list-style:none">
    <Folder {...args} />
  </ul>
);

export const Default: Story = {
  render: Template
};

export const withSubFolders: Story = {
  args: {
    item: {
      id: '0',
      name: "Design Tokens",
      children: [
        {
          id: '01',
          name: 'Tools'
        },
        {
          id: '02',
          name: 'Assets'
        },
      ],
    },
    level: 0
  },
  render: Template
};
