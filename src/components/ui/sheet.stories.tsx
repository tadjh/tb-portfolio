import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";

const meta = {
  title: "UI/Sheet",
  component: SheetContent,
  parameters: { renderer: "react" },
  args: { side: "right" },
  argTypes: {
    side: {
      control: "inline-radio",
      options: ["top", "right", "bottom", "left"],
    },
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger render={<Button />}>Open sheet</SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle className="text-black dark:text-white">
            Sheet title
          </SheetTitle>
          <SheetDescription>Content slides in from the side.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
} satisfies Meta<typeof SheetContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {};

export const Left: Story = {
  args: { side: "left" },
};

export const Bottom: Story = {
  args: { side: "bottom" },
};
