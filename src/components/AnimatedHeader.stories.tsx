import type { Meta, StoryObj } from "@storybook/react";
import AnimatedHeader from "./AnimatedHeader";

const meta = {
  title: "Components/AnimatedHeader",
  component: AnimatedHeader,
  parameters: { renderer: "react" },
  args: {
    children: (
      <div className="w-40" style={{ perspective: "1000px" }}>
        <div
          className="flip-inner relative aspect-square duration-800"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center rounded-lg bg-orange-tadjh text-4xl font-bold text-white"
            style={{ backfaceVisibility: "hidden" }}
          >
            Front
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center rounded-lg bg-blue-gulf text-4xl font-bold text-black"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            Back
          </div>
        </div>
      </div>
    ),
  },
} satisfies Meta<typeof AnimatedHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Flips its `.flip-inner` child every 7 seconds, or on hover. */
export const Default: Story = {};
