import type { Meta, StoryObj } from "@storybook/react";
import BingoJingle from "./BingoJingle";

const meta = {
  title: "Components/BingoJingle",
  component: BingoJingle,
  parameters: { renderer: "react" },
} satisfies Meta<typeof BingoJingle>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Press play to start the theme song and the confetti. */
export const Default: Story = {};
