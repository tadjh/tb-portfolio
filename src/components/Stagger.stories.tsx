import type { Meta, StoryObj } from "@storybook/react";
import Stagger from "./Stagger";

const meta = {
  title: "Components/Stagger",
  component: Stagger,
  parameters: {
    renderer: "react",
    docs: {
      description: {
        component:
          "Stagger's item rendering is commented out, so it currently renders an empty animated container.",
      },
    },
  },
} satisfies Meta<typeof Stagger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { items: ["One", "Two", "Three"] } as never,
};
