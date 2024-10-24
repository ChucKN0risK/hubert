import type { Meta, StoryObj } from "@storybook/react";

import Stack from "./Stack";
import Text from "../Text/Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Stack",
  component: Stack,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   variant: { control: 'color' },
  // },
  args: {
    children: [<Text>Stack item 1</Text>, "cououcoucouou"],
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    axis: "x",
  },
};
