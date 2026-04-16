import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Title: Story = {
  args: {
    variant: "title",
    children: "Título principal",
  },
};

export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    children: "Subtítulo explicativo",
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    children: "Conteúdo de exemplo para texto do corpo.",
  },
};
