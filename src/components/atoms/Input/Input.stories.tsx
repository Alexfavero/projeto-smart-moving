import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Nome do móvel",
    placeholder: "Ex: Cama King Size",
  },
};

export const WithValue: Story = {
  args: {
    label: "Quantidade",
    type: "number",
    defaultValue: 2,
  },
};
