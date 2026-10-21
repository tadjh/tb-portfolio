import type { Meta, StoryObj } from "@storybook-astro/framework";
import {
  bingo,
  chatjackIFrame,
  curtis,
} from "../../.storybook/fixtures/projects";
import Hero from "./Hero.astro";

const meta = {
  title: "Components/Hero",
  component: Hero,
  args: {
    project: curtis,
    slots: {
      default:
        "<h3 class='text-xl font-bold text-white md:text-4xl'>Curtis Mayfield Redesign</h3>",
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageHero: Story = {};

export const VideoHero: Story = {
  args: {
    project: bingo,
    slots: {
      default:
        "<h3 class='text-xl font-bold text-white md:text-4xl'>Bingo Multiplayer App</h3>",
    },
  },
};

export const IFrameHero: Story = {
  args: {
    project: chatjackIFrame,
    slots: {
      default:
        "<h3 class='text-xl font-bold text-white md:text-4xl'>ChatJack Collaborative Blackjack</h3>",
    },
  },
};
