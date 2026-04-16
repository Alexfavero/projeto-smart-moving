import type { Meta, StoryObj } from "@storybook/react";
import { DataField } from "./DataField";

const meta = {
  title: "Molecules/DataField",
  component: DataField,
} satisfies Meta<typeof DataField>;

export default meta;

type Story = StoryObj<typeof DataField>;

export const Default: Story = {
  args: {
    label: "À vista",
    value: "4.250,00",
    isCurrency: true,
  },
};

export const Highlighted: Story = {
  args: {
    label: "Total",
    value: "13.040,00",
    isCurrency: true,
    highlight: true,
  },
};
