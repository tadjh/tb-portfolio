import type { Meta, StoryObj } from "@storybook-astro/framework";
import TagList from "./TagList.astro";

const meta = {
  title: "Components/TagList",
  component: TagList,
  args: {
    label: "Skills",
    tags: ["React", "Typescript", "Socket.io", "TailwindCSS", "Cypress"],
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
