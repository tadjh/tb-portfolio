import type { Meta, StoryObj } from "@storybook/react";
import TagList from "./TagList";

const meta = {
  title: "Components/TagList",
  component: TagList,
  parameters: { renderer: "react" },
  args: {
    label: "Skills",
    tags: ["React", "Typescript", "Socket.io", "TailwindCSS", "Cypress"],
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
