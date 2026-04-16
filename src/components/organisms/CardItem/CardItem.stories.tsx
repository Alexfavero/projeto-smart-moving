import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { CardItem } from "./CardItem";

const meta = {
  title: "Organisms/CardItem",
  component: CardItem,
} satisfies Meta<typeof CardItem>;

export default meta;

type Story = StoryObj<typeof CardItem>;

export const Default: Story = {
  args: {
    item: {
      id: "1",
      nome: "Cama King Size",
      descricao: "Dimensões: 193cm x 203cm",
      quantidade: 1,
      valorVista: 4250,
      parcelas: 10,
      valorTotalParcelado: 4250,
      status: "comprado",
      link: "https://google.com",
    },
    onEdit: action("edit"),
    onDelete: action("delete"),
  },
};
