import type { Meta, StoryObj } from "@storybook-astro/framework";
import { bingo, chatjack } from "../../.storybook/fixtures/projects";
import GridItem from "./GridItem.astro";

const meta = {
  title: "Components/GridItem",
  component: GridItem,
  args: { isWide: false, project: chatjack },
} satisfies Meta<typeof GridItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageHero: Story = {};

export const VideoHero: Story = {
  args: { project: bingo },
};
