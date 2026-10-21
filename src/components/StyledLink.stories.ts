import type { Meta, StoryObj } from "@storybook-astro/framework";
import StyledLink from "./StyledLink.astro";

const meta = {
  title: "Components/StyledLink",
  component: StyledLink,
  args: { href: "/about", slots: { default: "Learn More &rarr;" } },
} satisfies Meta<typeof StyledLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inline: Story = {
  args: { inline: true },
};
