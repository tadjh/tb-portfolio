import type { Meta, StoryObj } from "@storybook-astro/framework";
import Pipe from "./Pipe.astro";

const meta = {
  title: "Components/Pipe",
  component: Pipe,
} satisfies Meta<typeof Pipe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
