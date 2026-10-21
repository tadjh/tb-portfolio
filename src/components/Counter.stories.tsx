import type { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta = {
  title: "Components/Counter",
  component: Counter,
  parameters: { renderer: "react" },
  args: { value: 10735, delay: 0, duration: 3 },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Delayed: Story = {
  args: { value: 628, delay: 2 },
};
