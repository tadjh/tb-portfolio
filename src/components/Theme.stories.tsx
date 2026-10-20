import type { Meta, StoryObj } from "@storybook/react";
import Theme from "./Theme";

const meta = {
  title: "Components/Theme",
  component: Theme,
  parameters: { renderer: "react" },
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Click the icon to toggle dark mode on the whole preview. */
export const Default: Story = {};
