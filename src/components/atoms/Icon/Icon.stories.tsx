import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";
import { Icon } from "./Icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: Plus,
    size: 24,
  },
};
