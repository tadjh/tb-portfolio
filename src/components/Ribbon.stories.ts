import type { Meta, StoryObj } from "@storybook-astro/framework";
import Ribbon from "./Ribbon.astro";

const meta = {
  title: "Components/Ribbon",
  component: Ribbon,
  args: {
    label: "Fun Fact",
    slots: { default: 'Tadjh is pronounced "taj"' },
  },
} satisfies Meta<typeof Ribbon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
