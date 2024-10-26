import type { Meta, StoryObj } from "@storybook/react";

import Stack from "./Stack";
import Text from "../Text/Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "01-atoms/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Stack>;

type Story = StoryObj<typeof Stack>;

const Template: Story['render'] = (args) => (
  <Stack {...args}>
    <Text>Content</Text>
    <Text>Content</Text>
  </Stack>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: Template
};

export const Horizontal: Story = {
  args: {
    axis: "x",
  },
  render: Template
};
