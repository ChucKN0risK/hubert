import type { Meta, StoryObj } from "@storybook/react"
import FolderList from "./FolderList";

const meta = {
  title: "02-molecules/FolderList",
  component: FolderList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    folders: [
      {
        id: '0',
        name: "Design Tokens",
        children: [
          {
            id: '01',
            name: 'Tools',
            children: [
              {
                id: '03',
                name: 'arcade',
              },
              {
                id: '04',
                name: 'bitspace',
              }
            ]
          },
          {
            id: '02',
            name: 'Scaleway Design Tokens'
          },
        ],
      }
    ]
  },
} satisfies Meta<typeof FolderList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
