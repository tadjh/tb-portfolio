import type { Meta, StoryObj } from "@storybook-astro/framework";
import BaseHead from "./BaseHead.astro";

const meta = {
  title: "Components/BaseHead",
  component: BaseHead,
  parameters: {
    docs: {
      description: {
        component:
          "Renders `<head>` metadata only, so the canvas is blank. Inspect the story's DOM to see the output.",
      },
    },
  },
} satisfies Meta<typeof BaseHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitle: Story = {
  args: {
    title: "Projects",
    description: "A collection of projects by Tadjh Brooks.",
  },
};
