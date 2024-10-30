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
          "children": [],
          "depth": 2
        },
        {
          "id": "b662ec3e-75e9-4e4e-9e0d-9f95a2a0c9da",
          "name": "superwhisper.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI/superwhisper.jpg",
          "size": 549304,
          "lastModified": "2024-04-30T04:09:49.981Z",
          "children": [],
          "depth": 2
        }
      ],
      "depth": 1
    },
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
      "id": "848c239d-b68d-4bff-91b6-d7a45b0d9953",
      "name": "Design Tokens",
      "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens",
      "size": 3616,
      "lastModified": "2024-10-23T12:26:38.650Z",
      "children": [
        {
          "id": "f5ede0f0-54bc-4cb4-818e-0910794230cd",
          "name": "Intuit",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Intuit",
          "size": 128,
          "lastModified": "2024-10-13T00:02:11.384Z",
          "children": [
            {
              "id": "edf06bcb-9fb5-4ff2-b553-ab8c6fcbb6c5",
              "name": "intuit_design_tokens_workflow.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Intuit/intuit_design_tokens_workflow.jpg",
              "size": 100764,
              "lastModified": "2024-10-13T00:02:11.384Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "3a88a84c-76af-451f-9e6e-2371d5288461",
              "name": "intuit_durable-framework.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Intuit/intuit_durable-framework.jpg",
              "size": 54378,
              "lastModified": "2024-10-13T00:02:11.385Z",
              "children": [],
              "depth": 3
            }
          ],
          "depth": 2
        },
        {
          "id": "e9b4241d-b3be-4f94-ae26-1ac293b4d5d0",
          "name": "OKLab-sRGB-perceived-brightness-comparison.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/OKLab-sRGB-perceived-brightness-comparison.jpg",
          "size": 67604,
          "lastModified": "2024-04-21T10:59:53.941Z",
          "children": [],
          "depth": 2
        }
      ],
      "depth": 1
    },
  },
  render: Template
};
