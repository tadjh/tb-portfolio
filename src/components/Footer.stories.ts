import type { Meta, StoryObj } from "@storybook-astro/framework";
import Footer from "./Footer.astro";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Minimal: Story = {
  args: { minimal: true },
};
