import type { Meta, StoryObj } from "@storybook/react";
import torch from "../assets/models/prop_survival_torch.glb";
import ModelViewer from "./ModelViewer";

const meta = {
  title: "Components/ModelViewer",
  component: ModelViewer,
  parameters: { renderer: "react" },
  args: { model: torch, width: "500px", height: "500px" },
} satisfies Meta<typeof ModelViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
