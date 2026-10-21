import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: { renderer: "react" },
  args: {
    "aria-label": "Bold",
    children: <span className="px-2 font-bold">B</span>,
    className:
      "text-black data-pressed:bg-neutral-300 dark:text-white dark:data-pressed:bg-neutral-700",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pressed: Story = {
  args: { defaultPressed: true },
};
