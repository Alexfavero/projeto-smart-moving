import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ItemModal } from "./ItemModal";

const meta = {
  title: "Organisms/ItemModal",
  component: ItemModal,
} satisfies Meta<typeof ItemModal>;

export default meta;

type Story = StoryObj<typeof ItemModal>;

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: action("close"),
    title: "Cadastrar novo móvel",
  },
};
