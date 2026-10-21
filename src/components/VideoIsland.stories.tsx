import type { Meta, StoryObj } from "@storybook/react";
import bingoAnimation from "../assets/videos/Bingo-Home-Animation.mp4";
import Video from "./Video";

const meta = {
  title: "Components/Video (React island)",
  component: Video,
  parameters: { renderer: "react" },
  args: {
    media: bingoAnimation,
    className: "max-w-xl rounded-lg",
    autoPlay: true,
    muted: true,
    loop: true,
  },
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lazy: Story = {};

export const Eager: Story = {
  args: { loading: "eager" },
};
