import type { Meta, StoryObj } from "@storybook-astro/framework";
import Tag from "./Tag.astro";

const meta = {
  title: "Components/Tag",
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { slots: { default: "TypeScript" } },
};

export const Primary: Story = {
  args: { primary: true, slots: { default: "Skills" } },
};
