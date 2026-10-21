import type { Meta, StoryObj } from "@storybook/react";
import OffCanvasMenu from "./OffCanvasMenu";

const meta = {
  title: "Components/OffCanvasMenu",
  component: OffCanvasMenu,
  parameters: { renderer: "react" },
  args: {
    children: (
      <div className="flex flex-1 items-center">
        <ul className="flex flex-col gap-y-2 md:gap-y-4">
          {["Home", "Projects", "About"].map((title) => (
            <li
              key={title}
              className="font-display text-3xl font-bold uppercase md:text-5xl"
            >
              <a href="#" className="text-white">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
} satisfies Meta<typeof OffCanvasMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Click the menu icon to slide the menu in. */
export const Default: Story = {};
