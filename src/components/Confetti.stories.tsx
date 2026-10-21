import type { Meta, StoryObj } from "@storybook/react";
import Confetti from "./Confetti";

const meta = {
  title: "Components/Confetti",
  component: Confetti,
  parameters: { renderer: "react" },
  args: { playRef: { current: true } },
} satisfies Meta<typeof Confetti>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Rains confetti over the page for 15 seconds while `playRef` is true. */
export const Default: Story = {};
