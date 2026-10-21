import type { Meta, StoryObj } from "@storybook-astro/framework";
import FunFact from "./FunFact.astro";

const meta = {
  title: "Components/FunFact",
  component: FunFact,
} satisfies Meta<typeof FunFact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
