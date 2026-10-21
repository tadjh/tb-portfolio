import type { Meta, StoryObj } from "@storybook-astro/framework";
import GoToTop from "./GoToTop.astro";

const meta = {
  title: "Components/GoToTop",
  component: GoToTop,
} satisfies Meta<typeof GoToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
