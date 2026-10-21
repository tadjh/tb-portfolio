import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { renderer: "react" },
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
