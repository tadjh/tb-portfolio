import {
  faBarsStaggered,
  faClock,
  faCodeCommit,
} from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";
import Hype from "./Hype";

const meta = {
  title: "Components/Hype",
  component: Hype,
  parameters: { renderer: "react" },
  args: {
    items: [
      { icon: faClock, value: 270, label: "hours" },
      { icon: faBarsStaggered, value: 11295, label: "lines" },
      { icon: faCodeCommit, value: 293, label: "commits" },
    ],
  },
} satisfies Meta<typeof Hype>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutIcons: Story = {
  args: {
    items: [
      { value: 628, label: "hours" },
      { value: 10735, label: "lines" },
    ],
  },
};
