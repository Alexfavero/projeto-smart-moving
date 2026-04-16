import type { Meta, StoryObj } from "@storybook/react";
import { StatusBadge } from "./StatusBadge";

const meta = {
  title: "Atoms/StatusBadge",
  component: StatusBadge,
} satisfies Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof StatusBadge>;

export const Comprado: Story = {
  args: {
    status: "comprado",
  },
};

export const Pendente: Story = {
  args: {
    status: "pendente",
  },
};
