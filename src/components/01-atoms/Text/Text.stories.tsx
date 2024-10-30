import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta = {
  title: "01-atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: ["The quick brown fox jumped over the lazy frog"],
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Title1: Story = {
  args: {
    variant: "title-1",
  },
};
