import type { Meta, StoryObj } from "@storybook-astro/framework";
import SiteTitle from "./SiteTitle.astro";

const meta = {
  title: "Components/SiteTitle",
  component: SiteTitle,
} satisfies Meta<typeof SiteTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const H1: Story = {
  args: { level: "h1" },
};
