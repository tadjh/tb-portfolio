import type { Meta, StoryObj } from "@storybook/react";
import after from "../assets/images/Curtis-Mayfield-Music-Archive-1024x576.jpg";
import before from "../assets/images/Curtis-Mayfield-Music-Archive-Before-1024x576.jpg";
import BeforeAfter from "./BeforeAfter";

const meta = {
  title: "Components/BeforeAfter",
  component: BeforeAfter,
  parameters: { renderer: "react" },
  args: {
    before: <img src={before.src} alt="Music archive page before" />,
    after: <img src={after.src} alt="Music archive page after" />,
  },
  decorators: [
    (Story) => (
      <div className="max-w-3xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BeforeAfter>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Drag the slider to compare the two images. */
export const Default: Story = {};
