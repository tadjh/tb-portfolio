import type { Meta, StoryObj } from "@storybook-astro/framework";
import Header from "./Header.astro";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The home page renders the site title as the page's h1. */
export const H1Title: Story = {
  args: { level: "h1" },
};
