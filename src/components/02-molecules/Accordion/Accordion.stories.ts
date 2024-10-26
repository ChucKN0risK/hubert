import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./Accordion";
const meta = {
  title: "02-molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    summary: "Accordion summary",
    children: "Content inside the accordion component",
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
