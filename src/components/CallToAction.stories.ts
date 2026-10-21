import type { Meta, StoryObj } from "@storybook-astro/framework";
import CallToAction from "./CallToAction.astro";

const meta = {
  title: "Components/CallToAction",
  component: CallToAction,
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
