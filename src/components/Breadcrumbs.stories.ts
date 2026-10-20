import type { Meta, StoryObj } from "@storybook-astro/framework";
import Breadcrumbs from "./Breadcrumbs.astro";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  args: { current: "About" },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithParent: Story = {
  args: {
    current: "ChatJack Collaborative Blackjack",
    parent: { slug: "projects", title: "Projects" },
  },
};
