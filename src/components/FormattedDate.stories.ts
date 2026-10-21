import type { Meta, StoryObj } from "@storybook-astro/framework";
import FormattedDate from "./FormattedDate.astro";

const meta = {
  title: "Components/FormattedDate",
  component: FormattedDate,
  args: { date: new Date("2025-03-10T12:00:00Z") },
} satisfies Meta<typeof FormattedDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FromString: Story = {
  args: { date: "2024-01-22T12:00:00Z" },
};
