import type { Meta, StoryObj } from "@storybook/react";
import { Button, buttonVariants } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: { renderer: "react" },
  args: { children: "Read More" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Overlay: Story = {
  args: { variant: "overlay", children: "Click to load live preview" },
  render: (args) => (
    <div className="relative h-48 w-80 rounded-lg bg-[#193c3e]">
      <Button {...args} size="none" className="absolute inset-0" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

/** Links use `buttonVariants` to get the button look and keep link semantics. */
export const AsLink: Story = {
  render: () => (
    <a href="#" className={buttonVariants()}>
      Read More
    </a>
  ),
};
