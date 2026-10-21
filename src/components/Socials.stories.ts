import type { Meta, StoryObj } from "@storybook-astro/framework";
import Socials from "./Socials.astro";

const meta = {
  title: "Components/Socials",
  component: Socials,
} satisfies Meta<typeof Socials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
