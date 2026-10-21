import type { Meta, StoryObj } from "@storybook/react";
import bingoJingle from "../assets/audio/Bingo_Theme_by_Tadjh_Brooks.mp3";
import Audio from "./Audio";

const meta = {
  title: "Components/Audio",
  component: Audio,
  parameters: { renderer: "react" },
  args: { src: bingoJingle },
} satisfies Meta<typeof Audio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
