import type { Meta, StoryObj } from "@storybook-astro/framework";
import Card from "./Card.astro";

const meta = {
  title: "Components/Card",
  component: Card,
  args: {
    class: "max-w-sm p-6",
    slots: {
      default:
        "<h3 class='text-2xl font-bold'>Card title</h3><p>Any content can go inside a card.</p>",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomBackground: Story = {
  args: { style: { background: "#193c3e" }, class: "max-w-sm p-6 text-white" },
};
