import type { Meta, StoryObj } from "@storybook/react";
import Signature from "./Signature";

const meta = {
  title: "Components/Signature",
  component: Signature,
  parameters: { renderer: "react" },
} satisfies Meta<typeof Signature>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The write-on animation plays once per page load. */
export const Default: Story = {};
