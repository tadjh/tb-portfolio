import type { Meta, StoryObj } from "@storybook-astro/framework";
import IFrame from "./IFrame.astro";

const meta = {
  title: "Components/IFrame",
  component: IFrame,
  args: {
    src: "https://chatjack.tadjh.com/",
    title: "ChatJack",
    class: "aspect-video rounded-lg",
  },
} satisfies Meta<typeof IFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Lazy iframes wait for a click before loading. */
export const Lazy: Story = {};

export const CustomPlaceholder: Story = {
  args: { placeholder: "Click to load ChatJack live" },
};

export const Eager: Story = {
  args: { loading: "eager" },
};
