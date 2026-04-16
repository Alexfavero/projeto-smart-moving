import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Adicionar Item",
    variant: "primary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Cancelar",
    variant: "ghost",
  },
};
