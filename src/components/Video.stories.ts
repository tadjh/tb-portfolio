import type { Meta, StoryObj } from "@storybook-astro/framework";
import bingoAnimation from "../assets/videos/Bingo-Home-Animation.mp4";
import Video from "./Video.astro";

const meta = {
  title: "Components/Video",
  component: Video,
  args: {
    media: bingoAnimation,
    class: "max-w-xl rounded-lg",
    autoPlay: true,
    muted: true,
    loop: true,
  },
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Eager: Story = {
  args: { loading: "eager" },
};
