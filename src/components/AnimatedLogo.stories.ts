import type { Meta, StoryObj } from "@storybook-astro/framework";
import AnimatedLogo from "./AnimatedLogo.astro";

const meta = {
  title: "Components/AnimatedLogo",
  component: AnimatedLogo,
} satisfies Meta<typeof AnimatedLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Hover to flip from the logo to the profile picture. */
export const Default: Story = {};
