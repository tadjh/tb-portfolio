import type { Meta, StoryObj } from "@storybook-astro/framework";
import ProjectsArchive from "./ProjectsArchive.astro";

const meta = {
  title: "Components/ProjectsArchive",
  component: ProjectsArchive,
  parameters: {
    docs: {
      description: {
        component: "Lists every published project in the content collection.",
      },
    },
  },
} satisfies Meta<typeof ProjectsArchive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
