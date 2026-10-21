import type { Meta, StoryObj } from "@storybook-astro/framework";
import Copyright from "./Copyright.astro";

const meta = {
  title: "Components/Copyright",
  component: Copyright,
} satisfies Meta<typeof Copyright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
