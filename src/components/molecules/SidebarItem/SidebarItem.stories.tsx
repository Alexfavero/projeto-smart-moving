import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

const meta = {
  title: "Molecules/SidebarItem",
  component: SidebarItem,
} satisfies Meta<typeof SidebarItem>;

export default meta;

type Story = StoryObj<typeof SidebarItem>;

export const Active: Story = {
  args: {
    icon: Home,
    label: "Quarto",
    active: true,
  },
};

export const Inactive: Story = {
  args: {
    icon: Home,
    label: "Cozinha",
    active: false,
  },
};
