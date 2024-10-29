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
      path: '',
      children: []
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
      "id": "6ddcb5f4-5598-4d45-9cd1-e9c675dd85b2",
      "name": "AI",
      "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI",
      "size": 128,
      "lastModified": "2024-04-30T04:10:33.324Z",
      "children": [
        {
          "id": "4f41c708-fb4e-46e0-8def-3da420395dcf",
          "name": "jan.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI/jan.jpg",
          "size": 430164,
          "lastModified": "2024-04-30T04:01:50.009Z",
          "children": []
        },
        {
          "id": "b662ec3e-75e9-4e4e-9e0d-9f95a2a0c9da",
          "name": "superwhisper.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI/superwhisper.jpg",
          "size": 549304,
          "lastModified": "2024-04-30T04:09:49.981Z",
          "children": []
        }
      ]
    },
    level: 0
  },
  render: Template
};
